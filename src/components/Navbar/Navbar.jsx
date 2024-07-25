import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/logo/logo.png";
import {useNavigate } from "react-router-dom"; 
import {Dialog,DialogPanel,Disclosure,DisclosureButton,DisclosurePanel,Popover,PopoverButton,PopoverGroup,PopoverPanel} from '@headlessui/react'
import {Bars3Icon,XMarkIcon,UserIcon,BriefcaseIcon,ArrowRightStartOnRectangleIcon} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { auth , provider} from "../../firebase.config";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useAuth } from "../../AuthContext";

const fields = [
    { name: 'Profile', href: '/user-profile', icon: BriefcaseIcon },
    { name: 'Log out', href: '/', icon: ArrowRightStartOnRectangleIcon},
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]


/**
* This function renders the Navbar for the entire website
* @author Mayank Shukla
* @returns 
*/
export default function Navbar({sticky = true}) {

    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef([]);
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const subscription = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
                setUserName(user.displayName);
                setUser(user);
            } else {
                setLoggedIn(false);
            }
        })
        return () => subscription();
    }, [auth])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6 // Adjust this as needed
        };
        
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };
        
        const observer = new IntersectionObserver(callback, options);
        const sections = document.querySelectorAll('.section');
        sectionRefs.current = sections;
        sectionRefs.current.forEach(section => observer.observe(section));
        
        return () => {
            if (sectionRefs.current) {
                sectionRefs.current.forEach(section => observer.unobserve(section));
            }
        };
    }, []);

    const handleLogin = async () => {
        signInWithPopup(auth, provider)
        .then((data) => {
            setUser(data.user.displayName);
            setLoggedIn(true);
        })
    }
    
    const handleLogOut = () => {
        auth.signOut(auth).then(() => {
            console.log("Successfully SIgned out!");
        }).catch((error) => {
            console.log("Error: ", error);
        });
        setLoggedIn(false);
    }
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    return (
        <header className={`${sticky ? 'fixed': ''} inset-x-0 top-0 z-50  bg-white/90 shadow-lg`}>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
            {/* Logo Section */}
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img alt="" src={Logo} className="h-10 w-auto" />
                    </a>
                </div>
            
            {/* Small size media button */}
            
                <div className="flex lg:hidden">
                    <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
            
            {/* Center Nav contents */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-xl tracking-wider">
                    <a href="/#services" className={`leading-6 text-gray-900 ${activeSection === 'services' ? 'border-b-4 border-secondary ': ''}`}
                    >
                    सेवाएं
                    </a>
                    <a href="/#mentorship" className={`leading-6 text-gray-900 ${activeSection === 'mentorship' ? 'border-b-4 border-secondary ': ''}`}>
                    मार्गदर्शन
                    </a>
                    <a href="/#e-library" className={`leading-6 text-gray-900 ${activeSection === 'e-library' ? 'border-b-4 border-secondary ': ''}`}>
                    ई-लाइब्रेरी
                    </a>
                    <a href="/#test-series" className={`leading-6 text-gray-900 ${activeSection === 'test-series' ? 'border-b-4 border-secondary ': ''}`}>
                    टेस्ट सीरीज़
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                {/* <LargeMediaPopover /> */}
                {
                    loggedIn ? <LargeMediaPopover loggedIn={loggedIn} userName={userName} /> : (
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button href="/#" className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={handleLogin}>
                        Log in <span aria-hidden="true">&rarr;</span></button>
                        </div>
                    )
                }
                </div>
            </nav>
        {/* Small Media Nav bar */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                            alt=""
                            src={Logo}
                            className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="/#services"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                    सेवाएं
                                </a>
                                <a
                                    href="/#mentorship"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                    मार्गदर्शन
                                </a>
                                <a
                                    href="/#e-library"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                    ई-लाइब्रेरी
                                </a>
                                <a
                                    href="/#test-series"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                    टेस्ट सीरीज़
                                </a>
                            </div>
                            <div className="py-6">
                            {/* <SmallMediaPopover /> */}
                                {
                                    // console.log();
                                    loggedIn ? <SmallMediaPopover /> : (
                                        <div className=" lg:flex lg:flex-1 lg:justify-end">
                                        <button className="text-sm font-semibold leading-6 text-gray-900"
                                        onClick={handleLogin}>
                                        Log in <span aria-hidden="true">&rarr;</span></button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

const LargeMediaPopover = ({userName, loggedIn}) => {
    const {signOut} = useAuth();
    function handleLogOut() {
        signOut().then(() => {
            console.debug("Successfully SIgned out!");
            window.location.reload();
        }).catch((error) => {
            console.debug("Error: ", error);
        });
    }
    const navigate = useNavigate();
    return (
        <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                {loggedIn && (<div>Hi {userName} !</div>)}
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
        
            <PopoverPanel
            transition
            className="absolute -left-20 top-full w-fit z-10 mt-3 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
            <div className="p-4">
            {fields.map((item) => (
                <div
                key={item.name}
                className="group relative flex items-center gap-x-4 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-secondary" />
                </div>
                <div className="flex-auto">
                <a href={item.href} className="block font-semibold text-gray-900"
                onClick={() => {
                    if (item.name === 'Log out')
                        handleLogOut()
                    else if (item.name === 'Profile') {
                        navigate('/user')
                    }
                }}
                >
                {item.name}
                <span className="absolute inset-0" />
                </a>
                </div>
                </div>
            ))}
            </div>
            {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
                <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                {item.name}
                </a>
            ))}
        </div> */}
        </PopoverPanel>
    </Popover>
)
}

const SmallMediaPopover = () => {
    const {signOut} = useAuth();
    function handleLogOut() {
        signOut().then(() => {
            console.debug("Successfully SIgned out!");
            window.location.reload();
        }).catch((error) => {
            console.debug("Error: ", error);
        });
    }
    return (
        <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    User
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 space-y-2">
            {fields.map((item) => (
                <DisclosureButton
                onClick={() => {
                    if (item.name === 'Log out') {
                        handleLogout();
                    }
                }}
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                {item.name}
                </DisclosureButton>
            ))}
            </DisclosurePanel>
        </Disclosure>
    )
}
