import { Link } from 'react-router-dom';
import doc1 from '../../../assets/HeaderImage/doc1.jpeg';
import doc2 from '../../../assets/HeaderImage/doc2.jpeg';
import doc3 from '../../../assets/HeaderImage/doc3.jpeg';
import './header.css'

const Header = () => {
    return (
        <div>
            <div className="hero text-white bg-indigo-600">
                <div className="hero-content flex-col lg:flex-row gap-7">

                    <div className="lg:w-1/2 md:w-full sm:w-full lg:p-7 sm:p-0">
                        <h1 className="text-4xl font-bold mb-2">Your Best Medical</h1>
                        <h1 className="text-4xl font-bold mb-2">Help Center</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/allServices'><button className="btn btn-error">All Service</button></Link>
                    </div>
                    <div className="grid justify-items-center items-center gap-3 lg:grid-rows-1 sm:grid-cols-1 lg:w-3/4 md:w-full sm:w-full h-[450px] bg-style" >
                        <div className="avatar">
                            <div className="w-48 h-72 mt-24 mr-4 -skew-x-6 rounded">
                                <img src={doc1} alt='' />
                            </div>
                            <div className="w-48 h-72 mt-7 -skew-x-6 rounded">
                                <img src={doc2} alt='' />
                            </div>
                            <div className="w-48 h-72 mt-24 -skew-x-6 rounded">
                                <img src={doc3} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;