import { Box, Stack, createTheme } from "@mui/material";
import Feeds from "./components/Feeds";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { useTheme } from "./Context/ThemeContext";

const App = () => {
  // const [mode, setMode] = useState("light");
  const theme=useTheme()
  const darkTheme = createTheme({
    palette: {
      mode:theme?"light":'dark' ,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar  />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <Feeds />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
    // <Box>
    //   {/* <FlexAndGridsystem/> */}
    // </Box>
  );
};

export default App;

