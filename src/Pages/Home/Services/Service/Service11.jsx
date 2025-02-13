import Cosmetic from '../../../../assets/HomeImage/Cosmetic.jpeg';

const Service11 = () => {
    return (
        <div>
            <img className='w-full h-72 py-8' src={Cosmetic} alt="" />
            <h1 className="text-3xl">Electro  Gastrology Therapy</h1>
            <p className='mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
            <p className='mb-5'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <button className="btn-outline btn btn-error">More Details</button>
        </div>
    );
};

export default Service11;