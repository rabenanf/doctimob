import { User } from "../../data/dto/User";
import { supabase } from "../technical/supabase"

export const UserService = () => {
    
    const createUserProfile = async ( user : User) => {
        const { data, error } = await supabase
            .from('user_profile')
            .insert([
                { some_column: 'someValue', other_column: 'otherValue' },
            ])
            .select();
        if (error) {
            return {success : false, message : error.message};
        }

        return {success: true}
    }

    const updateUserProfile = async ( user : User, id : string ) => {
        const { data, error } = await supabase
            .from('user_profile')
            .update({ other_column: 'otherValue' })
            .eq('id', id)
            .select();

        if (error) {
            return {success : false, message : error.message};
        }

        return {success: true}
    }

    const updateLanguage = async ( user : User, id : string ) => {
        const { data, error } = await supabase
            .from('user_profile')
            .update({ other_column: 'otherValue' })
            .eq('id', id)
            .select();

        if (error) {
            return {success : false, message : error.message};
        }

        return {success: true}
    }

    const getUserProfile = async ( email : string ) => {
        let { data: user, error } = await supabase
            .from('user_profile')
            .select("*")
            .eq('email', email);

        if (error) {
            return {success : false, message : error.message};
        }

        return {success: true, user: user}
    }

}