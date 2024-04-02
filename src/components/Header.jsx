import { useState } from "react";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import soulwill from "../assets/soulwill.svg";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
    const pathname = useLocation();

    const [openNavigation, setOpenNavigation] = useState (false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    };

  return (
    <div 
        className={`fixed top-0 left-0 w-full z-50 border-n-3 lg:bg-n-1/90 lg:backdrop-blur-sm
        ${openNavigation ? "bg-n-14" : "bg-n-14/90 backdrop-blur-sm"}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 mx-auto max-w-[80rem]">
            <a className="block w-1/2 xl:mr-8" href="#hero">
                <img 
                    src={ soulwill }
                    width={190} 
                    height={40}
                    alt="Logomarca soulwill"
                />
            </a>
            <nav 
                className={`fixed top-[5rem] left-0 right-0 bottom-0
                 bg-n-14 lg:static lg:flex lg:mx-auto lg:bg-transparent ${ openNavigation ? "flex" : "hidden"}`}>
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item) => (
                        <a 
                            key={ item.id }
                            href={ item.url }
                            onClick={ handleClick }
                            className={`block relative font-code text-2xl uppercase transition-colors hover:text-color-1
                            px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold lg:leading-5 lg:hover:text-n-8 xl:px-12
                            ${
                                item.url === pathname.hash ? "z-2 lg:text-n-8" : "lg:text-n-8/70"
                            }`}
                        >
                            { item.title }
                        </a>
                    ))}
                </div>
            </nav>
            <Button className="ml-auto lg:hidden" px="px-3" onClick={ toggleNavigation }>
                <MenuSvg openNavigation={openNavigation} />
            </Button>
        </div>
    </div>
  )
}

export default Header