import { Location } from "../../data/dto/Location.type"
import { supabase } from "../technical/supabase"

export const LocationService = () => {
    return {
        getLocation : async (id : string) => {
            let { data: localisations, error } = await supabase
                .from('localisations')
                .select("*")
                .eq('id', id);

            console.log('---------getlocation---- : ', localisations);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true,location: localisations![0] ?? null};
        },

        addLocation : async (location : Location) => {
            const { data, error } = await supabase
                .from('localisations')
                .insert([
                    {...location}
                ])
                .select();

            console.log('---------addlocation ---- : ', data);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true,location: data};
        },

        updateLocation : async (location : Location, id : string) => {
            const { data, error } = await supabase
                .from('localisations')
                .update({ ...location })
                .eq('id', id)
                .select()

            console.log('---------updatelocation ---- : ', data);

            if (error) {
                return {success : false, message : error.message};
            }

            return {success: true,location: data};
        }

    }
}