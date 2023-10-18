import CustomButton from "@components/button/CustomButton";
import DashboardLayout from "@components/layout/DashboardLayout";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const AkunPage = (props) => {
	const router = useRouter()
	return <DashboardLayout>

		<div className="container mx-auto grid grid-cols-12 gap-10 py-2 justify-center">
			<div className="col-span-3 justify-start flex mx-5 items-center">
				<div className="w-full md:w-72 mt-5 mb-5">
					<CustomButton type="contained" title="Lihat Profil" onClick={() => {
						router.push("/dashboard/akun");
					}} />
				</div>
			</div>
			<div className="col-span-3 justify-center flex mx-5 items-center">
				<div className="w-full md:w-72 mt-5 mb-5">
					<CustomButton type="contained" title="Ubah Kata Sandi" onClick={() => {
						router.push("/dashboard/akun/ubahkatasandi");
					}} />
				</div>
			</div>
		</div>
		<Card sx={{ minWidth: 10 }} className="rounded-lg">
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Lihat/Ubah Profil
				</Typography>
				<div className="container mx-auto grid grid-cols-12 gap-10 py-10 justify-center">
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Nama lengkap
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Administrator eCampus
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Tempat/Tanggal Lahir
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Medan, 10 Oktober 2023
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Alamat
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Jl. Pintu Air I, Kec. Medan Johor, Kota Medan, Sumatera Utara 20146
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Jenis Kelamin
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Laki-Laki
					</Typography>
					<Typography gutterBottom variant="h5" component="div" className="col-span-12">
						Informasi Akademik
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Perguruan Tinggi
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Universitas eCampus
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						NIM
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						123123456456
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Program Studi
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Sistem Informatika
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Jenjang
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						S1
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Semester Masuk
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Ganjil 2021
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Angkatan
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						2021/2022
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Kelas
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						5SIAC
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Status Awal Mahasiswa
					</Typography>
					<Typography gutterBottom variant="p" component="div" className="col-span-6">
						Peserta didik baru
					</Typography>
				</div>
			</CardContent>
		</Card>
	</DashboardLayout>;
};

export default AkunPage;
