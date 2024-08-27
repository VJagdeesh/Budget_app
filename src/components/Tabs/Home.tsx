import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from "../Table/CustomTable";
import axios from "axios";
const Home: React.FC = () => {
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState();
  useEffect(() => {
    async function fetchData() {
      const content = await axios.all([
        axios.get("http://localhost:8080/credits"),
        axios.get("http://localhost:8080/debits"),
      ]);
      setCredits(content[0].data);
      setDebits(content[1].data);
    }
    fetchData();
  }, []);

  return (
    <Tabs variant="soft-rounded" colorScheme="green" size="lg" isFitted>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div style={{marginTop:"15px"}}>
            <h3>CREDITS</h3>
            <div style={{marginTop:"15px"}}>
            <CustomTable data={credits} />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{marginTop:"15px"}}>
            <h3>DEBITS</h3>
            <div style={{marginTop:"15px"}}>
            <CustomTable data={debits} />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Home;
