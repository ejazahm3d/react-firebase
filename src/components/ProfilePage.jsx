import React, { useContext } from "react";
import { Flex, Text, Grid } from "@chakra-ui/core";
import UploadForm from "./UploadForm";
import { FirebaseAuthContext } from "../context/firebaseAuthContext";

const ProfilePage = () => {
  const user = useContext(FirebaseAuthContext);
  return (
    <div>
      <Flex justify="center" align="center" flexDir="column">
        <Text color="gray.600" fontSize="6xl">
          {user?.displayName}'s Pictures
        </Text>
        <UploadForm />
        <Grid>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Grid>
      </Flex>
    </div>
  );
};

export default ProfilePage;
