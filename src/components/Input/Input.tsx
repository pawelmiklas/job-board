import { Input as ChakraInput, InputGroup, Text } from "@chakra-ui/react";
import { FormikProps, getIn } from "formik";
import React from "react";

type Props<F> = {
  formik: FormikProps<F>;
  name: string;
  placeholder: string;
};

const Input = <F,>({ name, formik, placeholder }: Props<F>) => {
  const { handleChange, values, errors, touched, handleBlur } = formik;
  const error = getIn(errors, name) && touched;

  return (
    <InputGroup size="md" display="flex" flexDirection="column">
      <ChakraInput
        id={name}
        name={name}
        isInvalid={!!error}
        placeholder={placeholder}
        value={getIn(values, name)}
        onChange={handleChange}
        onBlur={handleBlur}
        errorBorderColor="crimson"
        pr="4.5rem"
      />
      {!!error && <Text color="crimson">{getIn(errors, name)}</Text>}
    </InputGroup>
  );
};

export default Input;
