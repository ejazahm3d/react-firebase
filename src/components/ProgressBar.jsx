import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { Box } from "@chakra-ui/core";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Box height="5px" bg="blue.600" mt="20px" width={`${progress}%`}></Box>
  );
};

export default ProgressBar;
