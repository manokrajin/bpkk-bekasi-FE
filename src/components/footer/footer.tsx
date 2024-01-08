import React from "react";
import iconFooter from "../../assets/icon/bpkkFooter.png";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  const iconStyle = {
    backgroundImage: `url(${iconFooter})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return (
    <div className="flex flex-col bg-primary p-10 md:flex-row md:text-left">
      <div className="flex flex-col w-1/3">
        <div className="icon h-11 w-48" style={iconStyle}></div>
        <div className="alamat text-white text-left">
          <span>
            <a
              href="https://www.google.com/search?sca_esv=575689866&sxsrf=AM9HkKkP9v1wCAci9cvUlXB2TVHmwRQKxQ:1698034933328&q=balai+perluasan+kesempatan+kerja+bpkk+bekasi+alamat&ludocid=16501589428729839499&sa=X&ved=2ahUKEwjLkpGIqYuCAxWzXGwGHYYHCMQQ6BN6BAhCEAI"
              className="underline"
            >
              Alamat
            </a>
            : Cevest Bbplk Bekasi, Jl. Guntur Raya No.1, RT.004/RW.016,
            Kayuringin Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17144
          </span>
        </div>
        <div className="nomorTelp text-white text-left">
          <a
            href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDbLrjIuLCswYLRSNagwSjWztEg2TkkyNEk0SLQwtDKoSDU1MDRLNrIwMEi2ME-zSPLiTirIzlZISs1OLM4EAIHHE3c&q=bpkk+bekasi&oq=bpkk&gs_lcrp=EgZjaHJvbWUqDwgBEC4YJxivARjHARiKBTIGCAAQRRg7Mg8IARAuGCcYrwEYxwEYigUyCQgCEEUYOxiABDIHCAMQABiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMzExMGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8"
            className="underline"
          >
            <span className="decoration-solid"> (021)88856124 </span>
          </a>
        </div>
      </div>
      <div className="flex w-1/3  flex-wrap text-left md:mx-5">
        <div className="flex flex-col text-white text-left mx-2">
          <div className="header text-xl">
            <HashLink to="/#">Home</HashLink>
          </div>
          <div className="subitems my-2">
            <div className="subItem">
              <HashLink to="/#section-3">Berita TKM Pemula</HashLink>
            </div>
            <div className="subItem">
              <HashLink to="/#section-4">Berita Kemnaker</HashLink>
            </div>
            <div className="subItem">
              <HashLink to="/#section-5">Galeri Terbaru</HashLink>
            </div>
            <div className="subItem">
              <HashLink to="/#section-6">Pengumuman</HashLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white text-left mx-2">
          <div className="header text-xl">
            <HashLink to="/profile/#">Profile</HashLink>
          </div>
          <div className="subitems my-2">
            <div className="subItem">
              <a href="/profile/tugas-dan-fungsi">Sejarah</a>
            </div>
            <div className="subItem">
              <a href="/profile/wilayah-kerja">Tugas dan Fungsi</a>
            </div>
            <div className="subItem">
              <a href="#">Wilayah Kerja</a>
            </div>
            <div className="subItem">
              <a href="#">Profil Pimpinan Balai</a>
            </div>
            <div className="subItem">
              <a href="#">Struktur Organisasi</a>
            </div>
            <div className="subItem">
              <a href="#">Video Profile Balai</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white text-left mx-2">
          <div className="header text-xl">Profile</div>
          <div className="subitems my-2">
            <div className="subItem">
              <a href="#">Berita</a>
            </div>
            <div className="subItem">
              <a href="#">Pengumuman</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white text-left mx-2">
          <div className="header text-xl">Galeri TKM Pemula</div>
          <div className="subitems my-2">
            <div className="subItem">
              <a href="#">Profile TKM Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Video</a>
            </div>
            <div className="subItem">
              <a href="#">Foto</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white text-left mx-2">
          <div className="header text-xl">Kerjasama</div>
          <div className="subitems my-2">
            <div className="subItem">
              <a href="#">Mitra</a>
            </div>
            <div className="subItem">
              <a href="#">Investor</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/3  flex-wrap text-left md:mx-5">
        <div className="flex flex-col text-white text-left mx-2">
          <div className="header text-xl">Layanan</div>
          <div className="subitems my-2">
            <div className="subItem">
              <a href="#">Tenaga Kerja Mandiri Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Pendaftaran TKM Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Sebaran Wilayah TKM Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Pengumuman Penerimaan Bantuan TKM Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Data TKM Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Sebaran Wilayah TKM Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Pengumuman Penerimaan Bantuan TKM Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Pembekalan TKS Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Data TKM Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Jejaring Perluasan Kesempatan Kerja</a>
            </div>
            <div className="subItem">
              <a href="#">Informasi</a>
            </div>
            <div className="subItem">
              <a href="#">Konsultasi</a>
            </div>
            <div className="subItem">
              <a href="#">Promosi</a>
            </div>
            <div className="subItem">
              <a href="#">Temu Konsultasi</a>
            </div>
            <div className="subItem">
              <a href="#">Bussiness Matching</a>
            </div>
            <div className="subItem">
              <a href="#">Peningkatan Kapasitas TKM Pemula</a>
            </div>
            <div className="subItem">
              <a href="#">Layanan PPID</a>
            </div>
            <div className="subItem">
              <a href="#">Fasilitas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
