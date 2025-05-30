import { User } from "../../data/dto/User.type";
import { supabase } from "../technical/supabase";
import { LanguageService } from "./language.sa";

export const UserService = () => {

    const { getLanguageIdByCode } = LanguageService();

    return {
    
        createUserProfile : async ( user : Partial<User> ) => {

            let authenticationUser = null;
            
            let { data : userCreated, error } = await supabase.auth.signUp({
                email: user.email!,
                password: user.password!
            })

            if (error) {
                return {success : false, message : error.message};
            }

            console.log('---------UserCreated---- : ', userCreated);

            if (userCreated.user != null) {
                authenticationUser = userCreated.user;

                let userProfil : any = {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    role: user.role,
                    gender: user.gender,
                    user_id: authenticationUser.id,
                    phone: user.phone,
                    birth_date: user.birth_date
                };

                const { data : location, error: error1 } = await supabase
                .from('localisations')
                .insert({ lat: user.localisation?.lat, lon: user.localisation?.lon})
                .select();

                console.log('---------Location---- : ', location);
            
                let { data: language, error : error2 } = await supabase
                    .from('languages')
                    .select("*")
                    .eq('code', 'en');

                console.log('---------Language---- : ', language);

                if (language != null && language.length > 0) {
                    userProfil.language_id = language[0].id;

                } 
                
                if (location != null) {
                    userProfil.localisation_id = location!.id;
                } 

                const { data, error } = await supabase
                .from('user_profile')
                .insert(userProfil).select();

                if (error) {
                    return {success : false, message : error.message};
                }

                console.log('---------User---- : ', user);

                return {success: true, user: user}
            }
        },

        updateUserProfile : async ( user : Partial<User>, id : string ) => {
            const { data, error } = await supabase
                .from('user_profile')
                .update(user)
                .eq('id', id)
                .select();

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true}
        },

        updateLanguage : async ( id : string, code : string ) => {
            const { data, error } = await supabase
                .from('user_profile')
                .update({ language_id: code })
                .eq('id', id)
                .select();

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true}
        },

        getUserProfile : async ( email : string ) => {
            let { data: user, error } = await supabase
                .from('user_profile')
                .select("*")
                .eq('email', email);

            console.log('---------User---- : ', user);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, user: user}
        },

        getUserProfileByUserid : async ( userId : string ) => {
            let { data: user, error } = await supabase
                .from('user_profile')
                .select(`*, speciality_doctor_id(name)`)
                .eq('user_id', userId);

            console.log('---------User---- : ', user);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, user: user![0] }
        }
    }
}
