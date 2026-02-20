import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Input,
  Textarea,
  Heading,
  VStack,
  Field,
  Text,
  Flex,
} from "@chakra-ui/react";
import { toaster } from "./ui/toaster.jsx";
import AnimatedPage from "./AnimatedPage.jsx";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://formspree.io/f/mdkqblda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toaster.success({
        title: "Message sent",
        description: "Thanks for contacting me.",
      });

      reset();
    } catch {
      toaster.error({
        title: "Failed",
        description: "Please try again later.",
      });
    }
  };

  return (
    <Flex
      minH="100vh"
      justify="center"
      align="center"
      px={{ base: 4, md: 0 }}
      backgroundImage="linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)"
    >
      <AnimatedPage>
        <Box
          minW={{ base: "90vw", md: "600px" }}
          p={8}
          // bg="rgba(255,255,255,0.02)"
          // backdropFilter=" blur(10px)"
          // borderRadius="2xl"
          // boxShadow="xl"
            bg="rgba(255, 255, 255, 0.027)"
  backdropFilter="blur(8px)"
  borderTop="1px solid rgba(255, 255, 255, 0.1)"
  borderLeft="1px solid rgba(255, 255, 255, 0.08)"
  borderRadius="35px"
  boxShadow="3px 3px 3px rgba(0, 0, 0, 0.089)"
        >
          <Heading textAlign="center" mb={6} color="white">
            Contact Me
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={5}>
              <Field.Root invalid={!!errors.name}>
                <Field.Label color="gray.200">Name</Field.Label>
                <Input
                  {...register("name", { required: "Name is required" })}
                  bg="whiteAlpha.200"
                  color="white"
                />
                <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={!!errors.email}>
                <Field.Label color="gray.200">Email</Field.Label>
                <Input
                  {...register("email", { required: "Email is required" })}
                  bg="whiteAlpha.200"
                  color="white"
                />
                <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={!!errors.message}>
                <Field.Label color="gray.200">Message</Field.Label>
                <Textarea
                  {...register("message", { required: "Message is required" })}
                  bg="whiteAlpha.200"
                  color="white"
                />
                <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
              </Field.Root>

              <Button
                type="submit"
                size="lg"
                w="full"
                colorScheme="pink"
                isLoading={isSubmitting}
              >
                Send Message
              </Button>

              <Text fontSize="sm" color="gray.400">
                I’ll reply as soon as possible
              </Text>
            </VStack>
          </form>
        </Box>
      </AnimatedPage>
    </Flex>
  );
}
