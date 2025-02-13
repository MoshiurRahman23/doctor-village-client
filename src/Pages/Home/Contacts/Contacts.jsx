import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { useState } from "react";
import DatePicker from "react-datepicker";



const Contacts = () => {
    const [startDate, setStartDate] = useState(new Date());



    return (
        <div className="bg-indigo-500 py-28 w-full justify-items-center grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="text-white w-1/2">
                <h1 className="text-3xl font-bold mb-4">Contact With Us</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <div className='flex flex-col mt-5 gap-5'>
                    <div className='flex justify-between text-center'>
                        <MdOutlinePhoneCallback className="text-2xl"></MdOutlinePhoneCallback>
                        <p className="text-xl">+8801989854860</p>
                    </div>
                    <div className='flex justify-between text-center'>
                        <FaMapMarkerAlt className="text-2xl"></FaMapMarkerAlt>
                        <p className="text-xl">Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
                    <input type="text" placeholder="Name" className="input input-bordered input-primary w-full" />
                    <input type="email" placeholder="Type email" className="input input-bordered input-primary w-full" />
                    <input type="number" placeholder="Type number" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type doctor name" className="input input-bordered input-primary w-full" />

                    <label className="flex justify-evenly items-center input input-bordered text-center">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                        <FaCalendarAlt></FaCalendarAlt>
                    </label>


                    <select className="select w-full">
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <button className="btn btn-error w-full text-white">Book Now</button>
            </div>
        </div>
    );
};

export default Contacts;