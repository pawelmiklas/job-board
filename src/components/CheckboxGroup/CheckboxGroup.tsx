import { Checkbox } from "@chakra-ui/react";
import { FieldArray, FormikProps, FormikProvider } from "formik";
import React from "react";

type OptionShape = {
  label: string;
  value: string;
};

type CheckboxGroupProps<F> = {
  formik: FormikProps<F>;
  name: string;
  options: OptionShape[];
};

const CheckboxGroup = <F,>({
  name,
  formik,
  options,
}: CheckboxGroupProps<F>) => (
  <FormikProvider value={formik}>
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <>
          {options.map((item) => (
            <Checkbox
              key={item.value}
              id={name}
              name={name}
              checked={arrayHelpers.form.values[name].includes(item.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  arrayHelpers.push(item.value);
                } else {
                  const ids = arrayHelpers.form.values[name].indexOf(
                    item.value
                  );
                  arrayHelpers.remove(ids);
                }
              }}
            >
              {item.label}
            </Checkbox>
          ))}
        </>
      )}
    />
  </FormikProvider>
);

export default CheckboxGroup;
