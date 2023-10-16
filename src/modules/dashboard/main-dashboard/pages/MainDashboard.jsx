import DashboardLayout from "@components/layout/DashboardLayout";
import { Typography } from "@mui/material";

import React from "react";

const MainDashboard = () => {
	return (
		<DashboardLayout>
			<Typography variant="h3" className="font-bold text-xl">
				Selamat Datang, Administrator!
			</Typography>
			<Typography variant="caption" className="font-normal text-sm">
				Inilah rekap terbarumu dari semester lalu.{" "}
			</Typography>
		</DashboardLayout>
	);
};

export default MainDashboard;
