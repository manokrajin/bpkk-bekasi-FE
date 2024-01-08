import { Banner } from "../../components/banner/banner";
import { Navbar } from "../../components/navbar/navbar";
import React from "react";
import { TopNavbar } from "../../components/topNavbar/topNavbar";
import YouTube, { YouTubeProps } from "react-youtube";
import "./index.css";
import { Footer } from "../../components/footer/footer";

export const Profile = () => {
  let loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ex efficitur, fermentum nisl vitae, porta erat. Cras scelerisque nibh enim, eu posuere augue accumsan in. Suspendisse fermentum magna quis iaculis facilisis. Suspendisse potenti. Vivamus sit amet lectus congue, auctor elit quis, facilisis mi. Pellentesque a tempor leo, eget blandit erat. Maecenas quis magna magna. Integer tristique, magna in ultricies pharetra, diam nisl rutrum risus, quis aliquam eros tortor quis ligula. Phasellus ac elementum leo, ut dapibus sem. Integer varius suscipit pharetra. Donec iaculis libero condimentum, molestie libero quis, faucibus est.";

  const section2cardContent = [
    {
      title: "Struktur Organisasi",
      image: "https://picsum.photos/200/300",
      text: loremText,
      href: "#",
    },
    {
      title: "Profil Pimpinan",
      image: "https://picsum.photos/200/300",
      text: loremText,
      href: "#",
    },
    {
      title: "Tugas dan Fungsi",
      image: "https://picsum.photos/200/300",
      text: loremText,
      href: "#",
    },
    {
      title: "Wilayah Kerja",
      image: "https://picsum.photos/200/300",
      text: loremText,
      href: "#",
    },
  ];

  const opts: YouTubeProps['opts'] = {
    height: '480',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <TopNavbar />
      <Navbar />
      <div>
        <Banner />
      </div>

      <div className="flex flex-col px-36 py-20" id="section-1">
        <div className="title text-left text-primary font-bold text-2xl py-5">
          <h1>Sejarah BPKK Bekasi</h1>
        </div>
        <div className="text-left">
          <p>{loremText}</p>
        </div>
      </div>

      <div className="flex-col flex" id="section-2">
        <div className="title p-10">
          <h1 className="text-2xl font-bold text-primary">
            Tentang <br></br> BPKK Bekasi
          </h1>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 ">
          {section2cardContent.map((card) => (
            <div className="flex flex-row w-full   p-10">
              <div className="flex justify-center w-1/2 px-5">
                <img src={card.image} alt="card" className="object-contain" />
              </div>
              <div className="text-left w-1/2">
                <h1 className="text-xl font-bold text-primary">{card.title}</h1>
                <p>{card.text}</p>
                <button className="bg-primary text-white px-5 py-2 rounded">
                  <a href="{card.href}">Lihat Selengkapnya</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-col flex h-98" id="section-3">
        <div className="title p-5">
          <h1 className="text-2xl text-primary font-bold">
            Video Profile<br></br>BPKK Bekasi
          </h1>
        </div>
        <div className="videoContainer">
          <YouTube videoId="2g811Eo7K8U" opts={opts}/>
        </div>
      </div>

      <Footer />
    </div>
  );
};
