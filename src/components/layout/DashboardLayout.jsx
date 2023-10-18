import DashboardFooter from "@components/footer/DashboardFooter";
import DashboardNavbar from "@components/navbar/DashboardNavbar";
import React, { useEffect, useState } from "react";
import ProfileImage from "@assets/images/profile/profile.png";
import Image from "next/image";
import { Typography } from "@mui/material";
import { navbarMenu } from "@constants/navbar-menu";
import { useRouter } from "next/router";
import Link from "next/link";

if (typeof window !== "undefined") {
	document.body.classList.add("bg-[#F6F7FD]");
}

const DashboardLayout = ({ children }) => {
	const [isSticky, setIsSticky] = useState(false);

	const router = useRouter();
	const { pathname } = router;

	useEffect(() => {
		const handleScroll = () => {
			const threshold = 20; // Ubah nilai sesuai dengan kebutuhan Anda
			if (window.scrollY >= threshold) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<DashboardNavbar />
			<div className="container mx-auto mt-28 grid grid-cols-12 gap-5 mb-10 !sticky">
				<div className="hidden lg:block md:col-span-3">
					<div
						className={`min-h-[70vh] rounded-xl bg-white ${
							isSticky ? "sticky top-28" : "relative"
						}`}
					>
						<div className="grid grid-cols-12 border-b border-gray-300 border-solid p-3 ">
							<div className="col-span-4 flex justify-center items-center">
								<Image
									src={ProfileImage}
									width={50}
									height={50}
									className="rounded-full"
									alt="profile"
								/>
							</div>
							<div className="col-span-8 max-w-50">
								<Typography variant="body1" className="font-semibold text-sm">
									Administrator
								</Typography>
								<Typography
									variant="body1"
									className="font-medium text-xs text-gray-500 mt-2"
								>
									Mahasiswa
								</Typography>
								<Typography
									variant="body1"
									className="font-medium text-xs text-gray-500 mt-2"
								>
									administrator@ecampus.co.id
								</Typography>
							</div>
						</div>
						<div className="flex flex-col gap-3 mt-5">
							{navbarMenu.map((v, i) => {
								return (
									<Link href={v.path} key={i}>
										<div
											className={`flex min-h-[50px] p-3 gap-5 cursor-pointer ${
												v.path === pathname
													? "bg-campus-blue text-white"
													: "bg-white"
											} rounded-tr-xl rounded-br-xl items-center`}
										>
											{v.icon}
											<Typography variant="h6" className="font-medium text-sm">
												{v.title}
											</Typography>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-9">{children}</div>
			</div>
			<DashboardFooter />
		</div>
	);
};

export default DashboardLayout;
