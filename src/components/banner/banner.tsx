import React, { useEffect, useState } from "react";
import heroImage from "../../assets/heroImage.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { loadCarouselImage } from "../../service/remoteService";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export const Banner = () => {
  const [content, setContent] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = "http://127.0.0.1:3333/";
  const getContent = async () => {
    const response = await loadCarouselImage();
    setContent(response.data.data);
    console.log(response.data.data);
    console.log('ini baneer');

    setIsLoading(false);
  };
  useEffect(() => {
    getContent();

  }, []);

  // const bannerStyle = {
  //   backgroundImage: `url(${heroImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };

  // if (isLoading || !content[2]) {
  //   return <div>Loading...</div>;
  // }

  const imagesDummy = [
    "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    
  ];



  return (

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={true}
        showArrows={true}
        
      >
        
        {content.map((item: any, index: number) => (
          <div key={index}>
            <img src={`${baseUrl}${item.file_path}`} alt={item.file_path} className="h-96 object-cover" />
          </div>
        ))}
      </Carousel>

  );
};
