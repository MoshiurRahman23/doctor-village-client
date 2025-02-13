import { useEffect, useState } from "react";
import Slots from "./Slots";
import BookingModel from "../BookingModel/BookingModel";


const AvailableSlots = () => {
    const [slots, setSlots] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setSlots(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center font-bold py-7">Available slots for Teeth Orthodontics.</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 py-7">
                {slots?.map(slotData => <Slots
                    key={slotData.id}
                    slotData={slotData}
                    setTreatment={setTreatment}
                ></Slots>)}
            </div>
            <BookingModel
                treatment={treatment}
            ></BookingModel>
        </div>
    );
};

export default AvailableSlots;