
const AllService = ({ service }) => {
    const { picture } = service;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="avatar">
                    <div className="w-full h-1/2 rounded">
                        <img src={picture} />
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-error">Booked</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllService;