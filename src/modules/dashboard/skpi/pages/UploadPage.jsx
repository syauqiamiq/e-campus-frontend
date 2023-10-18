import CustomButton from "@components/button/CustomButton";
import DashboardLayout from "@components/layout/DashboardLayout";
import Image from "next/image";
import React from "react";
import HeaderRounded from "@assets/icons/bulat.png";
import { Divider, Card, Typography, CardContent, FormControlLabel, Checkbox, Select, MenuItem, InputLabel, FormControl, Box, styled } from "@mui/material";
import TextField from '@mui/material/TextField';
import GarisImage from "@assets/icons/garis.png";
import { Button } from "@mui/joy";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const UploadPage = (props) => {
    const [peran, setPeran] = React.useState('');

    const handleChange = (event) => {
        setPeran(event.target.value);
    };

    return <DashboardLayout>
        <div className="bg-white rounded-lg">
            <div className="container mx-auto grid grid-cols-8 gap-10 py-8 px-5 justify-center items-center">
                <div className=" col-span-7">
                    <h1 className="font-bold text-3xl">Data SKPI - Universitas eCampus</h1>
                </div>
                <div className=" col-span-1 justify-end items-end px-10">
                    <Image className="cursor-pointer"
                        src={HeaderRounded}
                        alt="skpiicon"
                        width={25}
                        height={25}
                    />
                </div>
            </div>
        </div>
        <div className="col-span-12 md:col-span-12 md:px-1 py-5 justify-center w-full h-full items-center">
            <Card sx={{ minWidth: 10 }} className="rounded-3xl">
                <CardContent>
                    <div className="px-32">
                        <div className="flex justify-start mt-4 bg-blue-100 py-2 rounded-lg px-5">
                            <div className="flex gap-3 px-32 py-6">
                                <div className="flex flex-col justify-start">
                                    <Image
                                        src={GarisImage}
                                        alt="skpiicon"
                                        width={9}
                                        height={10}
                                    />
                                </div>
                                <div className="flex flex-col justify-center gap-3 items-center">
                                    <div className="text-sm font-light">
                                        <p className="text-3xl font-bold">Informasi Data SKPI</p>
                                        <p>-Mohon untuk mengisi data dengan lengkap dan benar beserta bukti dokumen.</p>
                                        <p>-Dokumen harus berformat PDF</p>
                                        <p>-Ukuran Max. 2MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto grid grid-cols-12 gap-10 py-10 justify-center items-center">
                        <div className=" col-span-6">
                            <h1 className="text-2xl">Uraian Kegiatan :</h1>
                        </div>
                        <div className=" col-span-6">
                            <TextField sx={{ width: '60ch' }}
                                helperText=""
                                id="demo-helper-text-aligned"
                                label="Uraian Kegiatan"
                            />
                        </div>

                        <div className=" col-span-6">
                            <h1 className="text-2xl">Jenis Kegiatan :</h1>
                        </div>
                        <div className=" col-span-6">
                            <TextField sx={{ width: '60ch' }}
                                helperText=""
                                id="demo-helper-text-aligned"
                                label="Jenis Kegiatan"
                            />
                        </div>
                        <div className=" col-span-6">
                            <h1 className="text-2xl">Kompetensi, Tingkat, Partisipasi :</h1>
                        </div>
                        <div className=" col-span-6">
                            <Box>
                                <FormControl fullWidth size="medium">
                                    <InputLabel id="demo-simple-select-label">Kompetensi, Tingkat, Partisipasi :</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={peran}
                                        label="Kompetensi, Tingkat, Partisipasi :"
                                        onChange={handleChange}
                                        className="rounded-lg"
                                    >
                                        <MenuItem value={"Panitia"}>Panitia</MenuItem>
                                        <MenuItem value={"Peserta"}>Peserta</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className=" col-span-6 ">
                            <h1 className="text-2xl">Upload Dokumen PDF :</h1>
                        </div>
                        <div className=" col-span-2 bg-gray-300 rounded-lg shadow-lg px-6 items">
                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                Pilih file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                        </div>
                        {/*  */}
                        <div className="col-span-12">
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Dengan ini saya menyatakan bahwa, data yang saya isikan di formulir ini adalah benar adanya sesuai dengan bukti-bukti yang ada." />
                        </div>
                        <div className="col-span-12 justify-start flex mx-5 items-center">
                            <div className="w-full md:w-72 mt-5 mb-5">
                                <CustomButton type="contained" title="Upload File" onClick={() => {
                                    router.push("/dashboard");
                                }} />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </DashboardLayout >;
};

export default UploadPage;