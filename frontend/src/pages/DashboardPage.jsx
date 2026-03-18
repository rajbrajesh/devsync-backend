/**
 DashboardPage
 Landing page of DevSync
*/
import PlatformGrid from "../components/platform/PlatformGrid";
import SummarySection from "../components/analytics/SummarySection";
import LearningSection from "../components/learning/LearningSection";

function DashboardPage(){

  return(
    <div>
    <SummarySection />
    <PlatformGrid />
    <LearningSection />
    </div>
  )

}

export default DashboardPage