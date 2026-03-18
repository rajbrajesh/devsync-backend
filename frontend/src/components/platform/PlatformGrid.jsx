// Import React
import React from "react";

// Import PlatformCard component
// This allows us to reuse card UI multiple times
import PlatformCard from "./PlatformCard";

/*
PlatformGrid Component

Purpose:
Displays multiple platform cards in a grid layout
*/

const PlatformGrid = () => {

  // Temporary platform data
  // Later this will come from backend API
  const platforms = [
    {
      name: "LeetCode",
      description: "Track coding problems solved and ranking",
    },
    {
      name: "Codeforces",
      description: "Competitive programming contest stats",
    },
    {
      name: "GeeksforGeeks",
      description: "Coding practice and article progress",
    },
    {
      name: "HackerRank",
      description: "Programming challenges and skill certifications",
    },
  ];

  return (

    // Section container
    <div>

      {/* Section Title */}
      <h2>Platforms</h2>

      {/* Grid container */}
      <div className="platform-grid">

        {/* Map through platforms array */}
        {/* map() loops through array and creates cards */}
        {platforms.map((platform, index) => (

          <PlatformCard
            key={index}
            name={platform.name}
            description={platform.description}
          />

        ))}

      </div>

    </div>
  );
};

export default PlatformGrid;