"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const PortalTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>জনপ্রিয় সেবা</Tab>
          <Tab>নতুন সেবা</Tab>
          <Tab>মোবাইল সেবা</Tab>
          <Tab>দপ্তর ভিত্তিক সেবা</Tab>
          <Tab>সকল ই-সেবা</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PortalTabs;
