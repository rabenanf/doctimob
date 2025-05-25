export type PatientRequest = {
    id?: string,
    patient_id?: string,
    description?: string,
    caregiver_gender_preference: string,
    has_insurance?: boolean,
    preferred_time?: string,
    preferred_date?: string,
    consultation_type?: any,
    preferred_language?: any,
    payment_method?: any,
    family_mamber_id?: string,
    share_medical_history?: boolean,
    specialty_id?: string,
    created_at?: string,
    status?: string
}