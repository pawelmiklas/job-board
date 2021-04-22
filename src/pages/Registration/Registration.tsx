import { Box, Container, Text, Flex, Button, Stack } from "@chakra-ui/react";
import Input from "components/Input/Input";
import PasswordInput from "components/PasswordInput/PasswordInput";
import * as yup from "yup";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { FormErrors } from "constants/formErrors";

type LoginForm = {
  company: string;
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const validationSchema = yup.object({
  company: yup.string().required(FormErrors.REQUIRED_FIELD),
  name: yup.string().required(FormErrors.REQUIRED_FIELD),
  surname: yup.string().required(FormErrors.REQUIRED_FIELD),
  phoneNumber: yup.string().required(FormErrors.REQUIRED_FIELD),
  email: yup.string().email().required(FormErrors.REQUIRED_FIELD),
  password: yup.string().required(FormErrors.REQUIRED_FIELD),
  confirmPassword: yup
    .string()
    .required(FormErrors.REQUIRED_FIELD)
    .oneOf([yup.ref("password")], FormErrors.PASSWORD_CONFIRMATION),
});

const Registration = () => {
  const formik = useFormik<LoginForm>({
    initialValues: {
      company: "",
      name: "",
      surname: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  return (
    <Box w="100%" height="calc(100vh - 160px)" color="gray.700" minH="600px">
      <Container
        pt="4"
        pb="12"
        h="100%"
        maxW="container.sm"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex p="4" pb="0" flexDirection="column" w="100%">
          <Text textAlign="center" fontSize="3xl" fontWeight="600" mb="8">
            Registration
          </Text>
          <Stack spacing={5}>
            <Input name="company" placeholder="Company name" formik={formik} />
            <Input name="name" placeholder="Name" formik={formik} />
            <Input name="surname" placeholder="Surname" formik={formik} />
            <Input
              name="phoneNumber"
              placeholder="phoneNumber"
              formik={formik}
            />
            <Input name="email" placeholder="Email" formik={formik} />
            <PasswordInput
              name="password"
              placeholder="Enter password"
              formik={formik}
            />
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm password"
              formik={formik}
            />
          </Stack>
          <Button
            variant="solid"
            colorScheme="blue"
            mt="5"
            onClick={() => formik.handleSubmit()}
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Sign up
          </Button>
          <Flex justifyContent="center" alignItems="center" mt="5">
            Already have an account?
            <Text color="blue.500" ml="2">
              <Link to="/login">Sign in</Link>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Registration;
