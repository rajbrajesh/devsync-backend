import React from "react";
import LearningCard from "./LearningCard";

/*
LearningSection Component

Purpose:
Displays all learning cards
*/

const LearningSection = () => {

 // Static data (later from backend)
 const learningData = [
   {
     title: "Programming",
     topics: "Java, Python, C++",
   },
   {
     title: "Database",
     topics: "MongoDB, MySQL",
   },
   {
     title: "Frontend",
     topics: "HTML, CSS, JavaScript",
   },
   {
     title: "Backend",
     topics: "Spring Boot, Node.js",
   },
   {
     title: "ML & Data Science",
     topics: "Python, R, TensorFlow",
   },
 ];

 return (

   // Section container
   <div>

     {/* Section Title */}
     <h2>Learning Material</h2>

     {/* Grid container */}
     <div className="learning-grid">

       {/* Loop through data */}
       {learningData.map((item, index) => (

         <LearningCard
           key={index}
           title={item.title}
           topics={item.topics}
         />

       ))}

     </div>

   </div>
 );
};

export default LearningSection;