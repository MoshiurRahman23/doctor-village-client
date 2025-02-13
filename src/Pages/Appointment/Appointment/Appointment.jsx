import { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointmnet/AvailableAppointment";
import AvailableSlots from "../AvailableSlots/AvailableSlots";
import { Helmet } from "react-helmet-async";


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Helmet>
                <title>Doctor-Village | Appointment</title>
            </Helmet>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableAppointment>
            <AvailableSlots></AvailableSlots>
        </div>
    );
};

export default Appointment;