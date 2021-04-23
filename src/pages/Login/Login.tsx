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
  login: string;
  password: string;
};

const validationSchema = yup.object({
  login: yup.string().email().required(FormErrors.REQUIRED_FIELD),
  password: yup.string().required(FormErrors.REQUIRED_FIELD),
});

const Login = () => {
  const history = useHistory();
  const formik = useFormik<LoginForm>({
    initialValues: {
      login: "",
      password: "",
    },
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await auth.signInWithEmailAndPassword(values.login, values.password);
        history.push("/dashboard");
      } catch (error) {
        toast.error("Niepoprawne dane logowania");
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
            Welcome back
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
            disabled={formik.isSubmitting}
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
