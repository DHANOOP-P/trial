import { useLocation, useNavigate } from "react-router-dom";
import ServiceList from "../components/ServiceList";
import JobLists from "../components/JobList";
import BottomNavBar from "../components/BottomNavBar";
import Component4 from "../Components-dha/Component4";

export default function PageU33() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isJobs = pathname === "/pageu27";

  return (
    <div>
      <Component4
        theme="black"
        title={isJobs ? "Jobs" : "Services"}
        showFilter={!isJobs}
        showSearch={!isJobs}
        onBackClick={() => navigate(-1)}
      />

      {isJobs ? <JobLists /> : <ServiceList />}

      <BottomNavBar />
    </div>
  );
}
