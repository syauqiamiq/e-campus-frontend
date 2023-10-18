import Layout from "@components/layout/Layout";
import React from "react";
import TextField from '@mui/material/TextField';
import { Divider, Card, Typography, CardContent, FormControlLabel, Checkbox } from "@mui/material";
import CustomButton from "@components/button/CustomButton";
import Arrowleft from "@assets/icons/Arrowleft.png";
import Image from "next/image";
import { useRouter } from "next/router";
const CreateAccount = (props) => {
    const router = useRouter()
    return (
        <Layout>
            <Divider className="w-full hidden md:block" />
            <div className="py-20 bg-section-purple-light ">
                <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-20">
                    <div className="col-span-12 md:col-span-12 md:p-12 p-8 justify-center w-full h-full align-middle items-center">
                        <Card sx={{ minWidth: 10 }} className="rounded-3xl">
                            <CardContent>
                                <div className="flex gap-3 items-center mt-1 md:mt-2 hover:cursor-pointer">
                                    <Image
                                        src={Arrowleft}
                                        alt="arrow-right-icon"
                                        width={10}
                                        height={50250}
                                    />
                                    <span className="text-campus-blue text-base">
                                        Kembali
                                    </span>
                                </div>
                                <Typography sx={{ mb: 3, mt: 1 }} color="text.first" gutterBottom className="font-bold text-2xl" >
                                    Daftar Akun
                                </Typography>
                                <Divider className="w-full hidden md:block" />
                                <Typography sx={{ mb: 1, mt: 3 }} color="text.first" className="font-bold text-2xl text-center">
                                    Informasi Akun
                                </Typography>
                                <div className="container mx-auto grid grid-cols-12 gap-10 py-10 justify-center">
                                    <TextField className=" col-span-6"
                                        helperText=""
                                        id="demo-helper-text-aligned"
                                        label="Nama Depan"
                                    />
                                    <TextField className=" col-span-6"
                                        helperText=""
                                        id="demo-helper-text-aligned-no-helper"
                                        label="Nama Belakang"
                                    />
                                    <TextField className="col-span-12"
                                        helperText=""
                                        id="demo-helper-text-aligned"
                                        label="Alamat Email"
                                    />
                                    <TextField className="col-span-12"
                                        helperText="*Minimal 8 karakter dan mengandung kombinasi huruf kecil, huruf besar, dan angka"
                                        id="demo-helper-text-aligned"
                                        label="Kata Sandi"
                                        type="password"
                                    />
                                    <TextField className="col-span-12"
                                        helperText=""
                                        id="demo-helper-text-aligned"
                                        label="Perguruan Tinggi Asal"
                                    />
                                    <TextField className="col-span-12"
                                        helperText=""
                                        id="demo-helper-text-aligned"
                                        label="ID Kampus"
                                    />
                                    <div className="col-span-12">
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Dengan ini saya menyetujui Ketentuan Penggunaan dan Kebijakan Privasi dari eCampus." />
                                    </div>
                                    <div className="col-span-12 justify-center flex mx-5 items-center">
                                        <div className="w-full md:w-72 mt-5 mb-5">
                                            <CustomButton type="contained" title="Daftar Akun" onClick={() => {
                                                router.push("/dashboard");
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateAccount;
