import { Box, Center } from "@chakra-ui/react";

export default function hover3() {
  return (
    <>
      <Box
        w="50vw"
        h="60vh"
        border="1px solid"
        rounded="1rem"
        display={"flex"}
        pos="absolute"
        zIndex={1}
        bgColor={"black"}
        _hover={{
          bgColor: "transparent",
          boxShadow: " 10px 5px 5px #4d28a9cc",
        }}
        transition="all .4s"
      >
        <Box w="40%" ml="2rem" mt="2rem">
          <Box>PROFESSOR OF CHEMISTRY</Box>
          <Box h="41vh" fontSize={"2vh"} mt="20px">
            <Center
              w="16rem"
              h="4rem"
              bgColor={"#044900"}
              fontFamily={"system-ui"}
              fontSize="2.3rem"
              fontWeight={600}
              rounded="5px"
            >
              Donna Nelson
            </Center>
            <Box mt="20px">
              She drew chemical structures and wrote chemical equations which
              were used as props. Also checked script and provided dialogue.
              <br />
              <br />
              <Box color={"#43ac90"}>
                "I really like this show, and if you ever need help with the
                chemistry, I'd love to lend a hand."
              </Box>
              <br />
              <br />
              Dr. Donna Nelson from the University of Oklahoma
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            w="27vw"
            h="58vh"
            bgImage={"/image/portfolio/display.svg"}
            bgRepeat="no-repeat"
            bgSize="60%"
            bgPos={"center"}
            pos="absolute"
          ></Box>
          <Box
            w="27vw"
            h="58vh"
            bgImage={"/image/portfolio/keyboard-notebook.svg"}
            bgRepeat="no-repeat"
            bgSize="78%"
            bgPos={"3vw 40vh"}
            pos="absolute"
          ></Box>
        </Box>
      </Box>
      <Box w="50vw" h="60vh" border="1px solid" rounded="1rem" display={"flex"}>
        <Box w="40%" ml="2rem" mt="2rem"></Box>
        <Box>
          <Center
            w="27vw"
            h="58vh"
            bgImage={"/image/portfolio/hover-display.svg"}
            bgRepeat="no-repeat"
            bgSize="60%"
            bgPos={"center"}
            pos="absolute"
          >
            <Box
              w="15.1vw"
              h="19.3vh"
              bgImage={"/image/section/donna.jpeg"}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPos={"center"}
              pos="relative"
              transform={"translate(-0vw,.1vh)"}
            ></Box>
          </Center>
          <Box
            w="27vw"
            h="58vh"
            bgImage={"/image/portfolio/hover-keyboard-notebook.svg"}
            bgRepeat="no-repeat"
            bgSize="78%"
            bgPos={"3vw 40vh"}
            pos="absolute"
          ></Box>
        </Box>
      </Box>
    </>
  );
}
