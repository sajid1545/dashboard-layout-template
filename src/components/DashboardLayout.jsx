import { useEffect, useRef, useState } from "react";
import { RxCaretLeft } from "react-icons/rx";
import { Link, Outlet, useLocation } from "react-router-dom";
import logoMobile from "../assets/titanDashboadLogo.svg";
import logo from "../assets/titanLogo.png";
import { sidebarRoutesGenerator } from "../utils/DashboardRoutesGenerator";
import DashboardNavbar from "./DashboardNav";

const DashboardLayout = () => {
	const [open, setOpen] = useState(true);

	const wrapperRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setOpen(false);
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const role = "teacher";
	const Menus = sidebarRoutesGenerator(role);
	const pathname = useLocation().pathname;

	return (
		<div className="flex bg-[#0C0A18] text-white">
			{/* Sidebar */}
			<div
				ref={wrapperRef}
				className={`${
					open ? "w-72" : "w-20"
				} bg-[#181624] text-[#9D9D9D] h-screen p-2 lg:p-5 pt-8 relative duration-300 min-h-svh`}>
				<RxCaretLeft
					color="white"
					size={30}
					className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full  z-50 bg-gradient-to-r from-[#9462FF] to-[#075CBF] ${
						!open && "rotate-180"
					}`}
					onClick={() => setOpen(!open)}
					aria-label="Toggle Sidebar"
				/>

				<div className="flex gap-x-4 items-center justify-center">
					{!open ? (
						<img src={logoMobile} className="cursor-pointer duration-500" alt="Logo" />
					) : (
						<img src={logo} className={`cursor-pointer duration-500 h-11`} alt="Logo" />
					)}
				</div>
				<ul className="pt-6">
					{Menus.map((Menu, index) => (
						<Link title={Menu.title} key={index} to={Menu.to}>
							<li
								className={`flex rounded-md p-2 cursor-pointer ${!open && "justify-center"} ${
									pathname === Menu.to ? "bg-gradient-to-r from-[#9462FF] to-[#075CBF] text-white" : "text-gray-300"
								}  text-sm items-center gap-x-4 mb-7 p-3 ${Menu.gap ? "mt-9" : "mt-2"}`}>
								{Menu.src}
								<span className={`${!open && "hidden"} origin-left duration-200`}>
									{Menu.title}
								</span>
							</li>
						</Link>
					))}
				</ul>
			</div>

			<div className="w-full">
				<DashboardNavbar />
				{/* Body */}
				<div className="flex-1 p-7">
					<h1 className="text-2xl font-semibold">
						<Outlet />
					</h1>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
