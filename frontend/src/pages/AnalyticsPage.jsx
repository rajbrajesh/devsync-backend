import React, { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import DifficultyChart from "../components/analytics/DifficultyChart";
import { getTaskSummary } from "../api/taskApi";

/*
ChartJS imports

These are required for Chart.js charts to work
*/
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
} from "chart.js"

/*
Register chart components
Without registering Chart.js will throw errors
*/
ChartJS.register(
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
)

/*
AnalyticsPage Component
Shows statistics related to tasks
*/

function AnalyticsPage(){

  const [summary, setSummary] = useState({
    easy: 0,
    medium: 0,
    hard: 0
  });

 /*
 State to store chart data
 */
 const [chartData,setChartData] = useState({})

 // total number of tasks
const [totalTasks,setTotalTasks] = useState(0)

// number of unique platforms
const [platformCount,setPlatformCount] = useState(0)

// latest task title
const [latestTask,setLatestTask] = useState("")


 /*
 Fetch tasks from backend
 Then calculate platform distribution
 */

 useEffect(()=>{

   fetch("http://localhost:8080/api/tasks")
     .then(res=>res.json())
     .then(data=>{

       /*
       Example data received

       [
         {id:1,title:"Problem",platform:"Leetcode"},
         {id:2,title:"Problem",platform:"Codechef"}
       ]
       */

       const platformCount = {}

       /*
       Count tasks per platform
       */

       data.forEach(task => {

         const platform = task.platform

         if(platformCount[platform]){

           platformCount[platform]++

         }else{

           platformCount[platform] = 1

         }

       })

       /* total number of tasks */
        setTotalTasks(data.length)

      // platform distribution object
        const platformMap = {}

      data.forEach(task => {
        if(platformMap[task.platform]){
          platformMap[task.platform]++
        }else{
          platformMap[task.platform] = 1
       }
      })

        // number of unique platforms
      setPlatformCount(Object.keys(platformMap).length)

        // latest task
      if(data.length > 0){
        setLatestTask(data[data.length - 1].title)
      }

       /*
       Prepare chart data
       */

       setChartData({

         labels: Object.keys(platformCount),

         datasets:[
           {
             label:"Tasks per Platform",
             data:Object.values(platformCount),
             backgroundColor:"rgba(54,162,235,0.6)"
           }
         ]

       })

     });
     const fetchSummary = async () => {
    try {
      const data = await getTaskSummary();
      setSummary(data);
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  fetchSummary();

 },[])

 return(

   <div style={{padding:"20px"}}>

     {/* Page title */}
     <h2>Task Analytics</h2>
     {/* Summary Cards */}

      <div style={{
      display:"flex",
      gap:"20px",
      marginBottom:"30px"
      }}>

      {/* Total Tasks Card */}
      <div style={{
        background:"#f4f4f4",
        padding:"20px",
        borderRadius:"8px",
        width:"150px",
        color:"black"
      }}>
        <h4>Total Tasks</h4>
        <p>{totalTasks}</p>
      </div>

      {/* Platforms Card */}
      <div style={{
        background:"#f4f4f4",
        padding:"20px",
        borderRadius:"8px",
        width:"150px",
        color:"black"
      }}>
        <h4>Platforms</h4>
        <p>{platformCount}</p>
      </div>

      {/* Latest Task Card */}
      <div style={{
        background:"#f4f4f4",
        padding:"20px",
        borderRadius:"8px",
        width:"200px",
        color:"black"
      }}>
        <h4>Latest Task</h4>
        <p>{latestTask}</p>
      </div>

      </div>


     {/* Chart container */}

     <div style={{width:"600px"}}>

       {
         chartData.datasets
         ? <Bar data={chartData}/>
         : <p>Loading chart...</p>
       }

     </div>

     {/* Difficulty Pie Chart */}

      <div style={{ width: "400px", marginTop: "40px" }}>
        <DifficultyChart summary={summary} />
      </div>

   </div>

 )

}

export default AnalyticsPage
