import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Layout from '@components/layout/Layout';
import CustomButton from '@components/button/CustomButton';
import Link from 'next/link';
import Button from '@mui/material/Button';

const SignUp = () => {
  const [peran, setPeran] = React.useState('');

  const handleChange = (event) => {
    setPeran(event.target.value);
  };

  return (
    <Layout>
      <div class="flex justify-center p-3">
        <div className="mt-28 bg-[#FFFFFF] w-fit">
            <div className="border-b border-bot p-5">
                <h1 className="font-bold text-xl">Buat Akun</h1>
                <p className="text-sm md:text-base">Pilih kategori yang sesuai dengan peran anda </p>
            </div>

            <div className="p-5 border-b border-bot px-5 pt-8 pb-10">
                <h1 className="font-bold text-xl">Pilih Peran</h1>
                <p className="mt-3 text-sm mb-3 md:text-base">Silahkan pilih peran yang sesuai, pemilihan peran akan mempengaruhi fitur yang tersedia.</p>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Peran</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={peran}
                      label="Peran"
                      onChange={handleChange}
                      className= "rounded-lg"
                    >
                      <MenuItem value={"mahasiswa"}>Mahasiswa</MenuItem>
                      <MenuItem value={"dosen"}>Dosen</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
            </div>

            <div className="flex flex-col justify-center items-center p-5 gap-3">
              <div>
                <Button className="bg-campus-blue p-5 rounded-full font-bold" size="large" variant="contained">Selanjutnya</Button>
              </div>
              <div className="flex flex-col items-center gap-3 text-sm sm:flex-row sm:gap-1 md:text-base">
                <p>Sudah punya akun?</p>
                <Link href="" className="text-campus-blue font-medium hover:underline">Login</Link>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp