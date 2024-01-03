import { Box, Center } from "@chakra-ui/react";

export default function End() {
  return (
    <Box h="100vh">
      <Center h="45vh">
        <Center fontFamily={"Copperplate"} fontSize="10vh">
          MIKE WAS HERE!!!
        </Center>
      </Center>
      <Box display={"flex"} justifyContent="flex-end">
        <Center
          w="10vw"
          h="55vh"
          bgImage={"/image/section/hand-3d.png"}
          bgRepeat="no-repeat"
          bgSize="100% 100%"
          bgPos={"center"}
        ></Center>
        <Box
          w="45vw"
          display={"flex"}
          alignItems="flex-end"
          justifyContent={"flex-end"}
          fontFamily={"system-ui"}
          mb="2vh"
          pr="1vw"
          opacity={0.6}
        >
          Copyrights @ 2022 MC.Dalai . All rights reserved.
        </Box>
      </Box>
    </Box>
  );
}
