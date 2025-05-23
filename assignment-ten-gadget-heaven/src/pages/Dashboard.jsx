import Banner from '../components/Banner';
import { NavLink, Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Dashboard = () => {
    // const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     const getAllCart = getToItem();
    //     setCart(getAllCart);
    // }, [])
    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <Banner
                title={'Dashboard'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                buttons={[
                    <NavLink
                        key="1"
                        to="/dashboard/cart"
                        className={({ isActive }) => `inline-block min-w-32 rounded-full border px-6 py-3 text-center ${isActive ? "bg-white font-bold text-[#9538E2]" : "text-white"}`}
                    >
                        Cart
                    </NavLink>,
                    <NavLink
                        key="2"
                        to="/dashboard/wishList"
                        className={({ isActive }) => `inline-block min-w-32 rounded-full border px-6 py-3 text-center ${isActive ? "bg-white font-bold text-[#9538E2]" : "text-white"}`}
                    >
                        Wishlist
                    </NavLink>
                ]}
            />

            {/* <div className='flex flex-col gap-5 my-12'>
                {
                    cart.map((item, index) => <Cart key={index} productItem={item} />)
                }
            </div> */}
            <Outlet />
            <div className='py-5'><h1 className='font-bold text-2xl text-center'>Gadget Heaven
            </h1>
                <h1 className=' text-center'>Leading the way in cutting-edge technology and innovation.</h1></div>
        </div>
    );
};

export default Dashboard;