import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import logo from "../../assets/icon/bpkkLogo.png";
import { HashLink } from "react-router-hash-link";
export const NavbarTemp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();
  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure();

  return (
    <div>
      <div className=" text-primary bg-white md:my-0 ">
        <div className="flex items-center justify-center py-2">
          <div className="flex h-20 items-center">
            <a href="/">
              <img src={logo} alt="logo" className="h-16 items-center" />
            </a>
          </div>
          <div className="">
            <Menu isOpen={isOpen2} onOpen={onOpen2} onClose={onClose2}>
              <Box onMouseEnter={onOpen2} onMouseLeave={onClose2}>
                <MenuButton
                  mx={1}
                  py={[1, 2, 2]}
                  px={10}
                  borderRadius={5}
                  _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                  aria-label="Courses"
                  fontWeight="normal"
                >
                  Homepage {isOpen2 ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </MenuButton>
                <MenuList my={-2}>
                  <MenuItem p={3}>
                    <HashLink id="dropdown-item" to="/#section-3">
                      Berita TKM Pemula
                    </HashLink>
                  </MenuItem>
                  <MenuItem p={3} textAlign={"center"}>
                    <HashLink id="dropdown-item" to="/#section-4">
                      Berita Kemnaker
                    </HashLink>
                  </MenuItem>
                  <MenuItem p={3}>
                    <HashLink id="dropdown-item" to="/#section-5">
                      Galeri Terbaru
                    </HashLink>
                  </MenuItem>
                  <MenuItem p={3}>
                    <HashLink id="dropdown-item" to="/#section-6">
                      Pengumuman
                    </HashLink>
                  </MenuItem>
                </MenuList>
              </Box>
            </Menu>
          </div>
          <div className="">
            <Menu isOpen={isOpen3} onOpen={onOpen3} onClose={onClose3}>
              <Box onMouseEnter={onOpen3} onMouseLeave={onClose3}>
                <MenuButton
                  mx={1}
                  py={[1, 2, 2]}
                  px={10}
                  borderRadius={5}
                  _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                  aria-label="Courses"
                  fontWeight="normal"
                >
                  Profile {isOpen3 ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </MenuButton>
                <MenuList my={-2} px={-2}>
                  <MenuItem>
                    {" "}
                    <a id="dropdown-item" href="/profile">
                      Sejarah{" "}
                    </a>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <a id="dropdown-item" href="/profile/tugas-dan-fungsi">
                      Tugas dan Fungsi
                    </a>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <a id="dropdown-item" href="/profile/wilayah-kerja">
                      Wilayah Kerja{" "}
                    </a>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <a id="dropdown-item" href="#">
                      Profil Pimpinan Balai
                    </a>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <a id="dropdown-item" href="/profile/struktur">
                      Struktur Organisasi
                    </a>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <a id="dropdown-item" href="#">
                      Profil Pimpinan Balai
                    </a>
                  </MenuItem>
                </MenuList>
              </Box>
            </Menu>
          </div>
          <div className="">
            <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
              <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuButton
                  mx={1}
                  py={[1, 2, 2]}
                  px={10}
                  borderRadius={5}
                  _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                  aria-label="Courses"
                  fontWeight="normal"
                >
                  Info {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </MenuButton>
                <MenuList my={-2} px={-2}>
                  <MenuItem>Berita</MenuItem>
                  <MenuItem>Pengumuman</MenuItem>
                </MenuList>
              </Box>
            </Menu>
          </div>
          <div className="">
            <Menu isOpen={isOpen4} onOpen={onOpen4} onClose={onClose4}>
              <Box onMouseEnter={onOpen4} onMouseLeave={onClose4}>
                <MenuButton
                  mx={1}
                  py={[1, 2, 2]}
                  px={10}
                  borderRadius={5}
                  _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                  aria-label="Courses"
                  fontWeight="normal"
                >
                  Galeri TKM Pemula 
                  {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
                </MenuButton>
                {/* <MenuList my={-2} px={-2}>
                  <MenuItem>Berita</MenuItem>
                  <MenuItem>Pengumuman</MenuItem>
                </MenuList> */}
              </Box>
            </Menu>
          </div>
          <div className="">
            <Menu isOpen={isOpen4} onOpen={onOpen4} onClose={onClose4}>
              <Box onMouseEnter={onOpen4} onMouseLeave={onClose4}>
                <MenuButton
                  mx={1}
                  py={[1, 2, 2]}
                  px={10}
                  borderRadius={5}
                  _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                  aria-label="Courses"
                  fontWeight="normal"
                >
                 Layanan
                  {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
                </MenuButton>
                {/* <MenuList my={-2} px={-2}>
                  <MenuItem>Berita</MenuItem>
                  <MenuItem>Pengumuman</MenuItem>
                </MenuList> */}
              </Box>
            </Menu>
          </div>
          <div className="">
            <Menu isOpen={isOpen4} onOpen={onOpen4} onClose={onClose4}>
              <Box onMouseEnter={onOpen4} onMouseLeave={onClose4}>
                <MenuButton
                  mx={1}
                  py={[1, 2, 2]}
                  px={10}
                  borderRadius={5}
                  _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                  aria-label="Courses"
                  fontWeight="normal"
                >
                  Kerjasama
                  {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
                </MenuButton>
                {/* <MenuList my={-2} px={-2}>
                  <MenuItem>Berita</MenuItem>
                  <MenuItem>Pengumuman</MenuItem>
                </MenuList> */}
              </Box>
            </Menu>
          </div>
          <div className="">
            <Menu isOpen={isOpen4} onOpen={onOpen4} onClose={onClose4}>
              <Box onMouseEnter={onOpen4} onMouseLeave={onClose4}>
                <MenuButton
                  mx={1}
                  py={[1, 2, 2]}
                  px={10}
                  borderRadius={5}
                  _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                  aria-label="Courses"
                  fontWeight="normal"
                >
                  Download
                  {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
                </MenuButton>
                {/* <MenuList my={-2} px={-2}>
                  <MenuItem>Berita</MenuItem>
                  <MenuItem>Pengumuman</MenuItem>
                </MenuList> */}
              </Box>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};
