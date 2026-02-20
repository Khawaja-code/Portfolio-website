import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AnimatedPage from "./AnimatedPage";

function Education() {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setEducationData(data.education))
      .catch((error) => console.error("Error fetching education data:", error));
  }, []);

  return (
    <Box
      maxH={{ base: "", md: "100vh" }}
      minH="100vh"
      maxW={{ base: "", md: "100vw" }}
      // minW="100vw"
      px={{ base: "10px", md: "50px" }}
      pt="100px"
      backgroundImage="linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)"
    >
      <Heading
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="700"
        color="#f8fafc"
        mb={7}
      >
        Education
      </Heading>

      <Flex direction="column" gap={4}>
        {educationData.map((edu) => (
          <AnimatedPage key={edu.id}>
            <Box
              p={4}
              borderRadius="lg"
              bg="#1e1f3f"
              boxShadow="md"
              _hover={{
                boxShadow: "xl",
                transform: "translateY(-4px)",
              }}
              transition="all 0.3s ease"
            >
              <VStack align="start" spacing={2}>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  color="#38bdf8"
                >
                  {edu.degree}
                </Text>
                <Text fontSize="sm" color="#cbd5e1">
                  <strong>Institute:</strong> {edu.institute}
                </Text>
                <Text fontSize="sm" color="#cbd5e1">
                  <strong>Year:</strong> {edu.year}
                </Text>
                <Text fontSize="sm" color="#e2e8f0">
                  {edu.description}
                </Text>
              </VStack>
            </Box>
          </AnimatedPage>
        ))}
      </Flex>
    </Box>
  );
}

export default Education;
