import { OptionsShape } from "./OfferAddEdit";
import { Offer as OfferType } from "hooks/useOffersCollection";
import { UseOptionsResult } from "hooks/useOptions";

export type OfferAddEditForm = {
  title: string;
  company: string;
  companySize: string;
  recruitmentLanguages: string;
  employmentType: string;
  earnings: string;
  description: string;
  start: string;
  contractDuration: string;
  jobProfile: string;
  location: string;
  seniority: string;
  other: string[];
  mustHave: OptionsShape[];
  niceToHave: OptionsShape[];
  perks: OptionsShape[];
  benefits: OptionsShape[];
  workMethodology: OptionsShape[];
};

const mapValues = (values: OptionsShape[]) => values.map(({ value }) => value);

const mapInitialValues = (
  data: OfferType | undefined,
  options: UseOptionsResult
): OfferAddEditForm => {
  const other = [];

  if (data?.offerDetails.flexibleHours) {
    other.push("flexibleHours");
  }

  if (data?.offerDetails.remotePossible) {
    other.push("remotePossible");
  }

  return {
    ...intersectionOptions(options, data),
    title: data?.title || "",
    company: data?.company || "",
    companySize: data?.companySize || "",
    recruitmentLanguages: data?.language || "",
    employmentType: data?.employmentType || "",
    earnings: String(data?.salaryFrom || ""),
    description: data?.description || "",
    start: data?.offerDetails.start || "",
    contractDuration: data?.offerDetails.contractDuration || "",
    jobProfile: data?.offerDetails.jobProfile || "",
    location: data?.location || "",
    seniority: data?.seniority || "",
    other,
  };
};

const intersectionOptions = (
  options: UseOptionsResult,
  data: OfferType | undefined
) => ({
  mustHave:
    options?.mustHave.filter((item) => data?.mustHave.includes(item.value)) ||
    [],
  niceToHave:
    options?.niceToHave.filter((item) =>
      data?.niceToHave.includes(item.value)
    ) || [],
  perks:
    options?.perksInOffice.filter((item) =>
      data?.perksInOffice.includes(item.value)
    ) || [],
  benefits:
    options?.benefits.filter((item) => data?.benefits.includes(item.value)) ||
    [],
  workMethodology:
    options?.workMethodology.filter((item) =>
      data?.workMethodology.includes(item.value)
    ) || [],
});

export { mapValues, mapInitialValues, intersectionOptions };
