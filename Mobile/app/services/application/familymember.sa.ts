import { FamilyMember } from "../../data/dto/FamilyMember.type"

export const FamilyMemberService = () => {

    return {

        createMember : (member : Partial<FamilyMember>) => {

        },

        getMembersByPatient : (patientId : string) => {

        },

        updateMember : (member : Partial<FamilyMember>) => {
        },

        deleteMember : (memberId : string) => {

        }

    }
}