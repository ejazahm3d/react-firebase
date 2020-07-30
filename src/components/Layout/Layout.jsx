import React, { useContext } from "react";
import { Flex, Text, Button } from "@chakra-ui/core";
import { FirebaseAuthContext } from "../../context/firebaseAuthContext";
import { auth } from "../../firebase/config";

const Layout = ({ children }) => {
  const user = useContext(FirebaseAuthContext);

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        p="1.5rem 2rem"
        bg="blue.100"
      >
        <Text
          fontSize="4xl"
          color="gray.600"
          fontWeight="bold"
          cursor="pointer"
        >
          React Firebase
        </Text>
        <Flex>
          {user && (
            <Button
              variantColor="red"
              onClick={async () => await auth.signOut()}
            >
              Sign out
            </Button>
          )}
        </Flex>
      </Flex>
      <Flex justify="center" align="center" flexDirection="column">
        {children}
      </Flex>
    </>
  );
};

export default Layout;
