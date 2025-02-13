import { useEffect, useState } from "react";
import TeamMembers from "./TeamMembers";


const OurTeamMembers = () => {
    const [doctors, setDoctors] = useState([]);
    // console.log(doctors);
    useEffect(() => {
        fetch('doctorsDetails.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold mt-20 mb-7">Our Expert Doctors</h1>
                <p className="px-36 mb-7">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    doctors.map(doctor => <TeamMembers
                        key={doctor._id}
                        doctor={doctor}
                    ></TeamMembers>)
                }
            </div>
        </div>
    );
};

export default OurTeamMembers;