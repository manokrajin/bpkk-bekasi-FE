import React from "react";
import { Navbar } from "../../../components/navbar/navbar";
import { TopNavbar } from "../../../components/topNavbar/topNavbar";
import leftImage from "./left.png";
import rightImage from "./right.png";
import strukturOrganisasi from "./struktur.png";
import { Footer } from "../../../components/footer/footer";

export const Struktur = () => {
  let namaKepala = "Drs. H. M. Yusuf, M.Si";
  let namaKasubagUmum = "Drs. H. M. Yusuf, M.Si";
  let namaSubKoordinatorPenyelenggaraTKM = "Drs. H. M. Yusuf, M.Si";
  let namaSubKoordinatorJejaringPerluasan = "Drs. H. M. Yusuf, M.Si";

  return (
    <div>
      <TopNavbar />
      <Navbar />

      <div id="title" className="md:text-left md:px-48 flex flex-col justify-center md:justify-center">
        <h1 className="text-primary text-2xl font-bold">Struktur Organisasi</h1>
        <h2 className="text-primary text-xl ">Balai Perluasan Kesempatan Kerja Bekasi</h2>
      </div>

      <div className="flex justify-center my-20">
        <img src={strukturOrganisasi} alt="" />
      </div>

      <div id="section-2">
        <div>
          <h1 className="text-primary text-2xl font-bold">Regulasi Bidang</h1>
          <h2 className="text-primary text-xl">
            Perluasan Kesempatan Tenaga Kerja
          </h2>
          <div
            className="flex flex-col md:flex-row justify-center"
            id="imageContainer"
          >
            <img src={leftImage} alt="" />
            <img src={rightImage} alt="" />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};
