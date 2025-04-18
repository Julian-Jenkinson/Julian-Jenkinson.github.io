import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import { useColorModeValue } from "@chakra-ui/react";

const LandingSection = () => {
//add loading sign to prevent double submit
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    //onSubmit: async (values) => {

    //  const URL = "https://url.com/submit"; // Placeholder URL
    //  await submit(URL, values); // Pass the fake URL and form values to submit
    //},
    validationSchema: Yup.object({

      firstName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      type: Yup.string()
        .optional(),
      comment: Yup.string()
        .required('Required')
        .min(25, 'Must be at least 25 characters'),
  
    }),
    
  });
/*
  useEffect(() => {
    if (response) {
      console.log("Response:", response); // Log the response to inspect its structure
    }
    if (response?.type === 'success') {
      onOpen(response.type, response.message);
      formik.resetForm();
    } else if (response?.type === 'error') {
      onOpen(response.type, response.message);
    }
  }, [response]);
*/
  return (
    <FullScreenSection
    id="contactme-section"
      isDarkBackground
      py={10}
      spacing={8}
      bg={useColorModeValue("white", "black")} 
      color={useColorModeValue("black", "white")}
    >
      <VStack w="1024px" px={32} alignItems="flex-start">
        <Heading as="h1">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form /*onSubmit={formik.handleSubmit}*/>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  {...formik.getFieldProps('comment')}
                  height={250}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                width="full"
                bg="rgb(196,255,134)" 
                color="black"
                //isLoading={isLoading}
                //isDisabled={isLoading}
                >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
