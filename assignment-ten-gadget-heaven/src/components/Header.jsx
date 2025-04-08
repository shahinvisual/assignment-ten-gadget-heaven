import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import img from '../assets/banner.jpg'

const Header = () => {
    const { pathname } = useLocation();
    return (
        <div>
            {
                pathname === '/' ? (
                    <div>
                        <header>
                            <div className="mx-4 mt-6 pb-40 rounded-t-xl bg-[#9538E2] text-white md:mx-5 lg:mx-6">
                                <Navbar />
                                <Banner
                                    title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
                                    subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}
                                    buttons={[
                                        <NavLink
                                            key={'1'}
                                            to={'/'}
                                            className={({ isActive }) => `inline-block min-w-32 rounded-full border px-6 py-3 text-center ${isActive ? "bg-white font-bold text-[#9538E2]" : "text-white"}`}
                                        >
                                            Shop Now
                                        </NavLink>
                                    ]}
                                />
                            </div>
                        </header>
                        <div className="w-[750px] -top-36 -right-96 relative bg-[rgba(211,211,211,0.5)] border-2 p-5 rounded-xl backdrop-blur-xl">
                            <div className="">
                                <img className=" rounded-xl" src={img} alt="" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <header>
                        <Navbar></Navbar>
                    </header>
                )
            }
        </div>
    );
};

export default Header;