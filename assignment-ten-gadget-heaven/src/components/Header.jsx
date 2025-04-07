import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = () => {
    const { pathname } = useLocation();
    return (
        <div>
            {
                pathname === '/' ? (
                    <header>
                        <div className="mx-4 mt-6 rounded-t-xl bg-[#9538E2] text-white md:mx-5 lg:mx-6">
                            <Navbar />
                            <Banner/>
                        </div>
                    </header>
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