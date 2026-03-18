import React from "react";

/*
PlatformLinkCard Component

Purpose:
Displays external platform links (GitHub, LinkedIn etc.)

Props:
name → platform name
url → link to open
*/

const PlatformLinkCard = ({ name, url }) => {

 // Function to open link in new tab
 const handleClick = () => {
   window.open(url, "_blank");
 };

 return (

   // Card container
   <div className="platform-link-card" onClick={handleClick}>

     {/* Platform Name */}
     <h3>{name}</h3>

     {/* Hint text */}
     <p>Click to open</p>

   </div>
 );
};

export default PlatformLinkCard;
