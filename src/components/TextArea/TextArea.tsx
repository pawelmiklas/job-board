import { Textarea as ChakraTextArea, InputGroup, Text } from "@chakra-ui/react";
import FormField from "components/FormField/FormField";
import { FormikProps, getIn } from "formik";
import React from "react";

type TextAreaProps<F> = {
  formik: FormikProps<F>;
  name: string;
  label: string;
};

const TextArea = <F,>({ name, formik, label }: TextAreaProps<F>) => {
  const { handleChange, values, errors, touched, handleBlur } = formik;
  const error = getIn(errors, name) && getIn(touched, name);

  return (
    <FormField label={label} formik={formik} name={name} error={error}>
      <InputGroup
        size="md"
        display="flex"
        flexDirection="column"
        mt="3px !important"
      >
        <ChakraTextArea
          id={name}
          name={name}
          isInvalid={!!error}
          value={getIn(values, name)}
          onChange={handleChange}
          onBlur={handleBlur}
          errorBorderColor="crimson"
          pr="4.5rem"
        />
      </InputGroup>
    </FormField>
  );
};

export default TextArea;
