import CustomButton from "@components/button/CustomButton";
import DashboardLayout from "@components/layout/DashboardLayout";
import { ErrorOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import TranskripTable from "../components/TranskripTable";

const TranskripPage = () => {
	return (
		<DashboardLayout>
			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-12 h-16 bg-white flex items-center p-5 rounded-xl">
					<Typography variant="h3" className="font-semibold text-xl">
						Transkrip Nilai
					</Typography>
				</div>

				<div className="col-span-12 min-h-16 bg-white items-center p-5 rounded-xl">
					<Typography variant="h3" className="font-semibold text-xl">
						Indeks Prestasi Mahasiswa
					</Typography>
					<div className="grid grid-cols-12 mt-3 rounded-lg p-5 bg-campus-blue min-h-[100px]">
						<div className="col-span-12  md:col-span-3 flex flex-col gap-3 items-center">
							<Typography
								variant="body1"
								className="text-white font-semibold text-xs"
							>
								Jumlah SKS Diambil
							</Typography>
							<Typography
								variant="body1"
								className="text-white font-semibold text-3xl"
							>
								154
							</Typography>
						</div>
						<div className="col-span-12  md:col-span-3  flex flex-col gap-2 items-center">
							<Typography
								variant="body1"
								className="text-white font-semibold text-xs"
							>
								Jumlah SKS Lulus{" "}
							</Typography>
							<Typography
								variant="body1"
								className="text-white font-semibold text-3xl"
							>
								88
							</Typography>
						</div>
						<div className="col-span-12  md:col-span-3  flex flex-col gap-2 items-center">
							<Typography
								variant="body1"
								className="text-white font-semibold text-xs"
							>
								Jumlah Mutu Lulus{" "}
							</Typography>
							<Typography
								variant="body1"
								className="text-white font-semibold text-3xl"
							>
								-
							</Typography>
						</div>
						<div className="col-span-12  md:col-span-3  flex flex-col gap-2 items-center">
							<Typography
								variant="body1"
								className="text-white font-semibold text-xs"
							>
								IPK
							</Typography>
							<Typography
								variant="body1"
								className="text-white font-semibold text-3xl"
							>
								3.40
							</Typography>
						</div>
					</div>
				</div>
				<div className="col-span-12 min-h-16 bg-white items-center p-5 rounded-xl">
					<div className="flex justify-between items-center">
						<Typography variant="h3" className="font-semibold text-xl">
							Daftar Nilai Sementara
						</Typography>
						<div className="w-[150px]">
							<CustomButton type="contained" title="Pilih Tahun" />
						</div>
					</div>

					<div className="mt-5">
						<TranskripTable />
					</div>

					<div className="flex rounded-lg bg-slate-300 p-5 mt-5  gap-3 text-black">
						<ErrorOutline />
						<Typography variant="caption1">
							File Download hanya menampilkan data yang sudah di{" "}
							<span className="font-bold">VALIDASI</span>.
						</Typography>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default TranskripPage;
