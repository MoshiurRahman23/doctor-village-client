import bg from '../../../assets/Appointment/bg.png';
import chair from '../../../assets/Appointment/chair.jpg';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className='my-6' style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-12'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;