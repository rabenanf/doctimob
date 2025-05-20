import { supabase } from "../technical/supabase";

export const LanguageService = () => {
    return {
        async getLanguageIdByCode(code : string) {
            let { data: language, error : error2 } = await supabase
                .from('languages')
                .select("*")
                .eq('code', code);

            if (language != null && language.length > 0) {
                return language[0].id;
            }

            return undefined;
        }
    }
}