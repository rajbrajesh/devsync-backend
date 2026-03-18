/**
 DashboardPage
 Landing page of DevSync
*/
import PlatformGrid from "../components/platform/PlatformGrid";
import SummarySection from "../components/analytics/SummarySection";
import LearningSection from "../components/learning/LearningSection";
import PlatformLinkSection from "../components/platform/PlatformLinkSection";


function DashboardPage(){

  return(
    <div>
    <SummarySection />
    <PlatformGrid />
    <LearningSection />
    <PlatformLinkSection />
    </div>
  )

}

export default DashboardPage