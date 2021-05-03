import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { firestore } from "App";
import Autocomplete from "components/Autocomplete/Autocomplete";
import CheckboxGroup from "components/CheckboxGroup/CheckboxGroup";
import Input from "components/Input/Input";
import OfferSection from "components/OfferSection/OfferSection";
import Select from "components/Select/Select";
import TextArea from "components/TextArea/TextArea";
import { useFormik } from "formik";
import useLocalStorage from "hooks/useLocalStorage";
import { Offer as OfferType } from "hooks/useOffersCollection";
import useOptions from "hooks/useOptions";
import React, { useMemo } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  mapInitialValues,
  mapValues,
  OfferAddEditForm,
} from "./OfferAddEdit.utils";

type OfferAddEditProps = {
  editable?: boolean;
};

export type OptionsShape = { value: string; label: string };

const OfferAddEdit = ({ editable = false }: OfferAddEditProps) => {
  const history = useHistory();
  const options = useOptions();
  const { id } = useParams<{ id: string }>();
  const [value] = useDocument<OfferType>(firestore.doc(`offers/${id}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const [user] = useLocalStorage<string | undefined>("userId", undefined);

  const data = value?.data();

  const formik = useFormik<OfferAddEditForm>({
    initialValues: {
      ...useMemo(() => mapInitialValues(data, options), [data, options]),
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const data = {
          workMethodology: mapValues(values.workMethodology),
          benefits: mapValues(values.benefits),
          company: values.company,
          companySize: values.companySize,
          description: values.description,
          language: values.recruitmentLanguages,
          location: values.location,
          mustHave: mapValues(values.mustHave),
          niceToHave: mapValues(values.niceToHave),
          offerDetails: {
            ...Object.fromEntries(values.other.map((item) => [item, true])),
            contractDuration: values.contractDuration,
            jobProfile: values.jobProfile,
            start: values.start,
          },
          perksInOffice: mapValues(values.perks),
          salaryFrom: values.earnings,
          title: values.title,
          seniority: values.seniority,
          employmentType: values.employmentType,
          userId: user,
          createdAt: new Date(),
        };

        if (editable) {
          await firestore.collection("offers").doc(id).update(data);
          toast.success("Offer was edited successfully");
        } else {
          await firestore.collection("offers").add(data);
          toast.success("Offer was added successfully");
        }

        history.push("/dashboard/offers");
      } catch (error) {
        toast.error("Can't add offer");
      }
    },
  });

  if (editable && data?.userId !== user) {
    history.goBack();
  }

  return (
    <Box w="100%" minH="1000" color="gray.700" mb="12" px="4">
      <Container pt="4" maxW="container.lg" border="1px" borderColor="gray.300">
        <Flex flexDirection="column" p="4">
          <Text fontSize="3xl" fontWeight="500" mb="3">
            {editable ? "Job edit" : "Job add"}
          </Text>
          <OfferSection title="Info">
            <Stack direction="row" mt="2">
              <Input name="title" label="Title" formik={formik} />
              <Input name="company" label="Company" formik={formik} />
            </Stack>
            <Stack direction="row" mt="2">
              <Input
                name="companySize"
                label="Company size"
                type="number"
                formik={formik}
              />
              <Select
                name="recruitmentLanguages"
                formik={formik}
                options={["Polish", "English"]}
                withAllOptions={false}
                label="Recruitment language"
              />
            </Stack>
            <Stack direction="row" mt="2">
              <Select
                name="employmentType"
                options={["B2B", "Permanent", "Mandate contract"]}
                formik={formik}
                withAllOptions={false}
                label="Employment type"
              />
              <Input
                name="earnings"
                label="Earnings"
                type="number"
                formik={formik}
              />
            </Stack>
            <Stack direction="row" mt="2">
              <Input name="location" label="Location" formik={formik} />
              <Select
                name="seniority"
                options={["Intern", "Junior", "Mid", "Senior", "Expert"]}
                formik={formik}
                withAllOptions={false}
                label="Seniority"
              />
            </Stack>
          </OfferSection>
          <OfferSection title="Details">
            <Stack direction="column" mt="2">
              <TextArea
                name="description"
                label="Description"
                formik={formik}
              />
              <Box w="100%">
                <Autocomplete
                  name="mustHave"
                  options={options?.mustHave || []}
                  formik={formik}
                  label="Must have"
                />
              </Box>
              <Box w="100%">
                <Autocomplete
                  name="niceToHave"
                  options={options?.niceToHave || []}
                  formik={formik}
                  label="Nice to have"
                />
              </Box>
              <Box w="100%">
                <Autocomplete
                  name="workMethodology"
                  options={options?.workMethodology || []}
                  formik={formik}
                  label="Work methodology"
                />
              </Box>
              <Box w="100%">
                <Autocomplete
                  name="perks"
                  options={options?.perksInOffice || []}
                  formik={formik}
                  label="Perks in the office"
                />
              </Box>
              <Box w="100%">
                <Autocomplete
                  name="benefits"
                  options={options?.benefits || []}
                  formik={formik}
                  label="Benefits"
                />
              </Box>
            </Stack>
            <Stack direction="row" mt="2">
              <Select
                name="start"
                options={["ASAP", "In a month", "In a 3 months"]}
                formik={formik}
                withAllOptions={false}
                label="Start"
              />
              <Select
                name="contractDuration"
                options={["ASAP", "In a month", "In a 3 months"]}
                formik={formik}
                withAllOptions={false}
                label="Contract Duration"
              />
            </Stack>
            <Stack direction="row" mt="2">
              <Select
                name="jobProfile"
                options={["Mainly new features", "Legacy code"]}
                formik={formik}
                withAllOptions={false}
                label="jobProfile"
              />
            </Stack>
          </OfferSection>
          <Stack direction="row" mt="2">
            <CheckboxGroup
              formik={formik}
              name="other"
              options={[
                {
                  label: "Flexible hours",
                  value: "flexibleHours",
                },
                {
                  label: "Remote possible",
                  value: "remotePossible",
                },
              ]}
            />
          </Stack>
          <Flex py="2">
            <Stack
              spacing={4}
              direction="row"
              align="center"
              justifyContent="flex-end"
              width="100%"
            >
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                {editable ? "Save" : "Add"}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default OfferAddEdit;
