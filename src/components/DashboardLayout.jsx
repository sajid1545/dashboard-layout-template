import { useState } from "react";
import { RxCaretLeft } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { sidebarRoutesGenerator } from "../utils/DashboardRoutesGenerator";
import DashboardNavbar from "./DashboardNav";

const DashboardLayout = () => {
	const [open, setOpen] = useState(true);

	const role = "teacher";

	const Menus = sidebarRoutesGenerator(role);

	return (
		<div className="flex">
			{/* Sidebar */}
			<div
				className={` ${
					open ? "w-72" : "w-20 "
				} bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 text-white h-screen p-5  pt-8 relative duration-300`}>
				<RxCaretLeft
					color="black"
					size={30}
					className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full border-2  z-50   bg-white    ${
						!open && "rotate-180"
					}`}
					onClick={() => setOpen(!open)}
				/>

				<div className="flex gap-x-4 items-center">
					<img src={logo} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
					<h1
						className={`text-white origin-left font-medium text-xl duration-200 ${
							!open && "scale-0"
						}`}>
						Designer
					</h1>
				</div>
				<ul className="pt-6">
					{Menus.map((Menu, index) => (
						<Link key={index} to={Menu.to}>
							<li
								key={index}
								className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
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
				<div className="h-screen flex-1 p-7">
					<h1 className="text-2xl font-semibold ">{<Outlet />}</h1>
				</div>
			</div>
		</div>
	);
};
export default DashboardLayout;
