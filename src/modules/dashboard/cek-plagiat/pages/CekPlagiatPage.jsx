import DashboardLayout from "@components/layout/DashboardLayout";
import React from "react";

function handleClick() {
	window.location.href="/dashboard/cek-plagiat/manajer-file";
}
const CekPlagiatPage = () => {
	return (
	<DashboardLayout>
		<div className="flex flex-col gap-5">
			<div className="bg-[#FFFFFF] p-5">
				<h1 className="font-semibold text-xl">Cek Plagiat Dokumen</h1>
			</div>

			<div className="bg-[#FFFFFF] py-14 px-16 flex flex-col gap-8">
				<div className="flex flex-col gap-2 md:gap-5">
					<div className="flex gap-2 flex-col sm:flex-row md:gap-5">
						<div className="flex flex-col gap-2 w-full md:w-1/2">
							<label htmlFor="" className="text-lg font-medium">Nama Depan</label>
							<input type="text" placeholder="Nama Depan" className="border-2 border-[#F0F0F0] rounded-lg w-full p-2" />
						</div>

						<div className="flex flex-col gap-2 w-full md:w-1/2">
							<label htmlFor="" className="text-lg font-medium">Nama Belakang</label>
							<input type="text" placeholder="Nama Belakang" className="border-2 border-[#F0F0F0] rounded-lg w-full p-2" />
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-lg font-medium">Judul Dokumen</label>
						<input type="text" placeholder="Masukkan nama judul dokumen" className="border-2 border-[#F0F0F0] rounded-lg w-full p-2" />
					</div>
				</div>

				<div className="bg-[#D0E3F0] p-5 border-l-8 border-campus-blue">
					<h1 className="font-bold text-base md:text-xl">Syarat Penggunaan Fitur</h1>
					<div className="mt-3 text-xs md:text-base">
						<p>1. File harus kurang dari 100 MB</p>
						<p>2. Panjang halaman maksimal 800 halaman</p>
						<p>3. Semua jenis file diperbolehkan dan dapat menerima hasil nilai plagiat namun, hanya dengan format Microsoft Word, PowerPoint, WordPerfect, PostScript, PDF, HTML, RTF, OpenOffice (ODT), Hangul (HWP), Google Docs, dan file teks biasa dengan setidaknya 20 kata teks yang memenuhi syarat</p>
					</div>
					
				</div>

				<div>
					<div>
						<h1>Pilih file yang ingin dicek plagiat:</h1>
						<div className="flex flex-col justify-center gap-5 max-w-[350px] mt-5">
							<button className="bg-[#F5F5F5] px-6 py-2 rounded-md text-[#121330] text-sm md:text-base">Choose from this computer</button>
							<button className="bg-[#F5F5F5] px-6 py-2 rounded-md text-[#121330] text-sm md:text-base">Choose from Google Drive</button>
						</div>
					</div>

					<div className="mt-5">
						<button onClick={handleClick} class="bg-campus-blue px-6 py-3 font-bold rounded-3xl text-[#FFFFFF] md:text-lg md:px-8">Upload File</button>
					</div>
				</div>
			</div>

		</div>




	</DashboardLayout>)
};

export default CekPlagiatPage;
