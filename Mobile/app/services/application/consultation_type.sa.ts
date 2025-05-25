import { supabase } from "../technical/supabase";

export const ConsultationTypeService = () => {
    return {
        getAllType : async () => {
            let { data: consultation_type, error } = await supabase
                .from('consultation_type')
                .select("*");
            
            console.log('---------Type------ : ', consultation_type);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, types: consultation_type};
        },
        getConsultationType : async (id : string) => {
            let { data: consultation_type, error } = await supabase
                .from('consultation_type')
                .select("*")
                .eq('id', id);
            
            console.log('---------Type------ : ', consultation_type);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, type: consultation_type![0]};
        }
    }
}