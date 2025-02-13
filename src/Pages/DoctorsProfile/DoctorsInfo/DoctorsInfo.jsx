
import { useEffect, useState } from 'react';
import moduleName from '../../../assets/HeaderImage/doc1.jpeg';
import { Rating } from "@smastrom/react-rating";

const DoctorsInfo = () => {
    const [docDetails, setDocDetails] = useState([]);
    console.log(docDetails);

    useEffect(() => {
        fetch('http://localhost:5000/doctorsDetails')
            .then(res => res.json())
            .then(data => setDocDetails(data));
    }, [])
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={moduleName} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">DC:{docDetails.length}</h1>
                    {docDetails?.length > 0 ? <p className="py-2">{docDetails.name}</p> : 'No'}

                    <Rating
                        style={{ maxWidth: 150 }}
                        value={3}
                        readOnly
                    />
                    {/* <button className="btn btn-outline">Dental Filling</button>
                    <button className="btn ms-3 btn-outline">Teeth Whitneing</button> */}
                </div>
            </div>
        </div>
    );
};

export default DoctorsInfo;