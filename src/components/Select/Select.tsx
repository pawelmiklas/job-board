import { Select as ChakraSelect, InputGroup, Text } from "@chakra-ui/react";
import { FormikProps, getIn } from "formik";
import React from "react";

type Props<F> = {
  formik: FormikProps<F>;
  name: string;
  options: string[];
};

const Select = <F,>({ name, formik, options }: Props<F>) => {
  const { handleChange, values, errors, touched, handleBlur } = formik;
  const error = getIn(errors, name) && getIn(touched, name);

  return (
    <InputGroup size="md" display="flex" flexDirection="column">
      <ChakraSelect
        id={name}
        name={name}
        isInvalid={!!error}
        value={getIn(values, name)}
        onChange={handleChange}
        onBlur={handleBlur}
        errorBorderColor="crimson"
      >
        <option value="all">All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </ChakraSelect>
      {!!error && <Text color="crimson">{getIn(errors, name)}</Text>}
    </InputGroup>
  );
};

export default Select;
