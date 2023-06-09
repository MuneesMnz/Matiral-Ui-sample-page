import { Box, Stack, createTheme } from "@mui/material";
import Feeds from "./components/Feeds";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
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

