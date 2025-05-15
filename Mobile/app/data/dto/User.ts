import { Location } from "./Location"

export type User = {
    phone?: string,
    email?: string,
    firstname?: string,
    lastname?: string,
    address?: string,
    birthday?: string,
    gender?: string,
    role?: string,
    password?: string,
    id?: string,
    user_id?: string,
    language_id?: string,
    image_url?: string,
    localisation?: Location
}