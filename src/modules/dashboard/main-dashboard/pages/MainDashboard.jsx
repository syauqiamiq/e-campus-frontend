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
			<div className="grid grid-cols-12 mt-5">
				<div className="col-span-12 md:col-span-6">
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 md:col-span-6 rounded-xl p-3 bg-gradient-to-r from-[#7380DC]  to-[#B276E3] w-full min-h-[125px]">
							<div className="flex flex-col justify-between h-full">
								<Typography
									variant="body1"
									className="font-bold text-base text-white"
								>
									Semester
								</Typography>
								<Typography
									variant="body1"
									className="font-bold text-2xl text-center text-white"
								>
									5
								</Typography>
								<Typography
									variant="body1"
									className="font-medium text-xs text-white"
								>
									Semester saat ini
								</Typography>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 rounded-xl p-3 bg-gradient-to-r from-[#5AB8E8]  to-[#5487C7] w-full min-h-[125px]">
							<div className="flex flex-col justify-between h-full">
								<Typography
									variant="body1"
									className="font-bold text-base text-white"
								>
									IPK
								</Typography>
								<Typography
									variant="body1"
									className="font-bold text-2xl text-white"
								>
									3.40
								</Typography>
								<Typography
									variant="body1"
									className="font-medium text-xs text-white"
								>
									Semester ini meningkat
								</Typography>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 rounded-xl p-3 bg-gradient-to-r from-[#F9907A]  to-[#CD5562] w-full min-h-[125px]">
							<div className="flex flex-col justify-between h-full">
								<Typography
									variant="body1"
									className="font-bold text-base text-white"
								>
									Tagihan
								</Typography>
								<Typography
									variant="body1"
									className="font-bold text-2xl text-white"
								>
									Rp 1.500.000
								</Typography>
								<Typography
									variant="body1"
									className="font-medium text-xs text-white"
								>
									Total tagihan semester
								</Typography>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 rounded-xl p-3 bg-gradient-to-r from-[#C86CA2]  to-[#8566C0] w-full min-h-[125px]">
							<div className="flex flex-col justify-between h-full">
								<Typography
									variant="body1"
									className="font-bold text-base text-white"
								>
									SKS
								</Typography>
								<Typography
									variant="body1"
									className="font-bold text-2xl text-white"
								>
									88/154
								</Typography>
								<Typography
									variant="body1"
									className="font-medium text-xs text-white"
								>
									SKS Tempuh
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default MainDashboard;
