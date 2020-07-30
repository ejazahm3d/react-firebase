import React, { useContext } from "react";
import { Flex, Text } from "@chakra-ui/core";
import UploadForm from "./UploadForm";
import { FirebaseAuthContext } from "../context/firebaseAuthContext";
import ImageGrid from "./ImageGrid";

const ProfilePage = () => {
  const user = useContext(FirebaseAuthContext);
  return (
    <div>
      <Flex justify="center" align="center" flexDir="column" width="100%">
        <Text color="gray.600" fontSize="6xl">
          {user?.displayName}'s Pictures
        </Text>
        <UploadForm />
        <ImageGrid />
      </Flex>
    </div>
  );
};

export default ProfilePage;
