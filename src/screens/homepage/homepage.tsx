import React, { useEffect, useState } from "react";
import { TopNavbar } from "../../components/topNavbar/topNavbar";
import { Navbar } from "../../components/navbar/navbar";
import { Banner } from "../../components/banner/banner";
import { TkmPemula } from "./subNavItem/tkmPemula";
import { JejaringPerluasan } from "./subNavItem/jejaringPerluasan";
import { LayananPpid } from "./subNavItem/layananPpid";
import { Fasilitas } from "./subNavItem/fasilitas";
import "./index.css";
import { Footer } from "../../components/footer/footer";
import { loadAllCompanyProfile, loadAllTkmPemulaPost } from "../../service/remoteService";
import LiveChat from "../../components/liveChat/liveChat";
import {NavbarTemp}   from "../../components/navbarTemp";

export const Homepage = () => {
  const [content, setContent] = useState<any>([]);
  const [carousel , setCarousel] = useState<any>([]);
  const [deskripsi, setDeskripsi] = useState<any>([]);
  const [tkmPemula, setTkmPemula] = useState<any>([]);
  const [img4, setImg4] = useState<any>([]);
  const [img3, setImg3] = useState<any>([]);

  const baseUrlServer = "http://192.168.220.81/api/"
  const [isLoading, setIsLoading] = useState(true);

  const getContent = async () => {
    const [response, tkmPemulaResponse] = await Promise.all([loadAllCompanyProfile(), loadAllTkmPemulaPost()]);
    
    try {
      setTkmPemula(tkmPemulaResponse.data.data);
      console.log(tkmPemulaResponse.data.data[0].thumbnail[0].file_path);
      setImg3(tkmPemulaResponse.data.data[0].thumbnail[0].file_path);
      setImg4(tkmPemulaResponse.data.data[0].thumbnail[0].file_path);
    } catch (error) {
      console.log(error);
    }

    setContent(response);
    setCarousel(response.data[2].item_value);
    setDeskripsi(response.data[4].item_value);
    // console.log(tkmPemulaResponse.data.data[0].thumbnail[0].file_path);
    // console.log(tkmPemulaResponse.data.data);
    
    

    setIsLoading(false);
  };

  if (isLoading) {
    getContent();
  }

    useEffect(() => {
      const fetchData = async () => {
        await getContent();
      };

      fetchData();
    }, []);

   // console.log(content.data[2].item_value);

 // console.log(content.data[2].item_value);

  

  

  let loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ex efficitur, fermentum nisl vitae, porta erat. Cras scelerisque nibh enim, eu posuere augue accumsan in. Suspendisse fermentum magna quis iaculis facilisis. Suspendisse potenti. Vivamus sit amet lectus congue, auctor elit quis, facilisis mi. Pellentesque a tempor leo, eget blandit erat. Maecenas quis magna magna. Integer tristique, magna in ultricies pharetra, diam nisl rutrum risus, quis aliquam eros tortor quis ligula. Phasellus ac elementum leo, ut dapibus sem. Integer varius suscipit pharetra. Donec iaculis libero condimentum, molestie libero quis, faucibus est.";

  let titleSection3 = "Berita TKM Pemula";
  const imageSection3 = "https://i.ibb.co/9szXjpk/github.png";
  let titleNewsSection3 = "Pelatihan Digital Marketing Untuk TKM Pemula";
  let tanggalSection3 = "12 Agustus 2021";
  const imageNewsSection3 = [
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
  ];

  let titleSection4 = "Berita Kemnaker";
  const imageSection4 = "https://i.ibb.co/9szXjpk/github.png";
  let titleNewsSection4 = "Monev 2022, TKM Pemula Berhasil Bisnisnya";
  let tanggalSection4 = "12 Agustus 2021";

  const imageNewsSection5 = [
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
    {
      image: "https://i.ibb.co/9szXjpk/github.png",
      title: "Pelatihan Digital Marketing Untuk TKM Pemula",
      tanggal: "12 Agustus 2021",
    },
  ];

  let titleSection6 = "Pendaftaran Business Link and Match";

  const handleSubNavItemActive = (e: any) => {
    const subNavItem = document.querySelectorAll("#subNavItem");
    subNavItem.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  const [activePage, setActivePage] = useState("TKM Pemula");

  return (
    <div className="flex flex-col">
      <div className="">
        <TopNavbar />
      </div>
      <div className="md:sticky top-0 z-50">
        <NavbarTemp/>
      </div>
      <div id="banner" className="">
        <Banner />
      </div>

      <div className=" " id="section-1">
        <div className="flex m-10 flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img src="" alt="img" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="font-bold text-primary text-xl text-center md:text-left">
              Tentang BPKK Bekasi
            </div>
            <div className="my-5 text-center md:text-left">{deskripsi}</div>
            <div className="text-center md:text-left">
              <a href="#">
                <button className="bg-primary text-white px-7 py-2 rounded-md">
                  Lihat Selengkapnya
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary h-96" id="section-2">
        <div className="subNavigation flex" id="subNavigation">
          <div className="flex justify-center w-full items-center mx-10 text-white">
            <button
              className={`subNavItem ${
                activePage === "TKM Pemula" && "active"
              }`}
              onClick={() => setActivePage("TKM Pemula")}
            >
              TKM Pemula
            </button>
            <button
              className={`subNavItem ${
                activePage === "Jejaring Perluasan Kesempatan Kerja" && "active"
              }`}
              onClick={() =>
                setActivePage("Jejaring Perluasan Kesempatan Kerja")
              }
            >
              <p className="text-ellipsis">
                Jejaring Perluasan Kesempatan Kerja{" "}
              </p>
            </button>
            <button
              className={`subNavItem ${
                activePage === "Layanan PPID" && "active"
              }`}
              onClick={() => setActivePage("Layanan PPID")}
            >
              Layanan PPID
            </button>
            <button
              className={`subNavItem ${activePage === "Fasilitas" && "active"}`}
              onClick={() => setActivePage("Fasilitas")}
            >
              Fasilitas
            </button>
          </div>
        </div>
        <div className="renderedPage p-5" id="renderedPage">
          {/* Render the component based on the active page */}
          {activePage === "TKM Pemula" && <TkmPemula />}
          {activePage === "Jejaring Perluasan Kesempatan Kerja" && (
            <JejaringPerluasan />
          )}
          {activePage === "Layanan PPID" && <LayananPpid />}
          {activePage === "Fasilitas" && <Fasilitas />}
          {/* ... (Add conditions for other pages) */}
        </div>
      </div>

      <div className="flex flex-col p-10" id="section-3">
        <div className="title text-left ">
          <div className="font-bold text-primary text-xl">{titleSection3}</div>
        </div>
        <div className="h-72 my-10">
          <img
            className="object-cover w-full h-full"
            src={img3}
            alt=""
          />
        </div>
        <div className="headerTitle my-5">
          <div className="titleNews">
            <div className="text-primary text-xl text-left">
              {titleNewsSection3}
            </div>
          </div>
          <div className="tanggal">
            <div className="text-primary text-left">{tanggalSection3}</div>
          </div>
        </div>
        <div className="desc">
          <div className="text-primary text-left">{loremText}</div>
        </div>
        <div className="newsSectionImage my-2 justify-center">
          <div className="flex flex-col justify-center mx-auto md:flex-row">
            {
              tkmPemula.map((item: any, index: number) => (
                <div key={index} className="w-1/3 p-2">
                  <div className="image-container relative">
                    <img
                      className="object-cover w-full h-24"
                      src={`${baseUrlServer}${item.thumbnail[0].file_path}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="text-primary text-left">{item.title}</div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-full">
          <button className="bg-primaryLight w-1/2 my-3 justify-center text-white rounded p-3 md:w-1/6">
            <a href="#">Lihat Semua Berita</a>
          </button>
        </div>
      </div>

      <div className="bg-primary p-10" id="section-4">
        <div className="title text-left ">
          <div className="font-bold text-white text-xl">{titleSection4}</div>
        </div>
        <div className="h-72 my-10">
          <img
            className="object-cover w-full h-full"
            src={`${baseUrlServer}${img4}`}
            alt=""
          />
        </div>
        <div className="headerTitle my-5">
          <div className="titleNews">
            <div className="text-white text-xl text-left">
              {titleNewsSection4}
            </div>
          </div>
          <div className="tanggal">
            <div className="text-white text-left">{tanggalSection4}</div>
          </div>
        </div>
        <div className="desc">
          <div className="text-white text-left">{loremText}</div>
        </div>
        <div className="w-full">
          <button className="bg-primaryLight w-1/2 my-3 justify-center text-white rounded p-3 md:w-1/6">
            <a href="#">Lihat Semua Berita</a>
          </button>
        </div>
      </div>

      <div className="p-10" id="section-5">
        <div className="title my-5">
          <div className="font-bold text-primary text-4xl ">Galeri Terbaru</div>
        </div>
        <div className="flex flex-wrap">
         {tkmPemula.map((item: any, index: number) => (
            
            <div key={index} className="w-1/3 p-2">
              <div className="image-container relative">
                <img
                  className="object-cover w-full h-72"
                  src={`${baseUrlServer}${item.thumbnail[0].file_path}`}
                  alt={item.title}
                />
              </div>
              <div className="text-primary text-left">{item.title}</div>
            
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-96 bg-primary flex flex-col items-center justify-center"
        id="section-6"
      >
        <div className="text-center">
          <div className="text-white" id="subtitle">
            informasi
          </div>
          <div className="font-bold text-white text-4xl" id="title">
            {titleSection6}
          </div>
        </div>
        <div className="button my-5">
          <button className="bg-orange  text-white px-7 py-2 rounded-md">
            Daftar
          </button>
        </div>
      </div>

      <LiveChat />

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
