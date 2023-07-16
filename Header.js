import { useState } from "preact/hooks";

//'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css
const menuItems = [
    {
        id: 1,
        title: 'Home',
        exact: true,
        to: '/',
        icon: 'bx bx-home-alt',
    },
    {
        id: 2,
        title: 'Portfolio',
        exact: true,
        to: '/portfolio',
        icon: 'bx bx-briefcase',
    },
    {
        id: 3,
        title: 'Concepts',
        exact: true,
        to: '/concepts',
        icon: 'bx bx-bracket ',
    },
    {
        id: 4,
        title: 'Contact',
        exact: true,
        to: '/contact',
        icon: 'bx bx-comment-detail',
    },
];

export default function Header(props) {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

	return <>
        <div className={`fixed w-full h-[180px] flex justify-between items-center px-4`}>
            <div>
                {/* Logo or Tag */}
                <h1 className="text-5xl ">YH</h1>
            </div>

            {/* Desktop */}
            {<ul className={`hidden md:flex`}>
                {menuItems.map((item) =>
                    <li key={item.id}>
                        <a href={item.to}>
                        <div>
                            <h2 className="text-lg font-semibold sm:text-xl">
                                <i className={` ${item.icon} sm:px-1`} ></i>
                                {item.title}
                            </h2>
                        </div>
                    </a>
                </li>)}
            </ul>}
            
            {/* Hamburger Menu */}
            <div className={`md:hidden z-10 text-6xl`} onClick={handleClick}>
                {!nav ?  <i class='bx bx-menu' /> :  <i class='bx bx-x '></i>}
            </div>

            {/* Mobile */}
            <ul className={!nav ? "hidden" : `absolute top-0  left-0 w-full h-screen flex flex-col justify-center items-center ${props.darkMode === 'night' ? 'bg-slate-900': 'bg-white' }`} >
                {menuItems.map((item) =>
                    <li key={item.id}>
                        <a href={item.to}>
                        <div>
                            <h2 className="font-semibold py-6 text-5xl">
                                <i className={` ${item.icon} `} ></i>
                                {item.title}
                            </h2>
                        </div>
                    </a>
                </li>)}
            </ul>

            {/* Social Media */}
            <div className="fixed flex-col top-[35%] left-0 sm:flex hidden">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 text-gray-300">
                        <a 
                            href="YOUR_LINK_HERE" 
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-around items-center w-full">
                                LinkedIn <i className="bx bxl-linkedin text-3xl"  />
                        </a>
                    </li>
                </ul>

                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700 text-gray-300">
                        <a 
                            href="YOUR_LINK_HERE" 
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-around items-center w-full">
                                Github <i className="bx bxl-github text-3xl"  />
                        </a>
                    </li>
                </ul>                
            </div>

        </div>
	</>
}
