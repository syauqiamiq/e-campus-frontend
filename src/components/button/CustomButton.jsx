import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ title, type, onClick }) => {
	return type == "outlined" ? (
		<Button
			variant="contained"
			onClick={onClick}
			className="text-campus-blue bg-white rounded-full font-bold text-[14px] w-full h-50 hover:text-white hover:bg-campus-blue shadow-none  !border !border-gray-300 border-solid"
		>
			{title}
		</Button>
	) : (
		<Button
			variant="contained"
			onClick={onClick}
			className="text-white rounded-full font-bold text-[14px] w-full h-50 hover:text-campus-blue hover:bg-white bg-campus-blue"
		>
			{title}
		</Button>
	);
};

export default CustomButton;
