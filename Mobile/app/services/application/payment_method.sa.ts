import { supabase } from "../technical/supabase";

export const PaymentMethodService = () => {
    return {
        getAllMethod : async () => {
            let { data: payment_method_types, error } = await supabase
                .from('payment_method_types')
                .select('*')
            
            console.log('---------Type------ : ', payment_method_types);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, types: payment_method_types};    
            
        }
    }
}