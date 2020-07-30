import React from "react";
import { Text, Button, Box } from "@chakra-ui/core";
import { signInWithGoogle } from "../firebase/config";

const SignIn = () => {
  return (
    <div className="mt-8">
      <Text fontSize="3xl" mb={2} textAlign="center" fontWeight="bold">
        Sign In
      </Text>
      <Box>
        <Button onClick={() => signInWithGoogle()} variantColor="red">
          Sign in with Google
        </Button>
      </Box>
    </div>
  );
};
export default SignIn;
