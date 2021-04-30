import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "App";

type WhereFilterOperator =
  | "<"
  | "<="
  | "=="
  | "!="
  | ">="
  | ">"
  | "array-contains"
  | "in"
  | "array-contains-any"
  | "not-in";

export type Offer = {
  workMethodology: string[];
  benefits: string[];
  company: string;
  companySize: string;
  createdAt: { seconds: number; nanoseconds: number };
  description: string;
  id: string;
  languages: string[];
  location: string;
  mustHave: string[];
  niceToHave: string[];
  offerDetails: object;
  perksInOffice: string[];
  salaryFrom: number;
  salaryTo: number;
  title: string;
  seniority: string[];
  employmentType: string[];
  userId: string;
};

export type Filter = {
  key: keyof Offer;
  operator: WhereFilterOperator;
  value: any;
};

type OfferCollectionProps = {
  limit?: number;
  orderBy?: keyof Offer;
  filterBy?: Filter[];
};

const useOffersCollection = ({
  limit = 5,
  orderBy = "createdAt",
  filterBy = [],
}: OfferCollectionProps) => {
  const offersRef = firestore.collection("offers");

  let query = offersRef.limit(limit);

  filterBy.forEach(({ key, operator, value }) => {
    query = query.where(key, operator, value);
  });

  // firestore is not handling ordering with where clause
  // query = query.orderBy(orderBy);

  return useCollectionData<Offer>(query, { idField: "id" });
};

export default useOffersCollection;
