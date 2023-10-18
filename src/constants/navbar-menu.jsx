import {
	AccountBalanceWalletOutlined,
	AccountCircleOutlined,
	AssignmentOutlined,
	CalendarMonthOutlined,
	DocumentScannerOutlined,
	FeedOutlined,
	HomeOutlined,
	StarBorderOutlined,
	StickyNote2Outlined,
} from "@mui/icons-material";

export const navbarMenu = [
	{
		path: "/dashboard",
		title: "Dashboard",
		icon: <HomeOutlined />,
	},
	{
		path: "/dashboard/jadwal-bimbingan",
		title: "Jadwal Bimbingan",
		icon: <CalendarMonthOutlined />,
	},
	{
		path: "/dashboard/biaya-kuliah",
		title: "Biaya Kuliah",
		icon: <AccountBalanceWalletOutlined />,
	},
	{
		path: "/dashboard/pengumpulan-berkas",
		title: "Pengumpulan Berkas",
		icon: <FeedOutlined />,
	},
	{
		path: "/dashboard/transkrip",
		title: "Transkrip Nilai",
		icon: <StarBorderOutlined />,
	},
	{
		path: "/dashboard/cek-plagiat",
		title: "Cek Plagiat",
		icon: <DocumentScannerOutlined />,
	},
	{
		path: "/dashboard/skpi",
		title: "SKPI",
		icon: <StickyNote2Outlined />,
	},
	{
		path: "/dashboard/akun",
		title: "Akun",
		icon: <AccountCircleOutlined />,
	},
];
