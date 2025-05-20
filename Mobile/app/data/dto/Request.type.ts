export type Request = {
    id?: string,
    patient_id?: string,
    description?: string,
    caregiver_gender_preferrence: string,
    has_insurance?: boolean,
    preferred_time?: string,
    preferred_date?: string,
    consultation_type?: string,
    preferred_language?: string,
    payment_method?: string,
    status?: string,
    family_mamber_id?: string,
    share_medical_history?: boolean,
    specialty_id?: string
}