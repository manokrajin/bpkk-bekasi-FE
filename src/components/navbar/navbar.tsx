import React, { useEffect, useState } from "react";
import logo from "../../assets/icon/bpkkLogo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { homePageContent } from "../../service/remoteService";

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);
  const [showDropdown7, setShowDropdown7] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const logoBpkk = {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover", // or "contain" depending on your preference
    backgroundPosition: "center", // Center the image
  };

  return (
    <div className="h-32 flex items-center text-primary my-3 md:my-0">
      <div className="flex flex-col md:flex-row justify-center w-full">
        <a href="/">
          <div
            className=" mx-auto md:mx-0 my-3 justify-center md:justify-start"
            style={{ width: "10.3125rem", height: "4.8125rem", ...logoBpkk }}
          ></div>
        </a>
        <div className="hidden md:flex  justify-between w-3/5 items-center mx-10">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div>Home</div>
            {showDropdown && (
              <div className="absolute bg-white shadow-md p-2 z-10 w-max text-left">
                {/* Dropdown content goes here */}
                <div>
                  <HashLink id="dropdown-item" to="/#section-3">
                    Berita TKM Pemula
                  </HashLink>
                </div>
                <div>
                  <HashLink id="dropdown-item" to="/#section-4">
                    Berita Kemnaker
                  </HashLink>
                </div>
                <div>
                  <HashLink id="dropdown-item" to="/#section-5">
                    Galeri Terbaru
                  </HashLink>
                </div>
                <div>
                  <HashLink id="dropdown-item" to="/#section-6">
                    Pengumuman
                  </HashLink>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown2(true)}
            onMouseLeave={() => setShowDropdown2(false)}
          >
            <Link to={"/profile"}>Profile</Link>
            {showDropdown2 && (
              <div className="absolute bg-white shadow-md p-2 z-10 w-max text-left">
                {/* Dropdown content goes here */}
                <div>
                  <a id="dropdown-item" href="/profile">
                    Sejarah{" "}
                  </a>
                </div>
                <div>
                  <a id="dropdown-item" href="/profile/tugas-dan-fungsi">
                    Tugas dan Fungsi
                  </a>
                </div>
                <div>
                  <a id="dropdown-item" href="/profile/wilayah-kerja">
                    Wilayah Kerja{" "}
                  </a>
                </div>
                <div>
                  <a id="dropdown-item" href="#">
                    Profil Pimpinan Balai
                  </a>
                </div>
                <div>
                  <a id="dropdown-item" href="/profile/struktur">
                    Struktur Organisasi
                  </a>
                </div>
                <div>
                  <a id="dropdown-item" href="#">
                    Profil Pimpinan Balai
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown3(true)}
            onMouseLeave={() => setShowDropdown3(false)}
          >
            Info
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown4(true)}
            onMouseLeave={() => setShowDropdown4(false)}
          >
            Galeri TKM Pemula
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown5(true)}
            onMouseLeave={() => setShowDropdown5(false)}
          >
            Layanan
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown6(true)}
            onMouseLeave={() => setShowDropdown6(false)}
          >
            Kerjasama
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown7(true)}
            onMouseLeave={() => setShowDropdown7(false)}
          >
            Download
          </div>
        </div>
        <div className="md:hidden ">
          <button
            onClick={toggleMobileMenu}
            className="bg-primary text-white p-3 "
          >
            Menu
          </button>
        </div>
        {isMobileMenuVisible && (
          <div
            className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-20"
            onClick={toggleMobileMenu}
          >
            <div className="flex flex-col items-center py-4">
              <div id="homeSection" className="flex-col my-3">
                <div className="font-bold">
                  <Link to="/" onClick={toggleMobileMenu}>
                    Home
                  </Link>
                </div>
                <div>
                  <HashLink
                    id="dropdown-item"
                    to="/#section-3"
                    onClick={toggleMobileMenu}
                  >
                    Berita TKM Pemula
                  </HashLink>
                </div>
                <div>
                  <HashLink
                    id="dropdown-item"
                    to="/#section-4"
                    onClick={toggleMobileMenu}
                  >
                    Berita Kemnaker
                  </HashLink>
                </div>
                <div>
                  <HashLink
                    id="dropdown-item"
                    to="/#section-5"
                    onClick={toggleMobileMenu}
                  >
                    Galeri Terbaru
                  </HashLink>
                </div>
                <div>
                  <HashLink
                    id="dropdown-item"
                    to="/#section-6"
                    onClick={toggleMobileMenu}
                  >
                    Pengumuman
                  </HashLink>
                </div>
              </div>

              <div>
                <Link to="/profile" onClick={toggleMobileMenu}>
                  Profile
                </Link>
              </div>
              <div>
                <Link to="/info" onClick={toggleMobileMenu}>
                  Info
                </Link>
              </div>
              {/* ... */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
