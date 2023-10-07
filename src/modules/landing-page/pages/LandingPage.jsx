import Layout from "@components/layout/Layout";
import React from "react";
import HeroIllustration from "@assets/illustrations/hero-1.png";
import Section1 from "@assets/images/landing/section-1.png";
import ArrowRightLineIcon from "@assets/icons/arrow-right-line.png";
import Image from "next/image";
import { Button, Divider } from "@mui/material";

const LandingPage = () => {
  return (
    <Layout>
      <div className="mt-28 ">
        <div className="container mx-auto grid grid-cols-12 gap-10 w-full ">
          <div className="col-span-12 md:col-span-6 md:p-20 p-10 justify-center w-full h-full align-middle">
            <h1 className="text-5xl md:text-6xl text-justify">
              <span className="font-light">Be</span>{" "}
              <span className="font-bold">Extraordinary</span>{" "}
              <span className="font-extrabold">built by</span>{" "}
              <span className="font-extrabold  text-campus-blue">eCampus</span>
            </h1>
            <p className="text-justify text-black text-lg font-light mt-5">
              Layanan Digital Administrasi Kampus Secara Real-time Mulai dari
              Bimbingan, Monitoring, Plagiarisme, Transkrip Penilaian dan
              Lainnya.
            </p>
            <Button
              variant="contained"
              className="mt-10 text-white rounded-full font-bold text-sm w-full md:w-72 h-12 hover:text-campus-blue hover:bg-white bg-campus-blue"
            >
              Selengkapnya
            </Button>
          </div>
          <div className="col-span-6 hidden md:flex flex-col justify-center items-center">
            <Image
              src={HeroIllustration}
              alt="hero-1"
              width={500}
              height={500}
            />
          </div>
        </div>
        <Divider className="w-full hidden md:block" />
        <div className="bg-section-purple-light">
          <div className="container mx-auto grid grid-cols-12 gap-10 bg-section-purple-light">
            <div className="col-span-12 md:col-span-6 md:flex md:flex-col w-full p-10 justify-center items-center ">
              <Image src={Section1} alt="section-1" width={500} height={500} />
            </div>
            <div className="col-span-12 md:col-span-6 p-10 justify-center w-full h-full align-middle ">
              <h1 className="text-3xl md:text-4xl text-justify">
                <span className="font-bold">
                  Solusi Administrasi Kampus Bersama
                </span>{" "}
                <span className="font-bold  text-campus-blue">eCampus</span>
              </h1>
              <p className="text-justify text-black text-lg font-light mt-5">
                <span className="font-bold  text-campus-blue">eCampus</span>{" "}
                merupakan sebuah layanan berbasis website dalam memberikan
                solusi dan penanganan permasalah Administrasi secara real-time
                dan online dalam memajukan dunia Pendidikan di Indonesia serta
                perkembangan teknologi informasi mutakhir.
              </p>
              <div className="flex gap-5 items-center mt-10 md:mt-24 hover:cursor-pointer">
                <span className="text-campus-blue text-base">
                  Baca Selengkapnya
                </span>
                <Image
                  src={ArrowRightLineIcon}
                  alt="arrow-right-icon"
                  width={25}
                  height={50250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
