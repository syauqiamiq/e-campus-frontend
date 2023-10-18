import CustomButton from "@components/button/CustomButton";
import { FormInput } from "@components/input/FormInput";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Slide,
	Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
const LoginDialog = ({ open, handleClose }) => {
	const router = useRouter();
	return (
		<Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
			<DialogTitle>
				<Typography variant="h3" sx={{ fontSize: 24, fontWeight: "bold" }}>
					Login
				</Typography>
				<Typography variant="h3" sx={{ fontSize: 14, fontWeight: "normal" }}>
					Lihat pertumbuhan Anda dan dapatkan dukungan konsultasi!
				</Typography>
			</DialogTitle>
			<DialogContent>
				<Grid container gap={3}>
					<Grid item md={12} xs={12}>
						<FormInput label="Alamat Email" required />
					</Grid>
					<Grid item md={12} xs={12}>
						<FormInput label="Password" required />
					</Grid>
					<Grid
						item
						md={12}
						xs={12}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Button
							variant="contained"
							onClick={() => router.push("/dashboard")}
							sx={{
								color: "white",
								backgroundColor: "#0070BA !important",
								fontWeight: "#FAFAFA",
								fontSize: 14,
							}}
						>
							Login
						</Button>
						<Typography variant="body1">
							Belum punya akun?{" "}
							<Box component="span" sx={{ color: "#0070BA" }}>
								Daftar
							</Box>
						</Typography>
					</Grid>
				</Grid>
			</DialogContent>

			<DialogActions>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
};

export default LoginDialog;
