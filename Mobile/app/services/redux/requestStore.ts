import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { PatientRequest } from '../../data/dto/Request.type';

type RequestStore = {
    requests : PatientRequest[],
    current? : PatientRequest,
    selectedMedicalService? : any,
    countRequests : () => number,
    setRequests : (list : PatientRequest[]) => void,
    setCurrent : (request : PatientRequest) => void,
    setSelectedMedicalService : (offer : any) => void
};

const useRequestStore = create<RequestStore>()(
    (set, get) => ({
        requests : [],
        current : undefined,
        selectedMedicalService : undefined,

        countRequests : () => get().requests.length,
        setRequests : (list) => {
            set({ requests : list });
        },
        setCurrent : (request) => {
            set({ current : request });
        },
        setSelectedMedicalService : (offer) => {
            set({ selectedMedicalService : offer})
        }
    })
);

export default useRequestStore;
