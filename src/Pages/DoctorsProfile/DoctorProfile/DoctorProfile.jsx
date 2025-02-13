import DoctorDetails from "../DoctorDetails/DoctorDetails";
import DoctorsInfo from "../DoctorsInfo/DoctorsInfo";
import { Helmet } from 'react-helmet-async';



const DoctorProfile = () => {

    return (
        <div className='max-w-screen-xl mx-auto'>
            <Helmet>
                <title>Doctor-Village | Profile</title>
            </Helmet>
            <DoctorsInfo></DoctorsInfo>
            <DoctorDetails></DoctorDetails>
        </div>
    );
};

export default DoctorProfile;