import { Location } from "./Location.type"

export type User = {
    phone?: string,
    email?: string,
    first_name?: string,
    last_name?: string,
    adresse?: string,
    birth_date?: string,
    gender?: string,
    role?: string,
    password?: string,
    id?: string,
    user_id?: string,
    language_id?: string,
    image_url?: string,
    localisation?: Location
}