import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { auth } from "App";
import Input from "components/Input/Input";
import PasswordInput from "components/PasswordInput/PasswordInput";
import { FormErrors } from "constants/formErrors";
import { useFormik } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

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
  password: yup.string().min(6).required(FormErrors.REQUIRED_FIELD),
  confirmPassword: yup
    .string()
    .min(6)
    .required(FormErrors.REQUIRED_FIELD)
    .oneOf([yup.ref("password")], FormErrors.PASSWORD_CONFIRMATION),
});

const Registration = () => {
  const history = useHistory();

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
    onSubmit: async (values) => {
      try {
        await auth.createUserWithEmailAndPassword(
          values.email,
          values.password
        );
        toast.success("Konto zostało stworzone");
        history.push("/login");
      } catch (error) {
        toast.error("Rejestracja nie powiodła się");
      }
    },
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
            <Input name="company" label="Company name" formik={formik} />
            <Input name="name" label="Name" formik={formik} />
            <Input name="surname" label="Surname" formik={formik} />
            <Input name="phoneNumber" label="phoneNumber" formik={formik} />
            <Input name="email" label="Email" formik={formik} />
            <PasswordInput
              name="password"
              label="Enter password"
              formik={formik}
            />
            <PasswordInput
              name="confirmPassword"
              label="Confirm password"
              formik={formik}
            />
          </Stack>
          <Button
            variant="solid"
            colorScheme="blue"
            mt="5"
            onClick={() => formik.handleSubmit()}
            disabled={formik.isSubmitting}
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
