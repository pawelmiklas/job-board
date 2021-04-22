import { Box, Container, Text, Flex, Button, Stack } from "@chakra-ui/react";
import Input from "components/Input/Input";
import PasswordInput from "components/PasswordInput/PasswordInput";
import * as yup from "yup";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { FormErrors } from "constants/formErrors";

type LoginForm = {
  login: string;
  password: string;
};

const validationSchema = yup.object({
  login: yup.string().required(FormErrors.REQUIRED_FIELD),
  password: yup.string().required(FormErrors.REQUIRED_FIELD),
});

const Login = () => {
  const formik = useFormik<LoginForm>({
    initialValues: {
      login: "",
      password: "",
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
            Welcome Back
          </Text>
          <Stack spacing={5}>
            <Input name="login" placeholder="Email" formik={formik} />
            <PasswordInput
              name="password"
              placeholder="Enter password"
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
            Login
          </Button>
          <Flex justifyContent="center" alignItems="center" mt="5">
            Don't have an account?
            <Text color="blue.500" ml="2">
              <Link to="/registration">Create account</Link>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Login;
