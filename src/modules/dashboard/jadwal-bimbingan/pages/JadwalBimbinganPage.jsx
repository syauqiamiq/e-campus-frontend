import DashboardLayout from "@components/layout/DashboardLayout";
import { AssignmentOutlined, CalendarMonthOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

import ScheduleCard from "../components/ScheduleCard";
import { scheduleData } from "../constants/schedule-dummy";

const JadwalBimbinganPage = () => {
	return (
		<DashboardLayout>
			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-12 h-16 bg-white flex items-center p-5 rounded-xl">
					<Typography variant="h3" className="font-semibold text-xl">
						Jadwal Bimbingan Skripsi
					</Typography>
				</div>
				{scheduleData.map((v, i) => {
					return (
						<div key={i} className="col-span-12 md:col-span-6 ">
							<ScheduleCard data={v} />
						</div>
					);
				})}
			</div>
		</DashboardLayout>
	);
};

export default JadwalBimbinganPage;
