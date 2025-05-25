import { supabase } from "../technical/supabase"

export const AppointmentService = () => {
    
    return {

        getAppointmentsByUser : async (patient_id : string) => {
            let { data: appointments, error } = await supabase
                .from('appointments')
                .select(`*, request_id(preferred_date, preferred_time, consultation_type(code))`);
                //.eq('patient_id', patient_id);

            console.log('---------appointment list---- : ', appointments);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, appointments: appointments};

        }
    }

}