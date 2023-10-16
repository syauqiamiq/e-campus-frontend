import React from "react";
import AppLogo from "@assets/logos/eCampusLogo.png";
import FacebookIcon from "@assets/icons/facebook.png";
import TwitterIcon from "@assets/icons/twitter.png";
import InstagramIcon from "@assets/icons/instagram.png";
import Image from "next/image";

const DashboardFooter = () => {
	return (
		<>
			<div className="border-t border-gray-300 border-solid  bg-white">
				<div className="container mx-auto m-5 grid grid-cols-4 w-full h-5 ">
					<div className="col-span-4 md:col-span-2 flex justify-center md:justify-start">
						<h6>
							Copyright © 2023 <span className="font-bold">eCampus</span>.
							Dibuat dengan ❤️️
						</h6>
					</div>
					<div className="col-span-4 md:col-span-2 justify-center flex gap-16 md:justify-end">
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

export default DashboardFooter;
