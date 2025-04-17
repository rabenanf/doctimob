import { useState } from 'react';
import {supabase} from '../technical/supabase';

export const useAuthHook = () => {

    const [loading, setLoading] = useState(false);

    const signIn = async( email : string, password : string) => {
        setLoading(true);
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email?.toLowerCase(),
            password,
        });

        if (error) {
            setLoading(false);
            return {success: false, error: error.message};
        }
        setLoading(false);
        return {success: true, user: data.user, session: data.session};
    }

    const signUp = async(email : string, password : string) => {
        
    }

}
