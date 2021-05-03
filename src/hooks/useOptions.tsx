import { firestore } from "App";
import { useCollectionData } from "react-firebase-hooks/firestore";

type Options = {
  benefits: Record<string, string>;
  mustHave: Record<string, string>;
  niceToHave: Record<string, string>;
  perksInOffice: Record<string, string>;
  workMethodology: Record<string, string>;
};

export type UseOptionsResult = {
  [k: string]: {
    value: string;
    label: string;
  }[];
} | null;

const useOptions = (): UseOptionsResult => {
  const offersRef = firestore.collection("options");

  const collection = useCollectionData<Options>(offersRef);

  if (collection[0]?.[0]) {
    return Object.fromEntries(
      Object.entries(collection[0]?.[0]).map(([key, value]) => {
        const arrayOfValues = Object.entries(value).map(([k, item]) => ({
          value: k,
          label: item,
        }));

        return [key, arrayOfValues];
      })
    );
  } else {
    return null;
  }
};

export default useOptions;
