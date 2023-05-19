
const Footer = () => {
    return (
        <>
            <div>
                <div className=" bg-sky-300 bg-opacity-60 stroke-transparent ">
                    <div className="relative flex container">
                        <img
                            className="absolute h-32 bottom-[2px] left-[40px]"
                            src="https://ouch-cdn2.icons8.com/V39WdbzUyJ5ivtk_K8zfSRYINH_yZdQsOttGgVOJ2vE/rs:fit:256:281/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjI4/LzUzN2ZhNTM2LTgz/Y2QtNDBmZC1iMjRi/LWEyMDFkNmVlOTVl/Yi5wbmc.png"
                        />{" "}
                        {/* <img
                            className="absolute h-32 -bottom-[25px] -left-[10px]"
                            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTIzMjQ4MDYzNmQxOGE3YzQwMTNiYzg5MjYyYmQwMTE4YWY5YzdjNSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/2si2ObWL19ZR9EFVX2/giphy.gif"
                        />{" "} */}
                        <div className="ms-36 md:flex flex-1 justify-between gap-6">
                            <div className="text-slate-100 w-9/12">
                                <h2 className="font-bold text-2xl text-violet-900">
                                    Are you a seller ?
                                </h2>
                                <p className="text-lg text-slate-600">
                                    Share your toys with us we will trade your
                                    toy with best price in return.
                                </p>{" "}
                            </div>

                            <div className="recipe-button">
                                <button className="btn bg-cyan-700 border-none hover:bg-sky-500 w-16">
                                    Sell
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className=" bg-cyan-800 footer container p-10 text-base-content text-slate-200">
                    <div>
                        <div className=" bg-cyan-900 rounded-3xl px-4 py-6 border-8 border-white">
                            <h1 className="font-semibold text-5xl text-white ">
                                TO<span className="text-orange-400">Y</span>OU
                            </h1>
                        </div>
                        <p className="font-medium text-base text-slate-200">
                            Making toys since 2000
                        </p>
                    </div>
                    <div>
                        <span className="footer-title">Product</span>
                        <a className="link link-hover">Prototype</a>
                        <a className="link link-hover">Plans & Pricing</a>
                        <a className="link link-hover">Customers</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Latest News</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span className="footer-title">Support & Contact</span>
                        <a className="link link-hover">Help Desk</a>
                        <a className="link link-hover">Become a Partner</a>{" "}
                        <a className="link link-hover">
                            524 Broadway ,
                            <br /> NYC <br />
                            +1 777 - 978 - 5570
                        </a>
                    </div>
                </footer>
            </div>
            <div className="divide-y sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto bg-slate-400 h-[0.5px]  mb-9" />
            <div className=" md:flex md:justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-10 md:px-14 text-gray-500 font-thin">
                <div>
                    @2023 <span className="font-semibold">Ananta</span>. All
                    Rights Reserved
                </div>
                <div>
                    Powered by <span className="font-semibold">Ananta</span>
                </div>
            </div>
        </>
    );
};

export default Footer;