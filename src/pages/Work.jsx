import Work from "@/components/Work/Work";
import { developmentProjects } from "@/data/developmentProjects";

const WorkPage = () => {
  return <Work projects={developmentProjects} />;
};

export default WorkPage;