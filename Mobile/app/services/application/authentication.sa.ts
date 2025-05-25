import { User } from "../../data/dto/User.type";
import { supabase } from "../technical/supabase";
import axios from 'axios';
import Config from '../../config';

export const AuthenticationService = () => {

    return {

        verifyNumber : async (telephoneNumber : string ) => {
            let result = undefined;
            try {
                const response = await axios.post(Config.SUPABASE_URL + "functions/v1/sendOtp", 
                {phone: telephoneNumber},
                {headers: {
                    'Authorization': `Bearer ${Config.SUPABASE_ANON_KEY}`
                
                }});
                result = {success: true, message: response.data};
            } catch (error) {
                result = {success : false, message : error.message}
            }

            return result;
        
        },

        verifyCode : async (telephoneNumber : string, code : string) => {
            let result = undefined;
            try {
                const response = await axios.put(Config.SUPABASE_URL + "functions/v1/verifyOtp", 
                {
                    "phone": telephoneNumber,
                    "otp_code": code
                },
                {headers: {
                    'Authorization': `Bearer ${Config.SUPABASE_ANON_KEY}`
                
                }});
                result = {success: true, message: response.data};
            } catch (error) {
                result = {success : false, message : error.message}
            }

            return result;
        },

        createUser : async ( email : string, password : string) => {
            let { data, error } = await supabase.auth.signUp({
                email: email,
                password: password
            })

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true}
        },

        updateUser : async ( userData : User) => {
            const { data, error } = await supabase.auth.updateUser({
                email: userData.email,
                password: userData.password,
            })

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true};
        },

        getUser : async () => {
            const { data: { user }, error } = await supabase.auth.getUser()

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, user: user};
        },

        logout : async () => {
            let { error } = await supabase.auth.signOut()

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true};
        },

        login : async (email : string, password : string) => {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })

            console.log('---------UserLogin---- : ', data);
            
            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, user: data};
        }}

}