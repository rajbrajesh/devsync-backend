import React from "react";
import SummaryCard from "./SummaryCard";

/*
SummarySection Component

Purpose:
Displays all summary cards in a grid
*/

const SummarySection = () => {

 // Temporary static data
 // Later this will come from backend API
 const summaryData = [
   { title: "Total Problems", value: 120 },
   { title: "Easy", value: 50 },
   { title: "Medium", value: 40 },
   { title: "Hard", value: 30 },
 ];

 return (

   // Section container
   <div>

     {/* Section Title */}
     <h2>Overview</h2>

     {/* Cards container */}
     <div className="summary-grid">

       {/* Loop through summary data */}
       {summaryData.map((item, index) => (

         <SummaryCard
           key={index}
           title={item.title}
           value={item.value}
         />

       ))}

     </div>

   </div>
 );
};

export default SummarySection;
