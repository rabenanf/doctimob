import { supabase } from "../technical/supabase";

export const SpecialtyService = () => {
    return {
        getAllSpecialty : async () => {

            let { data: specialities, error } = await supabase
                .from('specialities')
                .select("*");

            console.log('---------Specialty---- : ', specialities);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, specialties: specialities};


        }
    }
}