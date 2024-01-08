import React, { useEffect, useState } from "react";
import heroImage from "../../assets/heroImage.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { homePageContent } from "../../service/remoteService";

export const Banner = () => {
  const [content, setContent] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getContent = async () => {
    const response = await homePageContent();
    setContent(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getContent();
  }, []);

  const bannerStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  if (isLoading || !content[2]) {
    return <div>Loading...</div>;
  }

  const images = [content[2].value];

  const imagesDummy = [
   "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
  ]

  return (
    <div className="h-98 object-contain">
      <Carousel
        autoPlay={true}
        swipeable={true}
        interval={2000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {imagesDummy.map((image, index) => (
          <div key={index}>
            <img src={image} alt={content[2].value} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
