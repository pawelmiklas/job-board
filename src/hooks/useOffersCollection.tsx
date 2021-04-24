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
  seniority: string[];
  employmentType: string[];
};

type Filter = {
  key: keyof Offers;
  operator: WhereFilterOperator;
  value: any;
};

type OfferCollectionProps = {
  limit?: number;
  orderBy?: keyof Offers;
  filterBy?: Filter[];
};

const useOffersCollection = ({
  limit = 5,
  orderBy = "createdAt",
  filterBy,
}: OfferCollectionProps) => {
  const offersRef = firestore.collection("offers");
  let query = offersRef.orderBy(orderBy).limit(limit);

  if (filterBy?.length) {
    filterBy.forEach(({ key, operator, value }) => {
      query = query.where(key, operator, value);
    });
  }

  return useCollectionData<Offers>(query, { idField: "id" });
};

export default useOffersCollection;
