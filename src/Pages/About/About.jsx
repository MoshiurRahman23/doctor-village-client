import moduleName from '../../assets/Logo/About.jpg';
import logo from '../../assets/CardImage/v-removebg-preview.png';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${moduleName})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md grid lg:grid-cols-1 justify-items-center">
                        <h1 className="mb-5 text-5xl font-bold"><samp className='text-red-500'>Doctor</samp> Village</h1>
                        <img src={logo} className='p-0 m-0' alt="" />
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;