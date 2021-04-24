import { Checkbox } from "@chakra-ui/react";
import { FieldArray, FormikProps, FormikProvider } from "formik";
import React from "react";

type Props<F> = {
  formik: FormikProps<F>;
  name: string;
  options: string[];
};

const CheckboxGroup = <F,>({ name, formik, options }: Props<F>) => (
  <FormikProvider value={formik}>
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <>
          {options.map((item) => (
            <Checkbox
              key={item}
              id={name}
              name={name}
              checked={arrayHelpers.form.values.employmentType.includes(item)}
              onChange={(e) => {
                if (e.target.checked) {
                  arrayHelpers.push(item);
                } else {
                  const ids = arrayHelpers.form.values.employmentType.indexOf(
                    item
                  );
                  arrayHelpers.remove(ids);
                }
              }}
            >
              {item}
            </Checkbox>
          ))}
        </>
      )}
    />
  </FormikProvider>
);

export default CheckboxGroup;
