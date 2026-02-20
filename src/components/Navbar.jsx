import { Flex, Spacer, HStack, Text, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      minW="100%"
      bg="rgba(15,23,42,0.85)" // semi-transparent for modern glassy effect
      backdropFilter="saturate(180%) blur(7px)"
      zIndex="1000"
      boxShadow="md"
    >
      <Flex
        maxW="100vw"
        mx="auto"
        align="center"
        p={{ base: 4, md: 6 }}
        h="80px"
      >
        <Spacer />

        <HStack gap={{ base: 6, md: 10 }} fontSize="20px" fontWeight="600">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path}>
              {({ isActive }) => (
                <Text
                  as="span"
                  cursor="pointer"
                  position="relative"
                  color={isActive ? "#ec4899" : "#F8FAFC"}
                  textShadow={
                    isActive ? "none" : "2px 2px 6px rgba(0,0,0,0.5)" // subtle default shadow
                  }
                  _after={{
                    content: '""',
                    position: "absolute",
                    width: isActive ? "100%" : "0%",
                    height: "2px",
                    bottom: "-4px",
                    left: "0",
                    bg: "#ec4899",
                    transition: "width 0.3s ease",
                  }}
                  _hover={{
                    color: isActive ? "#ec4899" : "#38bdf8",
                    textShadow: isActive
                      ? "none"
                      : "4px 4px 12px rgba(0,0,0,0.8), 6px 6px 20px rgba(0,0,0,0.5)",
                    _after: { width: "100%" },
                  }}
                  transition="all 0.3s ease"
                >
                  {item.name}
                </Text>
              )}
            </NavLink>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
