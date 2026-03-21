import React, { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";
import { getTaskSummary } from "../../api/taskApi";

const SummarySection = () => {

  // State to store summary data
  const [summary, setSummary] = useState({
    total: 0,
  });

  // Fetch data when component loads
  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await getTaskSummary();

        setSummary(data);

      } catch (error) {
        console.error("Error fetching summary:", error);
      }
    };

    fetchData();

  }, []);

  return (
    <div>

      <h2>Overview</h2>

      <div className="summary-grid">

        <SummaryCard title="Total Problems" value={summary.total} />

      </div>

    </div>
  );
};

export default SummarySection;