import { useState, useEffect, useContext } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import { FirebaseAuthContext } from "../context/firebaseAuthContext";

const useStorage = (file) => {
  const user = useContext(FirebaseAuthContext);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    //  references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection(
      `users/${user.uid}/images`
    );
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({
          url,
          createdAt,
        });
        setUrl(url);
      }
    );
  }, [file, user]);

  return {
    progress,
    url,
    error,
  };
};

export default useStorage;
