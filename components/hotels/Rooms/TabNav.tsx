"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TabPanel from "./TabPanel";
import AddRoom from "./AddRoom";
import AddCategory from "./AddCategory";
import RoomRate from "./RoomRate";
// import type { RoomType } from "@/lib/definitions";
import { RoomType } from "@prisma/client";
import { useState } from "react";

function tabProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function TabNav({
  id,
  roomTypes,
}: {
  id: string;
  roomTypes: RoomType[];
}) {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab disableRipple label="Add room" {...tabProps(0)} />
          <Tab disableRipple label="Room category" {...tabProps(1)} />
          <Tab disableRipple label="Rate" {...tabProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AddRoom id={id} roomTypes={roomTypes} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddCategory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RoomRate roomTypes={roomTypes} />
      </TabPanel>
    </Box>
  );
}
