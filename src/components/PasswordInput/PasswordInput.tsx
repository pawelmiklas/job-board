import {
  InputGroup,
  Text,
  Input as ChakraInput,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { FormikProps, getIn } from "formik";
import React, { useState } from "react";

type Props<F> = {
  formik: FormikProps<F>;
  name: string;
  placeholder: string;
};

const PasswordInput = <F,>({ name, formik, placeholder }: Props<F>) => {
  const { handleChange, values, errors, touched, handleBlur } = formik;
  const error = getIn(errors, name) && touched;
  const [show, setShow] = useState(false);

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
        type={show ? "text" : "password"}
        errorBorderColor="crimson"
        pr="4.5rem"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
      {!!error && <Text color="crimson">{getIn(errors, name)}</Text>}
    </InputGroup>
  );
};

export default PasswordInput;
