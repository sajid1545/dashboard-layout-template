import { FaInbox } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuFileSearch } from "react-icons/lu";
import { MdAccountBox, MdDashboard } from "react-icons/md";

export const sidebarRoutesGenerator = (role) => {
	const roleMenus = [];

	switch (role) {
		case "admin":
			roleMenus.push(
				{ title: "Admin Dashboard", src: <MdDashboard size={25} />, to: "/dashboard" },
				{ title: "Inbox", src: <FaInbox size={25} />, gap: true, to: "/dashboard/inbox" },
				{ title: "Accounts", src: <MdAccountBox size={25} />, to: "/dashboard/account" }
			);
			break;
		case "teacher":
            roleMenus.push(
                { title: "Teacher Dashboard", src: <MdDashboard size={25} />, to: "/dashboard" },
				{ title: "Files ", src: <LuFileSearch size={25} />, gap: true, to: "/dashboard/files" },
				{ title: "Setting", src: <IoSettingsOutline size={25} />, to: "/dashboard/settings" }
			);
			break;

		default:
			break;
    }
    
    return [...roleMenus];
};
