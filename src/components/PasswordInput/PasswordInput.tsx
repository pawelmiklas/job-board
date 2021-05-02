import {
  Button,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import FormField from "components/FormField/FormField";
import { FormikProps, getIn } from "formik";
import React, { useState } from "react";

type PasswordInputProps<F> = {
  formik: FormikProps<F>;
  name: string;
  label: string;
};

const PasswordInput = <F,>({ name, formik, label }: PasswordInputProps<F>) => {
  const { handleChange, values, errors, touched, handleBlur } = formik;
  const [show, setShow] = useState(false);
  const error = getIn(errors, name) && getIn(touched, name);

  return (
    <FormField label={label} formik={formik} name={name} error={error}>
      <InputGroup
        size="md"
        display="flex"
        flexDirection="column"
        mt="3px !important"
      >
        <ChakraInput
          id={name}
          name={name}
          isInvalid={!!error}
          value={getIn(values, name)}
          onChange={handleChange}
          onBlur={handleBlur}
          type={show ? "text" : "password"}
          errorBorderColor="crimson"
          pr="4.5rem"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormField>
  );
};

export default PasswordInput;
