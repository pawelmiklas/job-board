import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "App";

export type Offers = {
  workMethodology: string[];
  benefits: string[];
  company: string;
  companySize: string;
  createdAt: { seconds: number; nanoseconds: number };
  description: string;
  id: string;
  languages: string[];
  locations: string[];
  mustHave: string[];
  niceToHave: string[];
  offerDetails: string;
  perksInOffice: string[];
  salaryFrom: number;
  salaryTo: number;
  title: string;
};

type OfferCollectionProps = {
  limit?: number;
};

const useOffersCollection = ({ limit = 5 }: OfferCollectionProps) => {
  const offersRef = firestore.collection("offers");
  const query = offersRef.orderBy("createdAt").limit(limit);

  return useCollectionData<Offers>(query, { idField: "id" });
};

export default useOffersCollection;
