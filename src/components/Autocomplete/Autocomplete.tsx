import { Flex, InputGroup, Text } from "@chakra-ui/react";
import { CUIAutoComplete, Item } from "chakra-ui-autocomplete";
import FormField from "components/FormField/FormField";
import { FormikProps, getIn } from "formik";
import _uniqWith from "lodash/uniqWith";
import _isEqual from "lodash/isEqual";
import React from "react";

type AutocompleteProps<F> = {
  formik: FormikProps<F>;
  name: string;
  label: string;
  options: Item[];
};

const Autocomplete = <F,>({
  name,
  formik,
  label,
  options,
}: AutocompleteProps<F>) => {
  const { values, errors, touched, setFieldValue } = formik;
  const error = getIn(errors, name) && getIn(touched, name);
  const autoCompleteValues = getIn(values, name);

  return (
    <FormField label={label} formik={formik} name={name} error={error}>
      <InputGroup
        size="md"
        display="flex"
        flexDirection="column"
        mt={autoCompleteValues.length ? "-11px !important" : "-22px !important"}
        mb="-22px !important"
      >
        <CUIAutoComplete
          label=""
          placeholder=""
          items={options}
          selectedItems={autoCompleteValues}
          itemRenderer={(selected) => (
            <Flex flexDir="row" alignItems="center">
              <Text>{selected.label}</Text>
            </Flex>
          )}
          onSelectedItemsChange={(changes) => {
            setFieldValue(name, _uniqWith(changes.selectedItems, _isEqual));
          }}
          disableCreateItem
        />
      </InputGroup>
    </FormField>
  );
};

export default Autocomplete;
