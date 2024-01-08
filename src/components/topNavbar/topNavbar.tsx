import React, { useEffect, useState } from "react";
import callIcon from "../../assets/icon/Vector.svg";
import emailIcon from "../../assets/icon/email.svg";
import { homePageContent } from "../../service/remoteService";

export const TopNavbar = () => {
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

  if (isLoading || !content[0]) {
    return <div>Loading...</div>;
  }



  return (
    <div className="flex justify-between bg-primary text-white h-7 items-center ">
      <div className="flex ml-5">
        <div className="mr-5">
          <img src={callIcon} alt="callIcon" />
        </div>
        <div>{content[7].value}</div>
      </div>
      <div className="flex mr-5 items-center">
        <div className="mr-5 items-center">
          <img src={emailIcon} alt="callIcon" />
        </div>
        <div>{content[6].value}</div>
      </div>
    </div>
  );
};
