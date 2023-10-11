import Layout from "@components/layout/Layout";
import React from "react";
import Image from "next/image";
import VerifSuccessImg from "@assets/images/verif-success/verif-success-img.png";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const VerifSuccess = () => {
	const router = useRouter();
	return (
		<Layout>
			<div className="flex justify-center items-center p-5">
				<div className="mt-28 bg-[#FFFFFF] w-fit flex flex-col justify-center items-center p-10 gap-5 max-w-[450px]">
					<div>
						<Image
							src={VerifSuccessImg}
							width="200"
							height="200"
							alt="Verif success image"
						></Image>
					</div>

					<div className="flex flex-col justify-center items-center">
						<div>
							<h1 className="font-bold text-center text-base md:text-2xl">
								Verfikasi Berhasil!
							</h1>
						</div>

						<div className="">
							<p className="text-xs text-center md:text-sm ">
								Selamat! E-mail kamu sudah berhasil terverifikasi. Klik tombol
								di bawah untuk langkah selanjutnya.
							</p>
						</div>
					</div>

					<div>
						<Button
							variant="contained"
							onClick={() => {
								router.replace("/");
							}}
							className="bg-campus-blue text-xs py-3 font-bold rounded-3xl md:py-4"
						>
							Kembali ke Halaman Utama{" "}
						</Button>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default VerifSuccess;
