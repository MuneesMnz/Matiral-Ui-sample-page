import { Box, Stack } from "@mui/material";
import React from "react";

const FlexAndGridsystem = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          bgcolor="lightblue"
          flex={1}
          p={2}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Sidebar
        </Box>
        <Box bgcolor="lightgreen" flex={4} p={2}>
          Feeds
        </Box>
        <Box
          bgcolor="lightgray"
          flex={2}
          p={2}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Rightbar
        </Box>
      </Stack>
    </Box>
  );
};

export default FlexAndGridsystem;
