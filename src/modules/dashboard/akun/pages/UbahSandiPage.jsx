import CustomButton from "@components/button/CustomButton";
import DashboardLayout from "@components/layout/DashboardLayout";
import { Card, CardActionArea, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const UbahSandiPage = (props) => {
    const router = useRouter()
    return <DashboardLayout>

        <div className="container mx-auto grid grid-cols-12 gap-10 py-2 justify-center">
            <div className="col-span-3 justify-start flex mx-5 items-center">
                <div className="w-full md:w-72 mt-5 mb-5">
                    <CustomButton type="contained" title="Lihat Profil" onClick={() => {
                        router.push("/dashboard/akun");
                    }} />
                </div>
            </div>
            <div className="col-span-3 justify-center flex mx-5 items-center">
                <div className="w-full md:w-72 mt-5 mb-5">
                    <CustomButton type="contained" title="Ubah Kata Sandi" onClick={() => {
                        router.push("/dashboard/akun/ubahkatasandi");
                    }} />
                </div>
            </div>
        </div>
        <Card sx={{ minWidth: 10 }} className="rounded-lg">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="px-5 font-bold">
                    Ubah Kata Sandi
                </Typography>
                <div className="container mx-auto grid grid-cols-12 gap-5 py-10 justify-center items-center px-6">
                    <div className=" col-span-12 ">
                        <h1 className="text-1xl">Kata Sandi Sekarang :</h1>
                    </div>
                    <div className=" col-span-12 rounded-lg">
                        <TextField sx={{ width: '100ch' }}
                            id="demo-helper-text-aligned"
                            label="Kata Sandi Sekarang"
                            type="password"
                        />
                    </div>
                    <div className=" col-span-12 ">
                        <h1 className="text-1xl">Kata Sandi Baru :</h1>
                    </div>
                    <div className=" col-span-12 rounded-lg ">
                        <TextField sx={{ width: '100ch' }}
                            helperText="*Minimal 8 karakter dan mengandung kombinasi huruf kecil, huruf besar, dan angka"
                            id="demo-helper-text-aligned"
                            label="Kata Sandi Baru"
                            type="password"
                        />
                    </div>
                    <div className=" col-span-12 ">
                        <h1 className="text-1xl">Ketik Ulang Kata Sandi Baru :</h1>
                    </div>
                    <div className=" col-span-12 rounded-lg">
                        <TextField sx={{ width: '100ch' }}
                            id="demo-helper-text-aligned"
                            label="Ketik Ulang Kata Sandi Baru"
                            type="password"
                        />
                    </div>
                    <div className="col-span-12 justify-center flex mx-5 items-center">
                        <div className="w-full md:w-72 mt-5 mb-5">
                            <CustomButton type="contained" title="Ubah Kata Sandi" onClick={() => {
                                router.push("/dashboard");
                            }} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </DashboardLayout>;
};

export default UbahSandiPage;