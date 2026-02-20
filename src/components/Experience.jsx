import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Badge,
} from "@chakra-ui/react";
import AnimatedPage from "./AnimatedPage";

function Experience() {
  const [experienceData, setExperienceData] = useState([]);
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setExperienceData(data.experience);
        setSkillData(data.skills);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box
      pt={{ base: "100px", md: "50px", lg: "0" }}
      minW={{ base: "0", md: "100vw" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      backgroundImage="linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)"
    >
      {/* Experience Section */}
      <Heading
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="700"
        color="#f8fafc"
        mb={8}
        mt={8}
      >
        Experience
      </Heading>

      <Flex direction="column" gap={6} mb={12} minW={{ base: "0", md: "90%" }}>
        {experienceData.map((exp) => (
          <AnimatedPage key={exp.id}>
            <Box
              p={6}
              borderRadius="lg"
              bg="#1e1f3f"
              boxShadow="md"
              _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
              transition="all 0.3s ease"
            >
              <VStack align="start" spacing={2}>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color="#f472b6"
                >
                  {exp.role}
                </Text>
                <Text fontSize="md" color="#cbd5e1">
                  <strong>Company:</strong> {exp.company}
                </Text>
                <Text fontSize="md" color="#cbd5e1">
                  <strong>Duration:</strong> {exp.duration}
                </Text>
                <Text fontSize="md" color="#e2e8f0">
                  {exp.description}
                </Text>
              </VStack>
            </Box>
          </AnimatedPage>
        ))}
      </Flex>

      {/* Skills Section */}
      <Heading
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="700"
        color="#f8fafc"
        mb={8}
      >
        Skills
      </Heading>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={6}
        minW={{ base: "", md: "90%" }}
      >
        {skillData.map((skill) => (
          <AnimatedPage key={skill.id}>
            <Box
              p={6}
              borderRadius="lg"
              bg="#1e1f3f"
              boxShadow="md"
              _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
              transition="all 0.3s ease"
              minW={{ base: "100%", md: "100%", lg: "375px" }}
              minH={{ base: "100%", md: "175px", lg: "100%" }}
            >
              <VStack align="start" spacing={3}>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color="#38bdf8"
                >
                  {skill.category}
                </Text>
                <Wrap>
                  {skill.items.map((item, idx) => (
                    <WrapItem key={idx}>
                      <Badge
                        colorScheme="teal"
                        variant="subtle"
                        px={3}
                        py={1}
                        borderRadius="md"
                      >
                        {item}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </VStack>
            </Box>
          </AnimatedPage>
        ))}
      </Flex>
    </Box>
  );
}

export default Experience;
