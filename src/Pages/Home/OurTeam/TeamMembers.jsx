import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";


const TeamMembers = ({ doctor }) => {
    const { name, designation, balance, address, free, picture } = doctor;
    // console.log(doctor);
    return (
        <div>
            <div className="card w-full p-8 bg-base-100 shadow-xl">
                <div className="avatar">
                    <div className="w-full  rounded">
                        <img src={picture} />
                    </div>
                </div>
                <div className="card-body p-0">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{designation}</p>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={5}
                        readOnly
                    />
                    <div className="mt-2">
                        <p className="flex justify-items-center text-center"><HiOutlineLocationMarker className="text-2xl mr-3 mb-2" />{address}</p>
                        <p className="flex justify-items-center text-center"><CiCalendar className="text-2xl mr-3 mb-2"></CiCalendar>{free}</p>
                        <p className="flex justify-items-center text-center"><CiDollar className="text-2xl mr-3 mb-2"></CiDollar>{balance}</p>
                    </div>
                    <Link to='/doctorProfile/doctorInfo' ><button className="btn w-full hover:bg-red-500 hover:text-white border-2 border-red-500 font-bold text-2xl">View Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;