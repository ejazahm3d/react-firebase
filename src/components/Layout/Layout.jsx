import React from "react";
import { Flex, Text } from "@chakra-ui/core";

const Layout = ({ children }) => {
  return (
    <>
      <Flex align="center" p="1.5rem 2rem" bg="blue.100">
        <Text fontSize="4xl" color="gray.600" fontWeight="bold">
          React Firebase
        </Text>
      </Flex>
      <Flex justify="center" align="center" flexDirection="column">
        {children}
      </Flex>
    </>
  );
};

export default Layout;
