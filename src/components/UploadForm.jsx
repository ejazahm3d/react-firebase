import React, { useState } from "react";
import { Input, Box, Text } from "@chakra-ui/core";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please Select an image file (png or jpeg)");
    }
  };
  return (
    <>
      <Input p="0.2rem" type="file" onChange={changeHandler}></Input>

      <Box my="1rem">
        {error && (
          <Text fontSize="xl" color="red.300">
            {error}
          </Text>
        )}

        {file && <Text fontSize="xl">{file.name}</Text>}
      </Box>
    </>
  );
};

export default UploadForm;
