import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import Account from "../pages/dashboard/Account";
import Dashboard from "../pages/dashboard/Dashboard";
import Files from "../pages/dashboard/Files";
import Inbox from "../pages/dashboard/Inbox";
import Settings from "../pages/dashboard/Settings";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <>404</>,
		children: [],
	},
	{
		path: "/dashboard",
		element: <DashboardLayout />,
		errorElement: <>404</>,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/dashboard/inbox",
				element: <Inbox />,
			},
			{
				path: "/dashboard/settings",
				element: <Settings />,
			},
			{
				path: "/dashboard/files",
				element: <Files />,
			},
			{
				path: "/dashboard/account",
				element: <Account />,

			},
		],
	},
]);

export default router;
