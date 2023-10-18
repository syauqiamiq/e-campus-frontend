import DashboardLayout from "@components/layout/DashboardLayout";
import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import CustomButton from "@components/button/CustomButton";
import SkpiIcon from "@assets/icons/skpiicon.png";
import EditIcon from "@assets/icons/edit.png";
import DeleteIcon from "@assets/icons/delete.png";
import Image from "next/image";
import { Box } from "@mui/material";
import { Router, useRouter } from "next/router"




const rows = [
	{ id: 1, uraiankegiatan: 'Seminar 2 FEB', partisipasi: 'Peserta', skor: 100, status: 'Disetujui' },
	{ id: 2, uraiankegiatan: 'Seminar Nusa Talent', partisipasi: 'Peserta', skor: 100, status: 'Disetujui' },
	{ id: 3, uraiankegiatan: 'Seminar Infinite Learning', partisipasi: 'Peserta', skor: 100, status: 'Disetujui' },
	{ id: 4, uraiankegiatan: 'Seminar Alfiliasi', partisipasi: 'Panitia', skor: 100, status: 'Disetujui' },
	{ id: 5, uraiankegiatan: 'Seminar Accounting', partisipasi: 'Peserta', skor: 100, status: 'Disetujui' },
	{ id: 6, uraiankegiatan: 'Pengabdian Masyarakat', partisipasi: 'Peserta', skor: 100, status: 'Disetujui' },
	{ id: 7, uraiankegiatan: 'Seminar 8 Maret', partisipasi: 'Peserta', skor: 100, status: 'Disetujui' },
	{ id: 8, uraiankegiatan: 'Seminar 7 April', partisipasi: 'Peserta', skor: 100, status: 'Disetujui' },
	{ id: 9, uraiankegiatan: 'Seminar Jaringan', partisipasi: 'Panitia', skor: 100, status: 'Disetujui' },
];

const columns = [
	{ field: 'uraiankegiatan', headerName: 'Uraian Kegiatan', width: 250, headerClassName: 'super-app-theme--header' },
	{ field: 'partisipasi', headerName: 'Partisipasi', width: 250, headerClassName: 'super-app-theme--header' },
	{
		field: 'skor',
		headerName: 'skor',
		type: 'number',
		width: 100,
		headerClassName: 'super-app-theme--header'
	},
	{ field: 'status', headerName: 'status', width: 250, headerClassName: 'super-app-theme--header' },
	{
		field: 'edit',
		headerName: 'Edit',
		width: 100,
		headerClassName: 'super-app-theme--header',
		renderCell: (cellValues) => {
			return (

				<Image className="cursor-pointer"
					src={EditIcon}
					alt="skpiicon"
					width={25}
					height={25}
				/>

			)
		}

	},
	{
		field: 'delete',
		headerName: 'Delete',
		width: 100,
		headerClassName: 'super-app-theme--header',
		renderCell: (cellValues) => {
			return (

				<Image className="cursor-pointer"
					src={DeleteIcon}
					alt="skpiicon"
					width={25}
					height={25}
				/>
			)
		}

	},
];


const SkpiPage = (props) => {
	const router = useRouter()
	return <DashboardLayout>
		<div className="bg-white rounded-lg">
			<div className="container mx-auto grid grid-cols-8 gap-10 py-8 px-5 justify-center">
				<div className=" col-span-6">
					<h1 className="font-bold text-3xl">Data SKPI - Universitas eCampus</h1>
				</div>
				<div className=" col-span-2">
					<CustomButton type="contained" title="Tambah Data" link
						onClick={() => {
							router.push("/dashboard/skpi/upload");
						}}
					/>
				</div>
			</div>
			<div className="justify-center px-5">
				<Box
					sx={{
						height: 500,
						width: '100%',
						'& .super-app-theme--header': {
							backgroundColor: '#0070BA',
						},
					}}
				>
					<DataGrid
						rows={rows}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: { page: 0, pageSize: 10 },
							},
						}}
						pageSizeOptions={[5, 10]}
						checkboxSelection
					/>
				</Box>
			</div>

			<div className="px-4">
				<div className="col-span-12 md:col-span-4 flex justify-center mt-4 bg-blue-100 py-4 rounded-lg px-5">
					<div className="flex gap-3 px-4">
						<div className="flex flex-col justify-end">
							<div className="h-10 w-10 rounded-full border-gray-300 border-solid flex justify-center items-center">
								<span className="font-bold text-3xl">
									<Image
										src={SkpiIcon}
										alt="skpiicon"
										width={25}
										height={25}
									/>
								</span>
							</div>
						</div>
						<div className="flex flex-col justify-center gap-3 items-center">
							<p className="text-sm font-light">
								File Download hanya menampilkan data yang sudah di <span className="font-bold">VALIDASI.</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-12 justify-center flex mx-5 items-center py-2">
				<div className="w-full md:w-72 mt-2 mb-2">
					<CustomButton type="contained" title="Donlownd Skpi" />
				</div>
			</div>
		</div>
	</DashboardLayout >;
};

export default SkpiPage;
