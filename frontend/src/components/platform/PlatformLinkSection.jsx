import React from "react";
import PlatformLinkCard from "./PlatformLinkCard";

/*
PlatformLinkSection Component

Purpose:
Displays all external platform links
*/

const PlatformLinkSection = () => {

 // Static data (later dynamic)
 const links = [
   {
     name: "GitHub",
     url: "https://github.com/",
   },
   {
     name: "LinkedIn",
     url: "https://linkedin.com/",
   },
   {
     name: "Portfolio",
     url: "#",
   },
   {
     name: "Resume",
     url: "#",
   },
 ];

 return (

   <div>

     {/* Section Title */}
     <h2>Other Platforms</h2>

     {/* Grid */}
     <div className="platform-link-grid">

       {links.map((item, index) => (

         <PlatformLinkCard
           key={index}
           name={item.name}
           url={item.url}
         />

       ))}

     </div>

   </div>
 );
};

export default PlatformLinkSection;
