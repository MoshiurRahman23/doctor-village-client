import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";


const AvailableAppointment = ({ selectedDate }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div className="py-12">
            <h1 className="text-2xl text-center text-red-500 font-semibold">Available Service on {format(selectedDate, 'PPP')} </h1>
            <h1 className="text-5xl text-center font-semibold py-5">Please select a service.</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 py-7">
                {
                    appointments?.map(appointment => <AppointmentOption
                        key={appointment.id}
                        appointment={appointment}
                    ></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;