

const Slots = ({ slotData, setTreatment }) => {
    const { name, picture, slots } = slotData;


    return (
        <div>
            <div className="card w-full shadow-2xl pb-5">
                <div className=" text-center">
                    <div className="p-5">
                        <div className="avatar">
                            <div className="w-48 h-24  rounded-xl">
                                <img src={picture} />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold py-2">{name}</h2>
                            <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                            <p>{slots.length} {slots.length > 1 ? 'Spaces' : "space"} Available</p>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <button
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-error text-white w-3/4"
                        onClick={() => setTreatment(slotData)}
                    >Book Appointment</button>

                </div>
            </div>
        </div>
    );
};

export default Slots;