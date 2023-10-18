import DashboardLayout from "@components/layout/DashboardLayout";
import React from "react";
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const PengumpulanBerkasPage = () => {
	return (
	<DashboardLayout>
		<div className="flex flex-col gap-5">
			<div className="bg-[#FFFFFF] p-5">
				<h1 className="font-semibold text-xl">Pengumpulan Berkas</h1>
			</div>
			
			<div className="bg-[#FFFFFF] p-5 flex flex-col gap-8">

				<div className="flex flex-col justify-center items-center gap-5 sm:flex-row sm:justify-between">
					<div className="w-full flex">
						<input type="search" placeholder="Cari Daftar Berkas" className="border-2 border-[#F0F0F0] border-r-0 rounded-l-md py-1 px-2 w-full"/>
						<button className="bg-campus-blue py-1 px-5 border-2 border-campus-blue text-[#FFFFFF] rounded-r-md">Cari</button>
					</div>

					<div className="flex gap-5">
						<button className="bg-campus-blue py-2 px-5 rounded-3xl text-[#FFFFFF] font-bold">Tambah</button>
						<button className="bg-campus-blue py-2 px-5 rounded-3xl text-[#FFFFFF] font-bold">Hapus</button>
					</div>
				</div>

				<div className="border rounded-t-xl overflow-x-auto">
					<table class="w-full rounded text-left text-sm md:text-base">
						<thead className="bg-campus-blue text-[#FFFFFF]">
							<tr className="">
								<th className="p-2"><Checkbox {...label} /></th>
								<th>Nim</th>
								<th>Nama</th>
								<th>Tanggal</th>
								<th>Judul</th>
								<th>Status</th>
								<th>Pembimbing</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="p-2"><Checkbox {...label}/></th>
								<td>1231234564</td>
								<td>Cahya Nur</td>
								<td>10 Okt 2023</td>
								<td>XX</td>
								<td>A</td>
								<td>X</td>
								<td className="">
									<Link href="#"><EditIcon className="text-campus-blue text-3xl md:text-4xl"/></Link>
									<Link href="#"><DeleteForeverIcon className="text-[#FF3C5F] text-3xl md:text-4xl"/></Link>
								</td>
							</tr>
						
						</tbody>
					</table>
				</div>


			<div className="flex justify-center mt-10	">
				<div className="bg-[#D0E3F0] border-l-8 border-campus-blue w-4/5 flex flex-col p-5 gap-5">
					<div>
						<h1 className="font-bold text-xl">Status Pengajuan</h1>
					</div>

					<div className="sm:flex justify-between gap-5">
						<p><b>A</b> : Aktif</p>
						<p><b>S</b> : Disetujui</p>
						<p><b>R</b> : Revisi</p>
						<p><b>T</b> : Ditolak</p>
					</div>
				</div>
			</div>
		</div>
			
		</div>
	</DashboardLayout>)
};

export default PengumpulanBerkasPage;
