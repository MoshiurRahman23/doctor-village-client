


const BookingModel = ({ treatment, isOpen, onClose }) => {

    console.log(treatment);
    if (!isOpen) return null;

    return (
        <>
            <input type="checkbox" className="modal-toggle" checked={true} onChange={() => { }} />
            <div className="modal">
                <div htmlFor="modal-content">
                    <h2>Modal Content</h2>
                    <p>{treatment}</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    );
};

export default BookingModel;