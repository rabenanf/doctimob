import { FamilyMember } from "../../data/dto/FamilyMember.type"
import { supabase } from "../technical/supabase"

export const FamilyMemberService = () => {

    return {

        createMember : async (member : Partial<FamilyMember>) => {
            const { data, error } = await supabase
                .from('family_members')
                .insert(member)
                .select();
            
            console.log('---------insert member---- : ', data);
             console.log('---------insert member---- : ', error);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true};
        },

        getMembersByPatient : async (patientId : string) => {
            let { data: family_members, error } = await supabase
                .from('family_members')
                .select("*")
                .eq('patient_id', patientId);

            console.log('---------Family members---- : ', family_members);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true, members: family_members};

        },

        updateMember : async (member : Partial<FamilyMember>, id : string) => {
            const { data, error } = await supabase
                .from('family_members')
                .update(member)
                .eq('id', id)
                .select();

            console.log('---------update member---- : ', data);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true};

        },

        deleteMember : async (memberId : string) => {
            const { error } = await supabase
                .from('family_members')
                .delete()
                .eq('id', memberId);

            console.log('---------Error delete---- : ', error);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true};
        }

    }
}