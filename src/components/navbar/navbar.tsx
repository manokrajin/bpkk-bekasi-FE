import { useEffect, useState } from "react";

export const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const useScreenSize = () => {
        const [screenSize, setScreenSize] = useState({
          width: window.innerWidth,
          height: window.innerHeight,
        });

       
      
        useEffect(() => {
          const handleResize = () => {
            setScreenSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
            console.log(screenSize);
          };
      
          window.addEventListener('resize', handleResize);
      
          // Clean up the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, [screenSize]);
      
        return screenSize;
      };


      return(
        <div>{screenWidth}</div>
      )

   
  
}