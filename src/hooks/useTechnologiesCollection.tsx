import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "App";

type Technologies = {
  name: string[];
};

const useTechnologiesCollection = () => {
  const offersRef = firestore.collection("technologies");

  return useCollectionData<Technologies>(offersRef);
};

export default useTechnologiesCollection;
