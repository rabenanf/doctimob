import axios from "axios";
import { PatientRequest } from "../../data/dto/Request.type";
import { supabase } from "../technical/supabase";
import Config from '../../config';

export const RequestService = () => {

    return {

        createRequest : async (request : Partial<PatientRequest>) => {
            const { data, error } = await supabase
                .from('patient_requests')
                .insert(request)
                .select();
            
            console.log('---------Request Created---- : ', data);
            console.log('---------Request Created---- : ', error);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, request: request};
        }, 

        updateRequest : async (request : Partial<PatientRequest>, id : string) => {
            const { data, error } = await supabase
                .from('patient_requests')
                .update(request)
                .eq('id', id)
                .select();
            
            console.log('---------Request updated---- : ', data);
            console.log('---------Request updated---- : ', error);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, request: request};
        },

        getRequestsByUser : async (patient_id : string) => {
            let { data: patient_requests, error } = await supabase
                .from('patient_requests')
                .select(`*, consultation_type(code), payment_method(id, code), preferred_language(code)`)
                .eq('patient_id', patient_id);
            
            console.log('---------Requests list--- : ', patient_requests);
            console.log('---------Requests list--- : ', error);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, requests: patient_requests};
        },

        confirmAppointment : async (doctor_actions_id: string, payment_method_id: string) => {
            let result = undefined;
            try {
                console.log({doctor_actions_id : doctor_actions_id, payment_method_id : payment_method_id});
                const response = await axios.post(Config.PAY_URL + "create-payment-cash", 
                {doctor_actions_id : doctor_actions_id, payment_method_id : payment_method_id},
                {headers: {
                    'Authorization': `Bearer ${Config.SUPABASE_ANON_KEY}`
                
                }});

                result = {success: true, message: response.data};
            } catch (error) {
                result = {success : false, message : error.message}
            }

            return result;
        
        }
    }
}