import React from "react";
import { TopNavbar } from "../../../components/topNavbar/topNavbar";
import { Navbar } from "../../../components/navbar/navbar";
import { Footer } from "../../../components/footer/footer";

export const TugasDanFungsi = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />

      <div
        className="flex flex-col md:flex-row md:px-32 justify-evenly h-fit"
        id="section-1"
      >
        <div id="left">
          <div id="upper-left">
            <h1 className="capitalize text-primary font-bold text-2xl">
              TUGAS<br></br>BALAI PERLUASAN KESEMPATAN KERJA<br></br>BEKASI
            </h1>
            <h2 className="text-primary text-xl">
              Sesuai Pemnaker No.1 Tahun 2022
            </h2>
          </div>
          <div
            className="py-10 justify-center flex items-center text-center"
            id="bottom-left"
          >
            <ol className="list-decimal text-left text-primary font-bold">
              <li>Penciptaan Tenaga Kerja Mandiri Pemula (Start Up)</li>
              <li>Peningkatan Jejaring Perluasan Kesempatan Kerja</li>
            </ol>
          </div>
        </div>
        <div id="right">
          <img
            src="https://i.ibb.co/4fQ0W2V/Rectangle-1.png"
            alt="Rectangle-1"
            className="object-contain"
          />
        </div>
      </div>

      <div id="section-2" className="text-left px-36">
        <div id="title">
          <h1 className="text-2xl font-bold text-primary my-5">PASAL 31 DAN 32</h1>
          <h2 className="text-lg text-grayText">
            Bagian Ketiga<br></br>Balai Perluasan Kesempatan Kerja
          </h2>
        </div>
        <div className="text-lg text-grayText my-5" id="body">
          <h1>
            Paragraf 1<br></br>Tugas dan Fungsi
          </h1>

          <h2 className="my-5">Pasal 31</h2>
          <p>
            Balai Perluasan Kesempatan Kerja mempunyai tugas melaksanakan
            penciptaan tenaga kerja mandiri pemula dan peningkatan jejaring
            perluasan kesempatan kerja.
          </p>
          <h2 className="my-5">Pasal 32</h2>
          <p>
            Dalam melaksanakan tugas sebagaimana dimaksud dalam Pasal 31, Balai
            Perluasan Kesempatan Kerja menyelenggarakan fungsi:
          </p>
          <ol className="list-item">
            <li>penyusunan rencana, program, dan anggaran;</li>
            <li>pelaksanaan penciptaan tenaga kerja mandiri pemula;</li>
            <li>
              pelaksanaan peningkatan jejaring perluasan kesempatan kerja;
            </li>
            <li>
              pelaksanaan urusan organisasi dan sumber daya manusia aparatur ,
              tata laksana, keuangan, rumah tangga, persuratan, kearsipan, perlengkapan, dan pengelolaan barang milik negara;dan
            </li>
            <li>
                penyusunan evaluasi dan pelaporan
            </li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};
