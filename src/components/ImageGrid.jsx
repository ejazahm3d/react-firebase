import React, { useContext } from "react";
import { Grid, Image } from "@chakra-ui/core";
import useFirestore from "../hooks/useFirestore";
import { FirebaseAuthContext } from "../context/firebaseAuthContext";

const ImageGrid = () => {
  const user = useContext(FirebaseAuthContext);

  const { docs } = useFirestore(`users/${user.uid}/images`);

  return (
    <Grid templateColumns="repeat(minmax(auto-fit, 400px), 1fr)" gap={6}>
      {docs.map((doc) => (
        <Image src={doc.url} width="400px" />
      ))}
    </Grid>
  );
};

export default ImageGrid;
