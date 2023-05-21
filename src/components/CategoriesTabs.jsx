import { useState } from "react";
import { Tab } from "@headlessui/react";
import TabToysCard from "./TabToysCard";

const CategoriesTabs = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    let [categories] = useState({
        "LEGO City": [
            {
                id: "12023052001",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blte840fb67809da48b/60384_alt1.png",
                toy_name: "LEGO City Water Car",
                seller_name: "Brick Store",
                seller_email: "info@brickstore.com",
                price: "24.99 USD",
                rating: "4.5",
                available_quantity: 10,
                detail_description:
                    "Join the LEGO City Coast Guard and patrol the waters with this exciting Water Car set. The Water Car features a powerful motor and realistic design. Help the Coast Guard officer save the day and keep the waters safe!",
            },
            {
                id: "12023052002",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blte3454b31d5a4b7b3/60215_alt1.png",
                toy_name: "LEGO City Fire Station",
                seller_name: "Brick City Emporium",
                seller_email: "sales@brickcityemporium.com",
                price: "89.99 USD",
                rating: "4.6",
                available_quantity: 7,
                detail_description:
                    "Join the LEGO City Fire Brigade and save the day! This Fire Station set includes a fire truck, helicopter, and firefighter minifigures. Be prepared for exciting firefighting adventures!",
            },
            {
                id: "12023052003",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt301d45f6056d2e4f/60195_alt1.png",
                toy_name: "LEGO City Arctic Mobile Exploration Base",
                seller_name: "Polar Bricks",
                seller_email: "info@polarbricks.com",
                price: "119.99 USD",
                rating: "4.7",
                available_quantity: 4,
                detail_description:
                    "Embark on an arctic expedition with the LEGO City Arctic Mobile Exploration Base! This set features a mobile lab, snowmobiles, and explorer minifigures. Discover hidden treasures in the icy wilderness!",
            },
            {
                id: "12023052004",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt9a21ab4714d06ad7/60246_alt1.png",
                toy_name: "LEGO City Police Station",
                seller_name: "Bricktopia",
                seller_email: "sales@bricktopia.com",
                price: "129.99 USD",
                rating: "4.6",
                available_quantity: 3,
                detail_description:
                    "Join the LEGO City Police force and maintain law and order! This Police Station set features a police station building, police car, helicopter, and minifigures of police officers. Solve crimes and keep the city safe!",
            },
            {
                id: "12023052005",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blte376c6183d593dfb/60197_alt1.png",
                toy_name: "LEGO City Passenger Train",
                seller_name: "Brick Railways",
                seller_email: "info@brickrailways.com",
                price: "159.99 USD",
                rating: "4.7",
                available_quantity: 5,
                detail_description:
                    "All aboard the LEGO City Passenger Train! This set includes a motorized train, platform, and passenger cars. Pick up and drop off passengers for a fun railway adventure!",
            },
        ],
        "LEGO Marvel Super Heroes": [
            {
                id: "22023052001",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blte18d9a098c7a5fd4/76166_alt1.png",
                toy_name: "LEGO Marvel Super Heroes Avengers Tower Battle",
                seller_name: "Hero Haven",
                seller_email: "info@herohaven.com",
                price: "79.99 USD",
                rating: "4.8",
                available_quantity: 8,
                detail_description:
                    "Join the epic battle with the Avengers at the iconic Avengers Tower! Defend the tower from the evil Thanos and his minions. Features multiple floors, a rotating turret, and minifigures of your favorite superheroes.",
            },
            {
                id: "22023052004",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt5e8d94310db5776d/76125_alt1.png",
                toy_name: "LEGO Marvel Super Heroes Iron Man Hall of Armor",
                seller_name: "Hero HQ",
                seller_email: "info@herohq.com",
                price: "59.99 USD",
                rating: "4.5",
                available_quantity: 8,
                detail_description:
                    "Enter Tony Stark's high-tech workshop with the LEGO Iron Man Hall of Armor! This set includes minifigures of Iron Man, Pepper Potts, and more. Suit up and join the battle against villains!",
            },
            {
                id: "22023052002",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt44c1d66f1af56218/76130_alt1.png",
                toy_name:
                    "LEGO Marvel Super Heroes Spider-Man: Far From Home Stark Jet and the Drone Attack",
                seller_name: "Marvel Collectibles",
                seller_email: "sales@marvelcollectibles.com",
                price: "69.99 USD",
                rating: "4.5",
                available_quantity: 9,
                detail_description:
                    "Team up with Spider-Man and Nick Fury to stop the drone attack! This set includes the Stark Jet and minifigures of Spider-Man, Mysterio, and Nick Fury. Protect the world from the sinister threats!",
            },
            {
                id: "22023052003",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blte7d6924b7c675dbe/76107_alt1.png",
                toy_name: "LEGO Marvel Super Heroes Thanos: Ultimate Battle",
                seller_name: "Infinity Bricks",
                seller_email: "info@infinitybricks.com",
                price: "79.99 USD",
                rating: "4.8",
                available_quantity: 6,
                detail_description:
                    "Prepare for an epic showdown with Thanos! This set features the Guardians' Ship, Iron Man, Star-Lord, Gamora, and Thanos minifigures. Join the battle to save the universe!",
            },
            {
                id: "22023052005",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt7a68e89f953f3be5/76105_alt1.png",
                toy_name:
                    "LEGO Marvel Super Heroes The Hulkbuster: Ultron Edition",
                seller_name: "Marvel Collectibles",
                seller_email: "sales@marvelcollectibles.com",
                price: "129.99 USD",
                rating: "4.8",
                available_quantity: 4,
                detail_description:
                    "Unleash the power of the Hulkbuster with this Ultron Edition set! This highly detailed set includes a Hulkbuster figure and minifigures of Bruce Banner, Falcon, and Proxima Midnight. Engage in epic battles and protect humanity!",
            },
        ],
        "LEGO Star Wars": [
            {
                id: "32023052001",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt4a12cc342dc7b897/75288_alt1.png",
                toy_name: "LEGO Star Wars AT-AT Walker",
                seller_name: "Galactic Bricks",
                seller_email: "sales@galacticbricks.com",
                price: "149.99 USD",
                rating: "4.7",
                available_quantity: 5,
                detail_description:
                    "Recreate epic battles from Star Wars with the LEGO AT-AT Walker. This iconic vehicle features posable legs, a rotating turret, and minifigures of Luke Skywalker, General Veers, and AT-AT Driver. Prepare for intergalactic adventures!",
            },
            {
                id: "32023052002",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt3ae3b201f7a32d67/75192_alt1.png",
                toy_name: "LEGO Star Wars Millennium Falcon",
                seller_name: "Galaxy Bricks",
                seller_email: "sales@galaxybricks.com",
                price: "799.99 USD",
                rating: "4.9",
                available_quantity: 2,
                detail_description:
                    "Join the adventures in the iconic Millennium Falcon! This massive set includes minifigures of Han Solo, Chewbacca, Leia Organa, and more. Build and display this legendary starship!",
            },
            {
                id: "32023052003",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt9dd3949e3d3a8cf6/75159_alt1.png",
                toy_name: "LEGO Star Wars Death Star",
                seller_name: "Dark Side Collectibles",
                seller_email: "info@darksidecollectibles.com",
                price: "499.99 USD",
                rating: "4.7",
                available_quantity: 3,
                detail_description:
                    "Recreate the iconic Death Star battle scene! This set includes multiple rooms, minifigures of Darth Vader, Luke Skywalker, and more. Join the Rebel Alliance and save the galaxy!",
            },
            {
                id: "32023052004",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt3ae39119b7a99b17/75218_alt1.png",
                toy_name: "LEGO Star Wars X-wing Starfighter",
                seller_name: "Galaxy Bricks",
                seller_email: "sales@galaxybricks.com",
                price: "79.99 USD",
                rating: "4.7",
                available_quantity: 6,
                detail_description:
                    "Join the Rebel Alliance and pilot the iconic X-wing Starfighter! This set features a detailed starfighter, cockpit, and minifigures of Luke Skywalker and R2-D2. Engage in thrilling space battles against the Empire!",
            },
            {
                id: "32023052005",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt48dab771e972be5e/75252_alt1.png",
                toy_name: "LEGO Star Wars Imperial Star Destroyer",
                seller_name: "Dark Side Collectibles",
                seller_email: "info@darksidecollectibles.com",
                price: "699.99 USD",
                rating: "4.9",
                available_quantity: 2,
                detail_description:
                    "Command the mighty Imperial Star Destroyer and rule the galaxy! This massive set includes minifigures of Darth Vader, Imperial Officer, and more. Build and display the symbol of the Empire!",
            },
        ],
        "LEGO Speed Champions": [
            {
                id: "42023052001",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt8e6b5e9ebefdb859/42056_alt1.png",
                toy_name: "LEGO Speed Champions Porsche 911 GT3 RS",
                seller_name: "Speed Racers",
                seller_email: "info@speedracers.com",
                price: "149.99 USD",
                rating: "4.8",
                available_quantity: 3,
                detail_description:
                    "Experience the power and speed of the Porsche 911 GT3 RS! This set features a detailed model, adjustable rear spoiler, and a minifigure of a race car driver. Take it to the racetrack and conquer the competition!",
            },
            {
                id: "42023052002",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/bltb66e86f8ad6b8d0d/76895_alt1.png",
                toy_name: "LEGO Speed Champions Ferrari F8 Tributo",
                seller_name: "Ferrari Store",
                seller_email: "sales@ferraristore.com",
                price: "99.99 USD",
                rating: "4.7",
                available_quantity: 5,
                detail_description:
                    "Drive the iconic Ferrari F8 Tributo on the racetrack! This set includes a buildable Ferrari, race car driver minifigure, and a trophy. Experience the thrill of speed and victory!",
            },
            {
                id: "42023052003",
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt0c2dcb11ef6f77c5/76899_alt1.png",
                toy_name:
                    "LEGO Speed Champions Lamborghini Urus ST-X & Lamborghini Huracán Super Trofeo EVO",
                seller_name: "Lamborghini Store",
                seller_email: "info@lamborghinistore.com",
                price: "129.99 USD",
                rating: "4.6",
                available_quantity: 4,
                detail_description:
                    "Get ready for a thrilling race with the Lamborghini Urus ST-X and Huracán Super Trofeo EVO! This set features two buildable Lamborghini cars, a start line, and race car driver minifigures. Speed towards victory in style!",
            },
        ],
    });
    return (
        <div className="container min-h-[400px] px-2 pb-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="w-full max-w-2xl mx-auto flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                    selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                )
                            }>
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                "rounded-xl bg-white p-3",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 "
                            )}>
                            <div className="grid md:grid-cols-2">
                                {posts.map((post) => (
                                    <TabToysCard post={post}></TabToysCard>
                                ))}
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default CategoriesTabs;
