

const Cart = ({ data }) => {
    const { name, description, icon, bgColor } = data;
    return (
        <div className={`card text-white p-5 md:card-side shadow-xl ${bgColor}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Cart;