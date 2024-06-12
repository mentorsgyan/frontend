import React from "react";
import Logo from "../../assets/2.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Courses",
        link: "/#"
    },
    {
        id: 3,
        name: "About Us",
        link: "/#"
    },
]

const DropdownLinks = [
    {
        id: 1,
        name: "Results",
        link: "/#"
    },
]

const Navbar = ({bottom = true}) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    return <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper navbar */}
        <div className="bg-primary/40 py-2">
            <div className="flex justify-between items-center">
                <div className="container">
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="Logo" 
                        className="w-10 uppercase"/>
                        MentorsGyan
                    </a>
                </div>
                 {/* Buttons*/}
                    {/* search bar */}
                 <div className="container flex justify-between items-center gap-4">
                    <div className="relative group hidden sm:block">
                        <input type="text" placeholder="Search"
                        className="w-[200px] sm:w-[200px] group-hover:w-[300px] 
                        transition-all duration-300 rounded-full border 
                        border-gray-300 px-2 py-1 focus:outline-none
                        focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                        />
                        <IoMdSearch 
                        className="text-gray-500 group-hover:text-primary 
                        absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                 {/* order button */}
                 <button onClick = {() => alert("Ordering not available yet.")}
                    className="bg-gradient-to-r from-primary to-secondary
                    transiotion-all duration-200 text-white py-1 px-4 rounded-full flex items-center
                    gap-3 group">                    
                    <span className="group-hover:block hidden transition-all duration-200">Order</span>
                    <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                 </button>
                    <div className="">
                        {isAuthenticated ? <div className="flex gap-4"><LogoutButton /> <Profile /></div> : <LoginSignUp />}
                    </div>
                 </div>
            </div>
        </div>
        {/* lower navbar */}
        {bottom && <BottomNav />}
    </div>
}

const BottomNav = () => {
    return (
        <div>
            <div className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-4">
                    {
                        Menu.map(data => (
                            <li key = {data.id}>
                                <a href={data.link}
                                className="inline-block px-4 hover:text-primary duration-200"
                                >{data.name}</a>
                            </li>
                        ))
                    }
                    <li className="group relative cursor-pointer">
                        <a href="#mayank"
                        className="flex items-center gap-[2px] py2">
                            Trending Courses
                            <span>
                                <FaCaretDown 
                                className="transition-all duration-200 group-hover:rotate-180"/>
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-m
                        d bg-white p-2 text-black shadow-md">
                            <ul>
                                {DropdownLinks.map(data => (
                                    <li key = {data.id}>
                                        <a href={data.link}
                                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                        >{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const LoginSignUp = () => {
    const { loginWithRedirect } = useAuth0();
    return <div>       
        <button className="bg-gradient-to-r from-primary to-secondary
                    transiotion-all duration-200 text-white py-1 px-4 rounded-full flex items-center
                    gap-3"  onClick={() => loginWithRedirect()}>Log In</button>
    </div>
}

const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <button className="bg-gradient-to-r from-primary to-secondary
      transiotion-all duration-200 text-white py-1 px-4 rounded-full flex items-center
      gap-3" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    );
};

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  
    return (
      isAuthenticated && (
        <div className="flex gap-2 items-center">
          <img className="w-1/6 rounded-full" src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
        </div>
      )
    );
};

export default Navbar