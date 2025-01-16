import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, } from "@nextui-org/react";
import { IoCartOutline } from "react-icons/io5";
import '../navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import SignUp from "./SignUp";
import { Link, NavLink, useLocation } from "react-router-dom";

function MainNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isOpenedSignUp, setIsOpenedSignUp] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(false);
    const location = useLocation();
    const html = document.documentElement;
    const menuItems = [
        "Eat & Drink",
        "Events",
        "Club",
        "Things to do",
        "MY Profile",
        "Pay With Crypto",
        "Cart",
        "Contact Us",
        "Log Out",
    ];
    const thingsToDo = [
        "Water Sports",
        "Day Parties",
        "Outdoors",
        "Rentals"
    ]
    const account = [
        "My Profile",
        "My History",
        "Sign Out",
    ]
    useEffect(() => {
        if (location.pathname === '/club') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');

        }
    }, [location])


    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} className="py-3 z-20 dark:bg-black">
                <NavbarContent>
                    <NavbarBrand>
                        <img src="/logo.png" alt="" />
                    </NavbarBrand>
                </NavbarContent>


                <NavbarContent justify="end" className="hidden lg:flex">
                    <NavbarItem>
                        <NavLink
                            to="/drink"
                            className={({ isActive }) =>
                                `text-lg font-medium ${isActive ? 'text-primary' : 'text-black dark:text-white'}`
                            }
                        >
                            Eat & Drink
                        </NavLink>
                    </NavbarItem>


                    <NavbarItem>
                        <NavLink to='/club' className={({ isActive }) => ` ${isActive ? 'text-primary' : 'text-black dark:text-white'} text-lg font-medium relative`}>
                            Club <sup className="bg-primary rounded-3xl text-white p-1 py-2 text-[8px] absolute -top-2 left-5">+HOT</sup>
                        </NavLink>
                    </NavbarItem>

                    <NavbarItem>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    variant="none"
                                    className=" dark:text-white"
                                >
                                    <span className="text-lg font-medium ">Things to do</span> <IoIosArrowDown />
                                </Button>
                            </DropdownTrigger>

                            <DropdownMenu aria-label="things to do">
                                {thingsToDo.map(item => (
                                    <DropdownItem color="#D6EBFD" className="hover:bg-[#D6EBFD]" key={item}>{item}</DropdownItem>
                                ))}

                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>

                    <NavbarItem>
                        <Link color="foreground" href="#" className="relative">
                            <span className="bg-primary rounded-full text-white size-5 flex justify-center items-center text-[10px] absolute -top-2 -left-3">3</span>
                            <IoCartOutline size={26} className="relative -z-10 transform -scale-x-100 dark:text-white" />
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Dropdown>
                            <DropdownTrigger className=" dark:text-white" onClick={() => setIsOpenedSignUp
                                (true)}>
                                <Button
                                    variant="none"
                                >
                                    <GoPerson size={20} />
                                    <span className="text-lg font-medium">Account</span>
                                </Button>
                            </DropdownTrigger>

                            {
                                isLogin && <DropdownMenu aria-label="account">
                                    {account.map(item => (
                                        <DropdownItem color="#D6EBFD" className="hover:bg-[#D6EBFD]" key={item}>{item}</DropdownItem>
                                    ))}

                                </DropdownMenu>
                            }
                        </Dropdown>
                    </NavbarItem>

                    <NavbarItem>
                        <button className="primary-button">
                            Contact Now
                        </button>
                    </NavbarItem>
                </NavbarContent>


                <NavbarContent justify="end" className="lg:hidden gap-5">

                    <NavbarItem>
                        <Link color="foreground" href="#" className="relative">
                            <span className="bg-primary rounded-full text-white size-5 flex justify-center items-center text-[10px] absolute -top-2 -left-3">3</span>
                            <IoCartOutline size={26} className="relative -z-10 transform -scale-x-100 dark:text-white" />
                        </Link>
                    </NavbarItem>

                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className=" dark:text-white"
                    />
                </NavbarContent>

                <NavbarMenu className="flex space-y-2.5 bg-blue-50 dark:text-white dark:bg-black pt-7">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color="foreground"
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}

                    <button className="primary-button w-44">Get Started</button>
                </NavbarMenu>
            </Navbar>

            {!isLogin && <SignUp isOpenedSignUp={isOpenedSignUp} setIsOpenedSignUp={setIsOpenedSignUp} />}
        </>
    );
}

export default MainNavbar;
