// Import React
// Required to create component
import React from "react";

/*
SummaryCard Component

Purpose:
Displays a single analytics card (Total / Easy / Medium / Hard)

Props:
title → card title
value → number to display
*/

const SummaryCard = ({ title, value }) => {
 return (

   // Main card container
   <div className="summary-card">

     {/* Title of the card */}
     {/* h4 used for smaller headings */}
     <h4>{title}</h4>

     {/* Value display */}
     {/* h2 used to highlight main number */}
     <h2>{value}</h2>

   </div>
 );
};

// Export component
export default SummaryCard;