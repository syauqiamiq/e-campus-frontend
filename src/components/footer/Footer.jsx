import React from "react";
import AppLogo from "@assets/logos/eCampusLogo.png";
import FacebookIcon from "@assets/icons/facebook.png";
import TwitterIcon from "@assets/icons/twitter.png";
import InstagramIcon from "@assets/icons/instagram.png";
import Image from "next/image";

const Footer = () => {
	return (
		<>
			<div className="hidden sm:block border-t border-gray-300 border-solid">
				<div className="container mx-auto flex w-full h-[400px]  ">
					<div className="grid grid-cols-12 gap-10 w-full my-10">
						<div className="col-span-3">
							<Image src={AppLogo} alt="ecampus-logo" width={186} height={52} />
							<p className="text-justify mt-10">
								<span className="font-bold">eCampus </span>merupakan sebuah
								layanan berbasis website dalam memberikan solusi dan penanganan
								permasalah Administrasi di Kampus.
							</p>
						</div>
						<div className="col-span-3 text-center">
							<h6 className="font-bold">Home</h6>
							<p className=" mt-10">Link 1</p>
							<p className="mt-2">Link 1</p>
							<p className="mt-2">Link 1</p>
							<p className="mt-2">Link 1</p>
						</div>
						<div className="col-span-3 text-center">
							<h6 className="font-bold">Page</h6>
							<p className="mt-10">Link 1</p>
							<p className="mt-2">Link 1</p>
							<p className="mt-2">Link 1</p>
							<p className="mt-2">Link 1</p>
						</div>
						<div className="col-span-3 text-center">
							<h6 className="font-bold">Our Address</h6>
							<p className="mt-10 text-justify">
								Jln. Limau Manis Pasar XIV Dusun 7, Deli Serdang Sumatera Utara
								- 20362
							</p>
							<div className="flex gap-5 mt-10">
								<Image
									src={FacebookIcon}
									alt="facebook-icon"
									width={24}
									height={24}
								/>
								<Image
									src={TwitterIcon}
									alt="facebook-icon"
									width={24}
									height={24}
								/>
								<Image
									src={InstagramIcon}
									alt="facebook-icon"
									width={24}
									height={24}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border-t border-gray-300 border-solid">
				<div className="container mx-auto m-5 grid grid-cols-4 w-full h-5">
					<div className="col-span-2">
						<h6>
							Copyright © 2023 <span className="font-bold">eCampus</span>.
							Dibuat dengan ❤️️
						</h6>
					</div>
					<div className="col-span-2 flex gap-16 justify-end">
						<h6 className="font-bold">Beranda</h6>
						<h6 className="font-bold">Team</h6>
						<h6 className="font-bold">Privasi</h6>
						<h6 className="font-bold">Hubungi</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
