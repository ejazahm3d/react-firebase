import React, { useState } from "react";
import { Input, Text, Flex } from "@chakra-ui/core";
import ProgressBar from "./ProgressBar";
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

      <Flex
        my="1rem"
        justify="center"
        align="center"
        flexDir="column"
        width="100%"
      >
        {error && (
          <Text fontSize="xl" color="red.300">
            {error}
          </Text>
        )}

        {file && <Text fontSize="xl">{file.name}</Text>}
        {file && (
          <Flex justifySelf="flex-start" width="100%">
            <ProgressBar file={file} setFile={setFile} />
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default UploadForm;
