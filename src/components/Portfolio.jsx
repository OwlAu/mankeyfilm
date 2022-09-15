import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Data from "../data.json";
import Masonry from "@mui/lab/Masonry";

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="header">- PORTFOLIO -</div>
      <div className="horizontalLine"></div>
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Wedding</Tab>
            <Tab>Corporate</Tab>
            <Tab>Event</Tab>
            <Tab>Ads</Tab>
            <Tab>Entertainment</Tab>
          </TabList>
          {/* All panel */}
          <TabPanel>
            <div className="row">
              <div className="portfolio-items">
                <Masonry
                  columns={{ xs: 1, md: 2, lg: 3 }}
                  spacing={0}
                  className="masonry-project"
                >
                  {Data.map(({ thumb }, index) => (
                    <img
                      src={thumb}
                      style={{ width: "50%", display: "block" }}
                      //className="img-responsive"
                      alt={index}
                    />
                  ))}
                </Masonry>
              </div>
            </div>
          </TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
          <TabPanel>4</TabPanel>
          <TabPanel>5</TabPanel>
          <TabPanel>6</TabPanel>
        </Tabs>
      </div>
    </section>
  );
};
