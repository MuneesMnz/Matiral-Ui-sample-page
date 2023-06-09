import { Box, Stack } from "@mui/material";
import Feeds from "./components/Feeds";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar  />
        <Feeds />
        <Rightbar />
      </Stack>
      <AddPost/>
    </Box>
    // <Box>
    //   {/* <FlexAndGridsystem/> */}
    // </Box>
  );
};

export default App;
