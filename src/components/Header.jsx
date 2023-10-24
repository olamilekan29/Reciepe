import {AiOutlineUser, AiOutlineSearch, AiOutlineHeart, AiOutlineMenu} from "react-icons/ai"
import logo from "../assets/images/logo.svg"
const Header = () => {
    return(
        <>
            <header className="flex md:justify-between bg-[#f6b100] py-4 px-10 items-center">
                <AiOutlineMenu className="md:hidden"/>
                <div className="w-fit self-center md:self-start m-auto md:m-0">
            
                <img src={logo} className="img-fluid w-[200px]" />
                </div>
                <div className="hidden md:flex gap-10 text-white text-xl">
                    <AiOutlineSearch/>
                    <AiOutlineHeart className="text-white"/>
                    <AiOutlineUser/>
                </div>
            </header>
            <div className="md:hidden flex bg-[#f6b100] py-3 px-5 items-center">
                <div className="flex items-center ps-5 gap-5 w-full bg-white rounded h-[50px]">
                    <AiOutlineSearch className="text-[#9f9f9f] text-[25px]"/>
                    <input placeholder="Search recipes" className="w-full text-[#9f9f9f] "/>
                </div>
            </div>
        </>
    )
};

export default Header;