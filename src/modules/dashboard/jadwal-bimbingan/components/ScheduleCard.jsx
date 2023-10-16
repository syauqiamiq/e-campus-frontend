import { AssignmentOutlined, CalendarMonthOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

const ScheduleCard = ({ data }) => {
	return (
		<div className="flex  min-h-[200px] bg-white rounded-xl">
			<div className="rounded-full h-16 items-center bg-campus-blue relative left-0 top-10 w-[10px]"></div>
			<div className="ml-4 flex flex-col gap-3 p-5">
				<div className="flex gap-3 items-center">
					<CalendarMonthOutlined />
					<Typography variant="body1" className="font-semibold text-sm">
						{data.day ?? "-"}
					</Typography>
				</div>
				<div className="flex gap-3 items-center">
					<AssignmentOutlined />
					<Typography variant="body1" className="font-semibold text-sm">
						{data?.title ?? "-"}
					</Typography>
				</div>
				{data ? (
					<ul className="list-disc">
						{data?.descriptions.map((v, i) => {
							return (
								<li key={i} className="font-medium text-xs mb-2">
									{v.content}
								</li>
							);
						})}
					</ul>
				) : (
					"-"
				)}
			</div>
		</div>
	);
};

export default ScheduleCard;
