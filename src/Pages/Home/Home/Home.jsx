import { Helmet } from "react-helmet-async";
import Header from "../../Shared/Header/Header";
import Carts from "../Carts/Carts";
import Contacts from "../Contacts/Contacts";
import OurTeamMembers from "../OurTeam/OurTeamMembers";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Doctor-Village | Home</title>
            </Helmet>
            <Header></Header>
            <div className="max-w-screen-xl mx-auto">
                <Services></Services>
                <Carts></Carts>
                <Reviews></Reviews>
                <OurTeamMembers></OurTeamMembers>
                <Contacts></Contacts>
            </div>
        </div>
    );
};

export default Home;