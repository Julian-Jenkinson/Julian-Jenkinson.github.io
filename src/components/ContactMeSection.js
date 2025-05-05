import React from "react";
import { useFormik } from "formik";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Textarea, VStack,} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import { useColorModeValue } from "@chakra-ui/react";

const ContactMeSection = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "let's work together",
      comment: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Who are you?!"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Required"),
      type: Yup.string().optional(),
      comment: Yup.string()
        .required("Required")
        .min(5, "At least submit more than a few letters!"),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "340f0837-f591-4969-b6df-01f3119ace87",  // Public key
            name: values.firstName,
            email: values.email,
            enquiryType: values.type,
            message: values.comment,
          }),
        });

        const result = await response.json();
        if (result.success) {
          alert("Thanks for contacting me. I'll be in touch soon!");
          resetForm();
        } else {
          alert("Something went wrong. Please try again later.");
        }
      } catch (error) {
        console.error(error);
        alert("Error submitting the form.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <FullScreenSection
      id="contactme-section"
      isDarkBackground
      py={10}
      spacing={8}
      bg={useColorModeValue("white", "black")}
      color={useColorModeValue("black", "white")}
    >
      <VStack w="1000px" px={32} alignItems="flex-start">
        <Heading 
          as="h1"
          textAlign="center"
          w="100%"
          fontWeight="900"
          fontSize="50"
          pb=".3em"
        >
          Contact
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="let's work together">Let's work together!</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  {...formik.getFieldProps("comment")}
                  height={250}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                width="full"
                bg="rgb(196,255,134)"
                color="black"
                isLoading={formik.isSubmitting}
                isDisabled={formik.isSubmitting}
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

export default ContactMeSection;
