import { Box ,Text,Flex} from "@chakra-ui/react";
import CurrencyBitcoinTwoToneIcon from "@mui/icons-material/CurrencyBitcoinTwoTone";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SavingsIcon from "@mui/icons-material/Savings";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PaletteIcon from "@mui/icons-material/Palette";


const Course = () => {
  return (
    <>
      <Box
        display="flex"
        flexDir={{ base: "column", sm: "row" }}
        pt="3.4rem"
        gap={{ base: "4rem", sm: "2rem" }}
      >
        <Box w={{ base: "100%", sm: "50%" }}>
          <Box
            display={"flex"}
            flexDir="column"
            alignItems={{ base: "center", sm: "flex-start" }}
            gap={"2vmax"}
          >
            <header style={{ fontSize: "2.3vmax", fontWeight: "700" }}>
              Categories
            </header>
            <Text transition={{ delay: 0.3 }} fontSize={"1.5vmax"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              maiores commodi, alias cumque beatae voluptas molestiae
              necessitatibus libero totam error!
            </Text>
            <Box>
              <a
                className="atag"
                transition={{ delay: 0.5 }}
                style={{ padding: "0.9vmax", border: "1px solid black" }}
                href="/"
              >
                Get Started
              </a>
            </Box>
          </Box>
        </Box>

        <Box w={{ base: "100%", md: "70%", lg: "50%" }}>
          <Flex
            flexDir={{ base: "coloumn" }}
            flexWrap="wrap"
            gap={{ base: "1rem", md: "1rem", lg: "2rem" }}
            justifyContent={{ base: "center", md: "flex-end", lg: "center" }}
          >
            <Box
              borderRadius={"10%"}
              maxW={{ base: "100px", md: "100px", lg: "140px" }}
              display="flex"
              flexDir={"column"}
              gap={{ base: "0.9rem", md: "1.2rem", lg: "1.2rem" }}
              // m={{ base: "10px", md: "4px", lg: "10px" }}
              p={{ base: "10px", sm: "9px", md: "9px", lg: "11px" }}
              backdropFilter="blur(1px)"
              boxShadow={
                "0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 8px 4px rgba(0,0,0,0.01),0 16px 1px rgba(0,0,0,0.01)"
              }
              border="1px solid rgba(255, 255, 255,0.5)"
              borderRight={"1px solid rgba(255, 255, 255, 0.2)"}
              borderBottom={"1px solid rgba(255, 255, 255, 0.2)"}
            >
              <CurrencyBitcoinTwoToneIcon style={{ fontSize: "3rem" }} />
              <Text
                fontSize={{ base: "0.8rem", sm: "0.8rem", lg: "1.2rem" }}
                fontWeight="600"
              >
                BlockChain
              </Text>
              <Text fontSize={{ md: "15px", lg: "1rem" }}>
                lorem20ldfjdlfjdlkfjfdlkgjfdlfjlfjlfjdlfjlllkfjlfkdjflkjfljflfjfdjlj
              </Text>
            </Box>

            <Box
              borderRadius={"10%"}
              maxW={{ base: "100px", md: "100px", lg: "140px" }}
              display="flex"
              flexDir={"column"}
              gap={{ base: "0.9rem", md: "1.2rem", lg: "1.2rem" }}
              // m={{ base: "10px", md: "4px", lg: "10px" }}
              p={{ base: "10px", sm: "9px", md: "9px", lg: "11px" }}
              backdropFilter="blur(1px)"
              boxShadow={
                "0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 8px 4px rgba(0,0,0,0.01),0 16px 1px rgba(0,0,0,0.01)"
              }
              border="1px solid rgba(255, 255, 255,0.5)"
              borderRight={"1px solid rgba(255, 255, 255, 0.2)"}
              borderBottom={"1px solid rgba(255, 255, 255, 0.2)"}
            >
              <AddBusinessIcon style={{ fontSize: "3rem" }} />
              <Text
                fontSize={{ base: "0.8rem", sm: "0.8rem", lg: "1.2rem" }}
                fontWeight="600"
              >
                Marketing
              </Text>
              <Text fontSize={{ md: "15px", lg: "1rem" }}>
                lorem20ldfjdlfjdlkfjfdlkgjfdlfjlfjlfjdlfjlllkfjlfkdjflkjfljflfjfdjlj
              </Text>
            </Box>
            <Box
              borderRadius={"10%"}
              maxW={{ base: "100px", md: "100px", lg: "140px" }}
              display="flex"
              flexDir={"column"}
              gap={{ base: "0.9rem", md: "1.2rem", lg: "1.2rem" }}
              // m={{ base: "10px", md: "4px", lg: "10px" }}
              p={{ base: "10px", sm: "9px", md: "9px", lg: "11px" }}
              backdropFilter="blur(1px)"
              boxShadow={
                "0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 8px 4px rgba(0,0,0,0.01),0 16px 1px rgba(0,0,0,0.01)"
              }
              border="1px solid rgba(255, 255, 255,0.5)"
              borderRight={"1px solid rgba(255, 255, 255, 0.2)"}
              borderBottom={"1px solid rgba(255, 255, 255, 0.2)"}
            >
              <QueueMusicIcon style={{ fontSize: "3rem" }} />
              <Text
                fontSize={{ base: "0.8rem", sm: "0.8rem", lg: "1.2rem" }}
                fontWeight="600"
              >
                Music
              </Text>
              <Text fontSize={{ md: "15px", lg: "1rem" }}>
                lorem20ldfjdlfjdlkfjfdlkgjfdlfjlfjlfjdlfjlllkfjlfkdjflkjfljflfjfdjlj
              </Text>
            </Box>
            <Box
              borderRadius={"10%"}
              maxW={{ base: "100px", md: "100px", lg: "140px" }}
              display="flex"
              flexDir={"column"}
              gap={{ base: "0.9rem", md: "1.2rem", lg: "1.2rem" }}
              // m={{ base: "10px", md: "4px", lg: "10px" }}
              p={{ base: "10px", sm: "9px", md: "9px", lg: "11px" }}
              backdropFilter="blur(1px)"
              boxShadow={
                "0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 8px 4px rgba(0,0,0,0.01),0 16px 1px rgba(0,0,0,0.01)"
              }
              border="1px solid rgba(255, 255, 255,0.5)"
              borderRight={"1px solid rgba(255, 255, 255, 0.2)"}
              borderBottom={"1px solid rgba(255, 255, 255, 0.2)"}
            >
              <SavingsIcon style={{ fontSize: "3rem" }} />
              <Text
                fontSize={{ base: "0.8rem", sm: "0.8rem", lg: "1.2rem" }}
                fontWeight="600"
              >
                Finance
              </Text>
              <Text fontSize={{ md: "15px", lg: "1rem" }}>
                lorem20ldfjdlfjdlkfjfdlkgjfdlfjlfjlfjdlfjlllkfjlfkdjflkjfljflfjfdjlj
              </Text>
            </Box>
            <Box
              borderRadius={"10%"}
              maxW={{ base: "100px", md: "100px", lg: "140px" }}
              display="flex"
              flexDir={"column"}
              gap={{ base: "0.9rem", md: "1.2rem", lg: "1.2rem" }}
              // m={{ base: "10px", md: "4px", lg: "10px" }}
              p={{ base: "10px", sm: "9px", md: "9px", lg: "11px" }}
              backdropFilter="blur(1px)"
              boxShadow={
                "0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 8px 4px rgba(0,0,0,0.01),0 16px 1px rgba(0,0,0,0.01)"
              }
              border="1px solid rgba(255, 255, 255,0.5)"
              borderRight={"1px solid rgba(255, 255, 255, 0.2)"}
              borderBottom={"1px solid rgba(255, 255, 255, 0.2)"}
            >
              <ApartmentIcon style={{ fontSize: "3rem" }} />
              <Text
                fontSize={{ base: "0.8rem", sm: "0.8rem", lg: "1.2rem" }}
                fontWeight="600"
              >
                Contructor
              </Text>
              <Text fontSize={{ md: "15px", lg: "1rem" }}>
                lorem20ldfjdlfjdlkfjfdlkgjfdlfjlfjlfjdlfjlllkfjlfkdjflkjfljflfjfdjlj
              </Text>
            </Box>
            <Box
              borderRadius={"10%"}
              maxW={{ base: "100px", md: "100px", lg: "140px" }}
              display="flex"
              flexDir={"column"}
              gap={{ base: "0.9rem", md: "1.2rem", lg: "1.2rem" }}
              // m={{ base: "10px", md: "4px", lg: "10px" }}
              p={{ base: "10px", sm: "9px", md: "9px", lg: "11px" }}
              backdropFilter="blur(1px)"
              boxShadow={
                "0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 4px 2px rgba(0,0,0,0.1),0 8px 4px rgba(0,0,0,0.01),0 16px 1px rgba(0,0,0,0.01)"
              }
              border="1px solid rgba(255, 255, 255,0.5)"
              borderRight={"1px solid rgba(255, 255, 255, 0.2)"}
              borderBottom={"1px solid rgba(255, 255, 255, 0.2)"}
            >
              <PaletteIcon style={{ fontSize: "3rem" }} />
              <Text
                fontSize={{ base: "0.8rem", sm: "0.8rem", lg: "1.2rem" }}
                fontWeight="600"
              >
                Painter
              </Text>
              <Text fontSize={{ md: "15px", lg: "1rem" }}>
                lorem20ldfjdlfjdlkfjfdlkgjfdlfjlfjlfjdlfjlllkfjlfkdjflkjfljflfjfdjlj
              </Text>
            </Box>
          </Flex>
        </Box>
        <br></br>
      </Box>
    </>
  );
};

export default Course;
