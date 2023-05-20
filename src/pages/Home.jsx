import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Waves from "../components/Waves";
import { register } from "swiper/element/bundle";
import Gallery from "../components/Gallery";
import CategoriesTabs from "../components/CategoriesTabs";

register();

const Home = () => {
    const images = [
        "https://i.ibb.co/cXQnJSK/wallpapersden-com-forza-horizon-lego-4800x2700.jpg",
        "https://i.ibb.co/j50skJs/1920x1080-575503-the-lego-movie.jpg",
        "https://i.ibb.co/vVNZtL0/1352000-lego-hd-wallpaper-1920x1080-for-phones.jpg",
        "https://i.ibb.co/t2bv4ZT/1351957-new-lego-hd-wallpaper-1920x1080-full-hd.jpg",
        "https://i.ibb.co/PtZqY1f/1352020-lego-hd-wallpaper-3840x2160-for-iphone.jpg",
        "https://i.ibb.co/164PjHV/wp2976644-star-wars-lego-wallpaper.jpg",
        "https://i.ibb.co/w4G9Ph3/565936-the-lego-wallpaper.jpg",
        "https://i.ibb.co/DM8KgtS/1352017-lego-hd-wallpaper-2000x1333-720p.jpg",
        "https://i.ibb.co/PmPBBrM/lego-mclaren-senna-2019-5k-HD.jpg",
        "https://i.ibb.co/ThkKzCn/pxfuel.jpg",
        "https://i.ibb.co/G7ty6Vg/wp2976645-star-wars-lego-wallpaper.jpg",
    ];
    return (
        <>
            <div className=" h-[230px] md:h-[650px] container px-4 md:px-14">
                <img
                    src="https://i.ibb.co/DDT56hC/lego-banner.png"
                    alt=""
                    className=" absolute h-[300px] md:h-[730px] left-0 w-full object-cover "
                />
                <div className="absolute h-[300px] md:h-[730px] left-0 w-full bg-slate-950 opacity-30"></div>
                <div className="absolute left-0 text-white h-[300px] md:h-[730px] w-full flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="font-bold text-3xl md:text-6xl mb-5">
                            Hello to the world of Legos
                        </h1>
                        <p className="text-xl md:text-3xl mb-5">
                            Find the piece you want
                        </p>
                        <div className="relative">
                            <input
                                type="text"
                                className="rounded-full input input-bordered input-info w-full max-w-xl"
                                placeholder="Search"
                            />
                            {/* <button className="absolute left-3/4 md:left-[80%]  text-gray-400">Search</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Waves></Waves>
            <h1 className="text-center font-bold text-5xl mb-6">
                You will{" "}
                <FontAwesomeIcon
                    icon={faHeart}
                    size="lg"
                    style={{ color: "#eb0000" }}
                />{" "}
                to build
            </h1>
            <Gallery images={images}></Gallery>
            <h1 className="text-center font-bold text-5xl mb-6">
                Categories
            </h1>
            <CategoriesTabs></CategoriesTabs>
        </>
    );
};

export default Home;
