import React, { useEffect } from "react";
import Header from "../../components/Banner/Header";
//import Countfigures from '../../components/Countfigures/Countfigures';
import Allinoneapp from "../../components/Allinoneapp/Allinoneapp";
import Meansforyou from "../../components/Meansforyou/Meansforyou";
import Audited from "../../components/Audited/Audited";
import Partners from "../../components/Partners/Partners";
import Inthenews from "../../components/Inthenews/Inthenews";
import Mobilefirst from "../../components/Mobilefirst/Mobilefirst";
import Navigation from "../Navigation/Navigation";
import Supportblock from "../supportBlockchain/Supportblock";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="particle">

            <section className="home-wrapper">

                {/* <Countfigures/> */}
                <Allinoneapp />

                {/* <Investors/>   */}

                <Supportblock />
            </section>
        </div>
    );
};

export default Home;
