import React from "react";
import { Navbar } from "../../../components/navbar/navbar";
import { TopNavbar } from "../../../components/topNavbar/topNavbar";
import petaIndonsia from "./assets/petaIndonesia.png";
import wilayahKerja1 from "./assets/wilayahKerja1.png";
import wilayahKerja2 from "./assets/wilayahKerja2.png";
import wilayahKerja3 from "./assets/wilayahKerja3.png";
import wilayahKerja4 from "./assets/wilayahKerja4.png";
import { Footer } from "../../../components/footer/footer";

export const WilayahKerja = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <div className="text-primary font-bold text-2xl" id="title">
        <h1>Wilayah Kerja</h1>
        <h1>Wilayah Indonesia</h1>
        <h1>Bagian Barat</h1>
      </div>
      <div>
        <img src={petaIndonsia} alt="" />
      </div>

      <div className="p-20 flex justify-center" id="section-1">
        <img src={wilayahKerja1} alt="" />
      </div>

      <div className="p-20 flex justify-center" id="section-2">
        <img src={wilayahKerja2} alt="" />
      </div>

      <div className="p-20 flex justify-center" id="section-2">
        <img src={wilayahKerja3} alt="" />
      </div>

      <div className="p-20 flex justify-center" id="section-2">
        <img src={wilayahKerja4} alt="" />
      </div>

      <Footer />
    </div>
  );
};
