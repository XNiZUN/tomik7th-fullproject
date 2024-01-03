import { Box, Center } from "@chakra-ui/react";

export default function Hover1() {
  return (
    <>
      <Box
        w="50vw"
        h="60vh"
        border="1px solid"
        rounded="1rem"
        display={"flex"}
        pos="absolute"
        bgColor={"black"}
        zIndex="3"
        _hover={{
          bgColor: "transparent",
          boxShadow: " 10px 5px 5px #4d28a9cc",
        }}
        transition="all .4s"
      >
        <Box w="40%" ml="2rem" mt="2rem">
          <Box>CINEMATOGRAPHER</Box>
          <Box h="41vh" fontSize={"2vh"} mt="20px">
            <Center
              w="17rem"
              h="4rem"
              bgColor={"#044900"}
              fontFamily={"system-ui"}
              fontSize="2.3rem"
              fontWeight={600}
              rounded="5px"
            >
              Michael Slovis
            </Center>
            <Box mt="20px">
              Cinematographer of Breaking Bad, beginning with the second season,
              and he received critical acclaim for his work throughout the
              series.
              <br />
              <br />
              Slovis received four Primetime Emmy Award nominations for :
              <Box color={"#ffee00"}>
                "Outstanding Cinematography for a One Hour Series"
              </Box>{" "}
              <Box color={"#ffee00"}>
                "Outstanding Cinematography for a Single-Camera Series".
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            w="27vw"
            h="58vh"
            bgImage={"/image/portfolio/phone.svg"}
            bgRepeat="no-repeat"
            bgSize="60%"
            bgPos={"center"}
            pos="absolute"
          ></Box>
        </Box>
      </Box>
      <Box
        w="50vw"
        h="60vh"
        border="1px solid"
        rounded="1rem"
        display={"flex"}
        pos="absolute"
      >
        <Box w="40%" ml="2rem" mt="2rem"></Box>
        <Box>
          <Center
            w="27vw"
            h="58vh"
            bgImage={"/image/portfolio/hover-phone.png"}
            bgRepeat="no-repeat"
            bgSize="60%"
            bgPos={"center"}
            pos="absolute"
            zIndex={1}
          >
            <Box
              w="15.4vw"
              h="22.6vh"
              bgImage={"/image/section/Mslovis.jpeg"}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPos={"center"}
              pos="relative"
              transform={"skew(0deg,30deg) translate(-.1vw,.2vh)"}
              rounded="15px"
              zIndex={1}
            ></Box>
          </Center>
          <Box
            w="28vw"
            h="60vh"
            bgImage={"/image/portfolio/hover-phone-base.png"}
            bgRepeat="no-repeat"
            bgSize="100%"
            bgPos={"center 25vh"}
            pos="absolute"
            zIndex={0}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
