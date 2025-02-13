import Cart from "./Cart";
import clock from '../../../assets/CartInfo/clock.svg';
import location from '../../../assets/CartInfo/marker.svg';
import phone from '../../../assets/CartInfo/phone.svg';



const Carts = () => {
    const cartData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm Everyday',
            icon: clock,
            bgColor: "bg-indigo-500"
        },
        {
            id: 2,
            name: 'Location',
            description: 'Dhanmondi 17, Dhaka -1200, Bangladesh',
            icon: location,
            bgColor: 'bg-red-500'
        },
        {
            id: 3,
            name: 'Contacts',
            description: '+8801744611558 +8801989514860',
            icon: phone,
            bgColor: "bg-indigo-500"
        }
    ]
    return (
        <div>
            <div className="grid gap-4 py-16 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
                {
                    cartData.map(data => <Cart
                        key={data.id}
                        data={data}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;