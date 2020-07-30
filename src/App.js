import React from "react";
import { ThemeProvider, CSSReset, Text, Flex, Grid } from "@chakra-ui/core";
import Layout from "./components/Layout/Layout";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Layout>
        <Flex justify="center" align="center" flexDir="column">
          <Text color="gray.600" fontSize="6xl">
            Your Pictures
          </Text>
          <UploadForm />
          <Grid>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Grid>
        </Flex>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
