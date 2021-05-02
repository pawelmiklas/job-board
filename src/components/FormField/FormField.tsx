import React from "react";
import { Text } from "@chakra-ui/react";
import { FormikProps, getIn } from "formik";

interface FormFieldProps<F> {
  formik: FormikProps<F>;
  children: React.ReactNode;
  name: string;
  error: boolean;
  label: string;
}

const FormField = <F,>({
  formik,
  children,
  name,
  error,
  label,
}: FormFieldProps<F>) => {
  const { errors } = formik;

  return (
    <>
      {!!label && <Text color="blackAlpha.800">{label}</Text>}
      {children}
      {!!error && (
        <Text color="crimson" mt="3px !important">
          {getIn(errors, name)}
        </Text>
      )}
    </>
  );
};

export default FormField;
