import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";

export default function Home() {
  return (
    <>
      <Tab activeTab="for-you">
        <StickyHeader title="Anasayfa">
          <Tab.Items>
            <Tab.Item>For you</Tab.Item>
            <Tab.Item>Following</Tab.Item>
          </Tab.Items>
        </StickyHeader>
        <Tab.Content id="for-you">1. content</Tab.Content>
        <Tab.Content id="followings">2. content</Tab.Content>
      </Tab>
    </>
  );
}
