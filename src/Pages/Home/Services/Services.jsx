import { useEffect, useState } from 'react';
import doctor from '../../../assets/HomeImage/dr-ex1.jpeg';
import 'react-tabs/style/react-tabs.css';
import Service1 from './Service/Service1';
import Service111 from './Service/Service111';
import Service11 from './Service/Service11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Service1111 from './Service/Service1111';

const Services = () => {
    const [services, setServices] = useState();
    console.log(services);

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src={doctor} className="min-h-screen w-full rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-3/4 px-7'>
                        <h1 className="text-5xl font-bold text-red-500">Our Services</h1>
                        <p className="py-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                        <Tabs>
                            <TabList className="join text-center">
                                <Tab className="join-item btn hover:bg-red-400">Cavity Protection</Tab>
                                <Tab className="join-item btn hover:bg-red-400">Cosmetic Dentistry</Tab>
                                <Tab className="join-item btn hover:bg-red-400">Oral Surgery</Tab>
                                <Tab className="join-item btn hover:bg-red-400">Teeth Orthodontics</Tab>
                            </TabList>

                            <TabPanel>
                                <Service1></Service1>
                            </TabPanel>
                            <TabPanel>
                                <Service11></Service11>
                            </TabPanel>
                            <TabPanel>
                                <Service111></Service111>
                            </TabPanel>
                            <TabPanel>
                                <Service1111></Service1111>
                            </TabPanel>
                        </Tabs>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;