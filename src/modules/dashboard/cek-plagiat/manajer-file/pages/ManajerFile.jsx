import DashboardLayout from "@components/layout/DashboardLayout";
import React from "react";

const document = [
	"Dokumen1",
	"Dokumen2",
	"Dokumen3",
	"Dokumen4",
	"Dokumen5",
	"Dokumen6",
	"Dokumen7",
	"Dokumen8",
	"Dokumen9",
	"Pengecekan Plagiat Dokumen di eCampus",
];

const ManajerFile = () => {
	return (
		<DashboardLayout>
			<div className="flex flex-col gap-5">
				<div className="bg-[#FFFFFF] p-5">
					<h1 className="font-semibold text-xl">Manajer File</h1>
				</div>

				<div className="bg-[#FFFFFF] py-14 px-16 flex flex-col gap-8">
					<div>
						<div>
							<h1 className="text-sm md:text-base">
								*Manajer file hanya menampilkan 10 file terakhir, silakan
								gunakan pencarian untuk mencari nama file.
							</h1>
						</div>
						<div className="w-full flex mt-5">
							<input
								type="search"
								placeholder="Cari berdasarkan nama file"
								className="border-2 border-[#F0F0F0] border-r-0 rounded-l-md py-1 px-2 w-full"
							/>
							<button className="btn-cari bg-campus-blue py-1 px-5 border-2 border-campus-blue text-[#FFFFFF] rounded-r-md">
								Cari
							</button>
						</div>
					</div>

					<div>
						<div>
							<h1 className="text-base font-bold md:text-lg">Judul Dokumen</h1>
						</div>

						<div className="mt-3 flex flex-col gap-3">
							{document.map((documents, i) => (
								<div
									key={i}
									className="flex justify-between items-center border-2 border-[#F0F0F0] px-3 py-2 rounded-lg"
								>
									<p className="text-xs md:text-base">{documents}</p>
									<button className="bg-[#F5F5F5] px-5 py-1 text-xs md:text-sm">
										Unduh
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default ManajerFile;
