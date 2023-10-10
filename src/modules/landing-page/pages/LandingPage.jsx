import Layout from "@components/layout/Layout";
import React from "react";
import HeroIllustration from "@assets/illustrations/hero-1.png";
import Section1 from "@assets/images/landing/section-1.png";
import Cara1 from "@assets/images/landing/cara-1.png";
import Cara2 from "@assets/images/landing/cara-2.png";
import Cara3 from "@assets/images/landing/cara-3.png";
import KMLogo from "@assets/logos/kampus-merdeka.png";
import GoogleLogo from "@assets/logos/google.png";
import FigmaLogo from "@assets/logos/figma.png";
import CanvaLogo from "@assets/logos/canva.png";
import ILLogo from "@assets/logos/infinite-learning.png";
import VscodeLogo from "@assets/logos/vscode.png";
import WindowsLogo from "@assets/logos/windows.png";
import ZoomLogo from "@assets/logos/zoom.png";
import ArrowRightLineIcon from "@assets/icons/arrow-right-line.png";
import Image from "next/image";
import { Button, Divider, Select } from "@mui/material";
import CustomButton from "@components/button/CustomButton";

const LandingPage = () => {
	return (
		<Layout>
			<div className="mt-28 ">
				<div className="container mx-auto grid grid-cols-12 gap-10 w-full ">
					<div className="col-span-12 md:col-span-6 md:p-15 p-10 justify-center w-full h-full align-middle">
						<h1 className="text-5xl md:text-5xl text-justify">
							<span className="font-light">Layanan</span>{" "}
							<span className="font-bold">Administrasi Kampus</span>{" "}
							<span className="font-light">di</span>{" "}
							<span className="font-extrabold  text-campus-blue">eCampus</span>
						</h1>
						<p className="text-justify text-black text-lg font-light mt-5">
							Layanan Digital Administrasi Kampus Secara Real-time Mulai dari
							Bimbingan, Monitoring, Plagiarisme, Transkrip Penilaian dan
							Lainnya.
						</p>
						<div className="w-full md:w-72  mt-16">
							<CustomButton type="contained" title="Selengkapnya" />
						</div>
					</div>
					<div className="col-span-6 hidden md:flex flex-col justify-center items-center">
						<Image
							src={HeroIllustration}
							alt="hero-1"
							width={500}
							height={500}
						/>
					</div>
				</div>
				<Divider className="w-full hidden md:block" />
				<div className="bg-section-purple-light">
					<div className="container mx-auto grid grid-cols-12 gap-10 bg-section-purple-light">
						<div className="col-span-12 md:col-span-6 md:flex md:flex-col w-full p-10 justify-center items-center ">
							<Image src={Section1} alt="section-1" width={500} height={500} />
						</div>
						<div className="col-span-12 md:col-span-6 p-10 justify-center w-full h-full align-middle ">
							<h1 className="text-3xl md:text-4xl text-justify">
								<span className="font-bold">
									Solusi Administrasi Kampus Bersama
								</span>{" "}
								<span className="font-bold  text-campus-blue">eCampus</span>
							</h1>
							<p className="text-justify text-black text-lg font-light mt-5">
								<span className="font-bold  text-campus-blue">eCampus</span>{" "}
								merupakan sebuah layanan berbasis website dalam memberikan
								solusi dan penanganan permasalah Administrasi secara real-time
								dan online dalam memajukan dunia Pendidikan di Indonesia serta
								perkembangan teknologi informasi mutakhir.
							</p>
							<div className="flex gap-5 items-center mt-10 md:mt-24 hover:cursor-pointer">
								<span className="text-campus-blue text-base">
									Baca Selengkapnya
								</span>
								<Image
									src={ArrowRightLineIcon}
									alt="arrow-right-icon"
									width={25}
									height={50250}
								/>
							</div>
						</div>
					</div>
				</div>
				<Divider className="w-full hidden md:block" />
				<div className="container mx-auto grid grid-cols-12 gap-10 w-full my-10">
					<div className="col-span-12">
						<h1 className="text-center font-bold text-3xl">Cara Pakai</h1>
					</div>
					<div className="col-span-12 md:col-span-4 flex justify-center">
						<div className="flex gap-3">
							<div className="flex flex-col justify-end">
								<div className="h-10 w-10 rounded-full border border-gray-300 border-solid flex justify-center items-center">
									<span className="font-bold text-3xl">1</span>
								</div>
							</div>
							<div className="flex flex-col justify-end gap-3 max-w-[200px]">
								<Image src={Cara1} width={165} height={93} alt="cara-1" />
								<h3 className="font-bold text-xl">Buat Akun</h3>
								<p className="text-sm font-light">
									Membuat akun terlebih{" "}
									<span className="text-campus-blue font-bold">eCampus</span>{" "}
									terlebih dahulu.
								</p>
							</div>
						</div>
					</div>
					<div className="col-span-12 md:col-span-4 flex justify-center">
						<div className="flex gap-3">
							<div className="flex flex-col justify-end">
								<div className="h-10 w-10 rounded-full border border-gray-300 border-solid flex justify-center items-center">
									<span className="font-bold text-3xl">2</span>
								</div>
							</div>
							<div className="flex flex-col justify-end gap-3 max-w-[200px]">
								<Image src={Cara2} width={165} height={93} alt="cara-2" />
								<h3 className="font-bold text-xl">Hubungkan ID</h3>
								<p className="text-sm font-light">
									Hubungkan ID sesuai dengan ID dari admin kampus.
								</p>
							</div>
						</div>
					</div>
					<div className="col-span-12 md:col-span-4 flex justify-center">
						<div className="flex gap-3">
							<div className="flex flex-col justify-end">
								<div className="h-10 w-10 rounded-full border border-gray-300 border-solid flex justify-center items-center">
									<span className="font-bold text-3xl">3</span>
								</div>
							</div>
							<div className="flex flex-col justify-end gap-3 max-w-[200px]">
								<Image src={Cara3} width={165} height={93} alt="cara-3" />
								<h3 className="font-bold text-xl">Penggunaan Fitur</h3>
								<p className="text-sm font-light">
									Silahkan gunakanlah fitur sesuai dengan apa yang anda
									butuhkan.
								</p>
							</div>
						</div>
					</div>
					<div className="col-span-12 justify-center flex mx-5">
						<div className="w-full md:w-72 mt-10">
							<CustomButton type="contained" title="Buat Akun Sekarang!" />
						</div>
					</div>
				</div>
				<Divider className="w-full hidden md:block" />
				<div className="bg-section-purple-light h-[200px]">
					<div className="flex items-center justify-center h-full mx-5 gap-14 overflow-scroll">
						<Image src={KMLogo} width={120} height={60} alt="logo" />
						<Image src={GoogleLogo} width={120} height={60} alt="logo" />
						<Image src={FigmaLogo} width={120} height={60} alt="logo" />
						<Image src={CanvaLogo} width={120} height={60} alt="logo" />
						<Image src={ILLogo} width={120} height={60} alt="logo" />
						<Image src={VscodeLogo} width={120} height={60} alt="logo" />
						<Image src={WindowsLogo} width={120} height={60} alt="logo" />
						<Image src={ZoomLogo} width={120} height={60} alt="logo" />
					</div>
				</div>
				<div className="container mx-auto grid grid-cols-12 gap-10 w-full my-10">
					<div className="col-span-12 flex justify-center">
						<h1 className="text-center font-bold text-3xl max-w-[500px]">
							Apa saja fitur yang didapat jika menggunakan eCampus?
						</h1>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default LandingPage;
