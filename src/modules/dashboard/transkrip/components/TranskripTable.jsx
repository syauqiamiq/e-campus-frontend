import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TranskripTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow className="bg-campus-blue">
						<TableCell className="text-white">No</TableCell>
						<TableCell align="right" className="text-white">
							Kode MK{" "}
						</TableCell>
						<TableCell align="right" className="text-white">
							Mata Kuliah
						</TableCell>
						<TableCell align="right" className="text-white">
							Yudisium
						</TableCell>
						<TableCell align="right" className="text-white">
							SKS
						</TableCell>
						<TableCell align="right" className="text-white">
							Semester
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								-
							</TableCell>
							<TableCell align="right">-</TableCell>
							<TableCell align="right">-</TableCell>
							<TableCell align="right">-</TableCell>
							<TableCell align="right">-</TableCell>
							<TableCell align="right">-</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
