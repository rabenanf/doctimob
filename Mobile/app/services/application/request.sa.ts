import { supabase } from "../technical/supabase";

export const RequestService = () => {

    return {

        createRequest : async (request : Partial<Request>) => {
            const { data, error } = await supabase
                .from('patient_requests')
                .insert([
                    request,
                ])
                .select();

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, request: request}
        }
    }
}