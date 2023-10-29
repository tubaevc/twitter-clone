import { Link } from "react-router-dom";
import { topics } from "../../../../utils/consts";
import Topic from "./topic";
import SidebarSection from "../../../../components/sidebar-section";
export default function Topics() {
  return (
    <SidebarSection title="Trends for you" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </SidebarSection>
  );
}
