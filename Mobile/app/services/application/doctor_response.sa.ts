import { supabase } from "../technical/supabase";

export const DoctorResponseService = () => {
    return {
        getDoctorResponseByRequest : async (requestId : string) => {
            let { data: doctor_actions, error } = await supabase
                .from('doctor_actions')
                .select(`*, recommendations_id(patient_request_id)`);
                //.eq("patient_request_id", requestId);
            
            console.log('---------Doctor Responses------ : ', doctor_actions);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, responses: doctor_actions};    
            

        }  
    }
}