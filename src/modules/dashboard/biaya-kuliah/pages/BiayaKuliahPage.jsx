import DashboardLayout from "@components/layout/DashboardLayout";
import { Typography } from "@mui/material";
import React from "react";
import CicilanCard from "../components/CicilanCard";
import { cicilanData } from "../constants/cicilan-dummy";
import CustomButton from "@components/button/CustomButton";

const BiayaKuliahPage = () => {
	return (
		<DashboardLayout>
			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-12 h-16 bg-white flex items-center p-5 rounded-xl">
					<Typography variant="h3" className="font-semibold text-xl">
						Cicilan Biaya Kuliah
					</Typography>
				</div>
				<div className="col-span-12 md:col-span-12">
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 md:col-span-3">
							<CustomButton type="outlined" title="2021-2022" />
						</div>
						<div className="col-span-12 md:col-span-3">
							<CustomButton type="outlined" title="2022-2023" />
						</div>
						<div className="col-span-12 md:col-span-3">
							<CustomButton type="outlined" title="2023-2024" />
						</div>
						<div className="col-span-12 md:col-span-3">
							<CustomButton type="outlined" title="2024-2025" />
						</div>
					</div>
				</div>
				{cicilanData.map((v, i) => {
					return (
						<div key={i} className="col-span-12 md:col-span-6 ">
							<CicilanCard data={v} />
						</div>
					);
				})}
			</div>
		</DashboardLayout>
	);
};

export default BiayaKuliahPage;
