import Layout from "@components/layout/Layout";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const VerifEmail = () => {
	const router = useRouter();
	return (
		<Layout>
			<div className="flex justify-center p-3">
				<div className="mt-28 flex flex-col bg-[#FFFFFF] w-full rounded-xl sm:w-fit">
					<div className="border-b border-bot p-5">
						<h1 className="font-bold text-center text-base sm:text-lg sm:text-left md:text-xl">
							Verfikasi Email
						</h1>
					</div>

					<div className="border-b border-bot flex flex-col justify-center items-center p-5 md:p-12">
						<div>
							<p className="text-xs sm:text-sm md:text-base">
								Masukkan 4 digit kode yang telah kami kirimkan ke email.
							</p>
						</div>

						<div className="flex flex-col items-center gap-5 mt-3 sm:flex-row md:p-5">
							<div className="flex justify-center flex-wrap gap-5">
								<TextField
									className="bg-gray-100 outline-none w-12 sm:w-16"
									id="outlined-basic"
									variant="outlined"
								/>
								<TextField
									className="bg-gray-100 outline-none w-12 sm:w-16"
									id="outlined-basic"
									variant="outlined"
								/>
								<TextField
									className="bg-gray-100 outline-none w-12 sm:w-16"
									id="outlined-basic"
									variant="outlined"
								/>
								<TextField
									className="bg-gray-100 outline-none w-12 sm:w-16"
									id="outlined-basic"
									variant="outlined"
								/>
							</div>

							<div className="">
								<Button
									className="bg-campus-blue rounded-3xl font-medium px-5 py-2 "
									variant="contained"
								>
									Kirim Ulang
								</Button>
							</div>
						</div>
					</div>

					<div>
						<div className="flex justify-center px-5 py-8">
							<Button
								className="bg-campus-blue rounded-3xl font-medium px-6 py-3 w-80 md:w-9/12"
								variant="contained"
								onClick={() => router.push("/verif-success")}
							>
								Verifikasi
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default VerifEmail;
