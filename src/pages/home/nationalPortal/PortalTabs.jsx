"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllEServices from "./TabDetails/AllEServices";
import MobileSerVices from "./TabDetails/MobileServices";
import NewServices from "./TabDetails/NewServices";
import OfficeServices from "./TabDetails/OfficeSrvices";
import PopularServices from "./TabDetails/PopularServices";
const PortalTabs = () => {
  return (
    <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  rounded-sm">
      <Tabs>
        <TabList className="bg-violet-50 border">
          <Tab>জনপ্রিয় সেবা</Tab>
          <Tab>নতুন সেবা</Tab>
          <Tab>মোবাইল সেবা</Tab>
          <Tab>দপ্তর ভিত্তিক সেবা</Tab>
          <Tab>সকল ই-সেবা</Tab>
        </TabList>

        <TabPanel>
          <PopularServices />
        </TabPanel>
        <TabPanel>
          <NewServices />
        </TabPanel>
        <TabPanel>
          <MobileSerVices />
        </TabPanel>
        <TabPanel>
          <OfficeServices />
        </TabPanel>
        <TabPanel>
          <AllEServices />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PortalTabs;
