// React library import
// React is required to create components
import React from "react";

/*
PlatformCard Component

Purpose:
This component displays a single coding platform card.

Example:
LeetCode Card
Codeforces Card

Props (data passed to component):
name → platform name
description → short info
*/

const PlatformCard = ({ name, description }) => {
  return (
    // Card container
    // This is the outer box for each platform
    <div className="platform-card">

      {/* Platform Name */}
      {/* h3 is used for section headings */}
      <h3>{name}</h3>

      {/* Platform description */}
      {/* p tag used for paragraph text */}
      <p>{description}</p>

      {/* Future stats section */}
      {/* Here later we will display stats fetched from API */}
      <div className="platform-stats">

        {/* Example stats placeholders */}
        <p><strong>Rank:</strong> --</p>
        <p><strong>Problems Solved:</strong> --</p>

      </div>

    </div>
  );
};

// Export component so it can be used in other files
export default PlatformCard;