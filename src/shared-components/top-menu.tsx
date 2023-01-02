import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function TopMenu() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          orientation="horizontal"
          centered
        >
          <Tab
            value="one"
            label="Search"
            component={Link}
            to="/search"
          />
          <Tab value="two" label="Add" component={Link} to="/add" />
          <Tab value="three" label="Edit" component={Link} to="/edit" />
        </Tabs>
      </Box>
    </>
  );
}
