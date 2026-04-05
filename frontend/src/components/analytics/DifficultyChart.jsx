import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

/**
 * DifficultyChart Component
 * Displays difficulty distribution in Pie Chart
 */
function DifficultyChart({ summary }) {

  // Convert backend data → chart format
  const data = [
    { name: "Easy", value: summary.easy },
    { name: "Medium", value: summary.medium },
    { name: "Hard", value: summary.hard }
  ];

  // Colors for each section
  const COLORS = ["#4CAF50", "#FFC107", "#F44336"];

  return (
    <div>
      <h3>Difficulty Distribution</h3>

      <PieChart width={300} height={300}>

        <Pie
          data={data}
          cx="50%"  // center X
          cy="50%"  // center Y
          outerRadius={100} // size
          dataKey="value"   // value field
        >
          {
            data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))
          }
        </Pie>

        {/* Tooltip shows data on hover */}
        <Tooltip />

        {/* Legend shows labels */}
        <Legend />

      </PieChart>
    </div>
  );
}

export default DifficultyChart;