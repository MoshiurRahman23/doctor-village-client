import { useEffect, useState } from "react";
import AllService from "./AllService/AllService";


const AllServices = () => {
    const [services, setServices] = useState([]);

    // console.log(services);
    useEffect(() => {
        fetch('AllServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-5 mt-5 max-w-screen-xl mx-auto">
            {
                services.map(service => <AllService
                    key={service._id}
                    service={service}
                ></AllService>
                )
            }
        </div>
    );
};

export default AllServices;