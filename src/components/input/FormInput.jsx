import {
	Box,
	FormControl,
	FormHelperText,
	InputProps,
	TextField,
	Typography,
} from "@mui/material";

export const FormInput = ({
	name,
	placeHolder,
	label,
	isShrink = false,
	type,
	inputProps,
	multiline,
	minRows,
	endAdornment,
	startAdornment,
	disabled,
	required = false,
	fullWidth = true,
	value,
	onChange,
	extraOnChange,
}) => {
	return (
		<FormControl fullWidth>
			<Box>
				<Typography
					display="inline"
					variant="caption"
					paddingTop={0}
					marginTop={0}
				>
					{label}
				</Typography>
				{required && (
					<Typography display="inline" color={"red"} variant="subtitle2">
						*
					</Typography>
				)}
			</Box>
			<TextField
				InputProps={{
					startAdornment: startAdornment,
					endAdornment: endAdornment,
				}}
				{...(minRows && { minRows: minRows })}
				{...(multiline && { multiline: multiline })}
				type={type}
				disabled={disabled}
				{...(placeHolder && { placeholder: placeHolder })}
				{...(isShrink && { InputLabelProps: { shrink: true } })}
				onChange={onChange}
				value={value}
				{...(inputProps && { InputProps: inputProps })}
				fullWidth={fullWidth}
			/>
		</FormControl>
	);
};
