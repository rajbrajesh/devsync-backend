// Import React
import React from "react";

/*
LearningCard Component

Purpose:
Displays one learning category card

Props:
title → category name (Frontend, Backend etc.)
topics → list of technologies
*/

const LearningCard = ({ title, topics }) => {
 return (

   // Card container
   <div className="learning-card">

     {/* Card Title */}
     <h3>{title}</h3>

     {/* Topics list */}
     <p>{topics}</p>

   </div>
 );
};

export default LearningCard;