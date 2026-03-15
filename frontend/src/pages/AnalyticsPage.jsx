import React, { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"

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

 /*
 State to store chart data
 */
 const [chartData,setChartData] = useState({})

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

     })

 },[])

 return(

   <div style={{padding:"20px"}}>

     {/* Page title */}
     <h2>Task Analytics</h2>

     {/* Chart container */}

     <div style={{width:"600px"}}>

       {
         chartData.datasets
         ? <Bar data={chartData}/>
         : <p>Loading chart...</p>
       }

     </div>

   </div>

 )

}

export default AnalyticsPage
