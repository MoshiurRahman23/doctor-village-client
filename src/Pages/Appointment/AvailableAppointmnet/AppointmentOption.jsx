
const AppointmentOption = ({ appointment }) => {
    const { name, picture } = appointment;
    return (
        <div>
            <div className="card w-full shadow-xl">
                <div className="flex py-5 justify-evenly items-center text-center">
                    <div className="avatar">
                        <div style={{ borderRadius: '0 200px 200px 200px' }} className="w-48 h-24 rounded-xl">
                            <img src={picture} />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title text-2xl">{name}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;