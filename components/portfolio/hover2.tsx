import { Box, Center } from "@chakra-ui/react";

export default function Hover2() {
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
          <Box>EDITOR</Box>
          <Box h="41vh" fontSize={"2vh"} mt="20px">
            <Center
              w="14rem"
              h="4rem"
              bgColor={"#044900"}
              fontFamily={"system-ui"}
              fontSize="2.3rem"
              fontWeight={600}
              rounded="5px"
            >
              Kelley Dixon
            </Center>
            <Box mt="20px">
              the few editors of Breaking Bad and edited many of the series'
              "meth montages". For the montages, she would use techniques such
              as jump cuts and alternating the speed of the film, either faster
              or slower.
              <br />
              <br />
              For her work, she received six Primetime Emmy Award nominations
              for{" "}
              <Box color={"#ffee00"}>
                "Outstanding Single-Camera Picture Editing for a Drama Series"
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            w="27vw"
            h="58vh"
            bgImage={"/image/portfolio/com.svg"}
            bgRepeat="no-repeat"
            bgSize="60%"
            bgPos={"center"}
            pos="absolute"
          ></Box>
          <Box
            w="27vw"
            h="60vh"
            bgImage={"/image/portfolio/keyboard.svg"}
            bgRepeat="no-repeat"
            bgSize="50%"
            bgPos={"0 42vh"}
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
            bgImage={"/image/portfolio/hover-com.svg"}
            bgRepeat="no-repeat"
            bgSize="60%"
            bgPos={"center"}
            pos="absolute"
          >
            <Box
              w="15.7vw"
              h="19.5vh"
              bgImage={"/image/section/Kelley-dixon.jpeg"}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPos={"center"}
              pos="relative"
              transform={"skew(0deg,30deg) translate(-.2vw,-.6vh)"}
              rounded="5px"
            ></Box>
          </Center>
          <Box
            w="27vw"
            h="60vh"
            bgImage={"/image/portfolio/hover-keyboard.svg"}
            bgRepeat="no-repeat"
            bgSize="50%"
            bgPos={"0 42vh"}
            pos="absolute"
          ></Box>
        </Box>
      </Box>
    </>
  );
}
