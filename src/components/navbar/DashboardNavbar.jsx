import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import AppLogo from "@assets/logos/eCampusLogo.png";
import CustomButton from "@components/button/CustomButton";
import { useRouter } from "next/router";
import LoginDialog from "./components/LoginDialog";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Beranda", "Tentang", "Cara Pakai", "Fitur", "Bantuan"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const DashboardNavbar = (props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const router = useRouter();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Box className="flex justify-center w-full p-5">
				<div className="cursor-pointer">
					<Image
						src={AppLogo}
						alt="ecampus-logo"
						width={186}
						height={9}
						onClick={() => router.replace("/")}
					/>
				</div>
			</Box>

			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}

				<Box className="gap-5 sm:hidden flex flex-col p-5">
					<CustomButton type="outlined" title="Masuk" />
					<CustomButton
						type="contained"
						title="Daftar"
						onClick={() => {
							router.push("/sign-up");
						}}
					/>
				</Box>
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					component="nav"
					className="bg-white shadow-none p-3  border-b border-gray-300 border-solid"
				>
					<Box className="sm:container mx-4 md:mx-auto">
						<Toolbar>
							<IconButton
								color="black"
								edge="start"
								onClick={handleDrawerToggle}
								className="sm:hidden p-0 m-0 mr-5"
							>
								<MenuIcon />
							</IconButton>
							<Box className="flex md:flex-grow-1 w-full md:w-[200px] justify-center cursor-pointer">
								<Image
									src={AppLogo}
									alt="ecampus-logo"
									width={186}
									height={52}
									onClick={() => router.replace("/")}
								/>
							</Box>

							<Box
								sx={{ display: { xs: "none", sm: "block" } }}
								className="mx-auto"
							>
								{navItems.map((item) => (
									<Button key={item} className="text-black font-bold mx-5">
										{item}
									</Button>
								))}
							</Box>
							<Box className="gap-5 sm:flex hidden">
								<Box sx={{ flexGrow: 0 }}>
									<Tooltip title="Open settings">
										<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
											<Avatar
												alt="Remy Sharp"
												src="/static/images/avatar/2.jpg"
											/>
										</IconButton>
									</Tooltip>
									<Menu
										sx={{ mt: "45px" }}
										id="menu-appbar"
										anchorEl={anchorElUser}
										anchorOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										keepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										open={Boolean(anchorElUser)}
										onClose={handleCloseUserMenu}
									>
										{settings.map((setting) => (
											<MenuItem key={setting} onClick={handleCloseUserMenu}>
												<Typography textAlign="center">{setting}</Typography>
											</MenuItem>
										))}
									</Menu>
								</Box>
							</Box>
						</Toolbar>
					</Box>
				</AppBar>
				<nav>
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</nav>
			</Box>
		</>
	);
};

export default DashboardNavbar;
