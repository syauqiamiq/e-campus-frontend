import { rupiahFormatter } from "@lib/functions/currency";
import {
	AccountBalance,
	AccountBalanceWalletOutlined,
	AssignmentOutlined,
	CalendarMonthOutlined,
} from "@mui/icons-material";
import { Chip, Typography } from "@mui/material";
import React from "react";

const CicilanCard = ({ data }) => {
	return (
		<div className="flex  bg-white rounded-xl">
			<div className="rounded-full h-16 items-center bg-campus-blue relative left-0 top-10 w-[10px]"></div>
			<div className="grid grid-cols-12 w-full">
				<div className="col-span-12 md:col-span-9">
					<div className="ml-4 flex flex-col gap-3 p-5">
						<div className="flex gap-3 items-center">
							<CalendarMonthOutlined />
							<Typography variant="body1" className="font-semibold text-sm">
								{data.date ?? "-"}
							</Typography>
						</div>
						<div className="flex gap-3 items-center">
							<AssignmentOutlined />
							<Typography variant="body1" className="font-semibold text-sm">
								{data?.type ?? "-"}
							</Typography>
						</div>
						<div className="flex gap-3 items-center">
							<AccountBalanceWalletOutlined />
							<Typography variant="body1" className="font-semibold text-sm">
								{data?.cost ? rupiahFormatter(data?.cost) : "-"}
							</Typography>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-3 flex w-full justify-center items-center">
					<div>
						{data?.status === "PAID" && (
							<Chip label="LUNAS" color="success" variant="filled" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CicilanCard;
