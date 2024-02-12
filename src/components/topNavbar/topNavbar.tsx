import React, { useEffect, useState } from "react";
import callIcon from "../../assets/icon/Vector.svg";
import emailIcon from "../../assets/icon/email.svg";
import { loadAllCompanyProfile } from "../../service/remoteService";

export const TopNavbar = () => {
  const [content, setContent] = useState<any>([]);
  const [nomorHp , setNomorHp] = useState<any>([]);
  const [email , setEmail] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getContent = async () => {
    const response = await loadAllCompanyProfile();
    setContent(response);
    setNomorHp(response.data[8].item_value);
    setEmail(response.data[7].item_value);
    setIsLoading(false);
  };

  useEffect(() => {
    getContent();
  }, []);

  // if (isLoading || !content[0]) {
  //   return <div>Loading...</div>;
  // }



  return (
    <div className="flex justify-between bg-primary text-white h-10 items-center block">
      <div className="flex ml-5">
        <div className="mr-5">
          <img src={callIcon} alt="callIcon" />
        </div>
        {/* <div>{content[7].value}</div> */}
        <div>{nomorHp}</div>
      </div>
      <div className="flex mr-5 items-center">
        <div className="mr-5 items-center">
          <img src={emailIcon} alt="callIcon" />
        </div>
        <div>{email}</div>
        {/* <div>{content[6].value}</div> */}
      </div>
    </div>
  );
};
