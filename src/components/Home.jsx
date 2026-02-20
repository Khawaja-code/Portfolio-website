import {
  Box,
  Flex,
  Heading,
  VStack,
  HStack,
  Button,
  Image,
  chakra,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import bg2 from "../assets/pic2.jpeg";
import AnimatedPage from "./AnimatedPage";
import { useNavigate } from "react-router";
function Home() {
  const navigate = useNavigate();
  const socialIcons = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/alishahzad098/",
      color: "#ec4899",
      hover: "#d93f8a",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/alishahzad098/",
      color: "#3b82f6",
      hover: "#2563eb",
    },
    {
      icon: FaGithub,
      href: "https://www.github.com/Khawaja-code/",
      color: "white",
      hover: "#94a3b8",
    },
    {
      icon: FaLinkedin,
      href: "www.linkedin.com/in/muhammad-ali-827143379",
      color: "#0ea5e9",
      hover: "#0284c7",
    },
  ];

  return (
    <Box
      w="100%"
      h="100vh"
      px={{ base: 6, md: 40 }}
      backgroundImage="linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <AnimatedPage>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify="center"
          gap={{ base: 8, md: 16 }}
        >
          {/* Left Content */}
          <VStack align="start" spacing={6}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="white"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-4px)" }}
            >
              Hello!
            </Heading>

            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="white"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-3px)" }}
            >
              My Name is Muhammad Ali
            </Heading>

            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="#ec4899"
            >
              I am a Web Developer
            </Heading>

            {/* Social Icons */}
            <HStack spacing={4} fontSize="2xl">
              {socialIcons.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <chakra.a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    color={item.color}
                    _hover={{
                      color: item.hover,
                      bg: "rgba(255,255,255,0.1)",
                      transform: "scale(1.2)",
                    }}
                    transition="all 0.2s ease"
                  >
                    <IconComponent />
                  </chakra.a>
                );
              })}
            </HStack>
            <Button
              bg="#6366f1"
              color="white"
              size="lg"
              _hover={{ bg: "#5558e0", transform: "scale(1.05)" }}
              boxShadow="md"
              transition="all 0.2s ease"
              onClick={() => navigate("/contact")}
            >
              Hire Me
            </Button>
          </VStack>

          {/* Right Image */}
          <Image
            src={bg2}
            boxSize={{ base: "180px", md: "220px" }}
            borderRadius="full"
            objectFit="cover"
            alt="Muhammad Ali"
            boxShadow="xl"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Flex>
      </AnimatedPage>
    </Box>
  );
}

export default Home;