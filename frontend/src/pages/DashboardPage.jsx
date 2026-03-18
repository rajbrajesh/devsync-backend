/**
 DashboardPage
 Landing page of DevSync
*/
import PlatformGrid from "../components/platform/PlatformGrid";
import SummarySection from "../components/analytics/SummarySection";

function DashboardPage(){

  return(
    <div>
    <SummarySection />
    <PlatformGrid />
    </div>
  )

}

export default DashboardPage