import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <AliceCarousel
                dotsDisabled="false"
                buttonsDisabled="false"
                autoPlay
                autoPlayInterval="3000"
            >
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                    alt="amazon homepage"
                />
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                    alt="amazon homepage"
                />
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                    alt="amazon homepage"
                />
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
                    alt="amazon homepage"
                />
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
                    alt="amazon homepage"
                />
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
                    alt="amazon homepage"
                />
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
                    alt="amazon homepage"
                />
            </AliceCarousel>
            <div className="home__row">
                <Product
                    id="4903850"
                    title="New Apple MacBook Pro"
                    price={2000.0}
                    rating={5}
                    image="https://www.naijatechguide.com/wp-content/uploads/2020/04/mbp1-scaled.jpg"
                />
                <Product
                    id="23445930"
                    title="Donner 36'' Dreadnought Acoustic Guitar Package"
                    price={98.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71CSCS470TL._AC_SL1500_.jpg"
                />
                <Product
                    id="3254354345"
                    title="DPMS Full Auto SBR CO2-Powered"
                    price={169.99}
                    rating={4}
                    image="https://media.mwstatic.com/product-images/src/primary/907/907633.jpg"
                />
                <Product
                    id="3254354345"
                    title="Ashley Chime 12 Inch Medium Firm Memory Foam Mattress - CertiPUR-US Certfied, Queen"
                    price={500.0}
                    rating={4}
                    image="https://www.thesleepjudge.com/wp-content/uploads/2020/07/Zinus-1.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="656368"
                    title="Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro)"
                    price={573.99}
                    rating={6}
                    image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/79/302144/1.jpg?5665"
                />
                <Product
                    id="6685235"
                    title="Video Camera 2.7K Camcorder Ultra HD"
                    price={98.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/717cFfv5O7L._AC_SL1000_.jpg"
                />
                <Product
                    id="98763687"
                    title="OMEN X by HP 15-inch Gaming Laptop"
                    price={799.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/810gynDZHzL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="8572525"
                    title="Shany all in one harmony makeup kit - ultimate color combination - new edition"
                    price={30.99}
                    rating={3}
                    image="https://i.pinimg.com/originals/30/3b/df/303bdf0cb593a6cef72ba96e98f7b112.jpg"
                />
                <Product
                    id="5668632"
                    title="Acoustic Audio by Goldwood AA5400 Bluetooth 5.1 Speaker System"
                    price={202.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71iazUEUCzL._AC_SY355_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="326695"
                    title="LEXUS GX 560"
                    price={500000.99}
                    rating={5}
                    image="https://i.pinimg.com/originals/b3/57/99/b35799aceed8e308aea89d23b2c44cf4.png"
                />
            </div>
        </div>
    );
}

export default Home;
