import { Box, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Tilt from "./drawer/vanilla";

export default function Team() {
  const team = [
    {
      st: "T",
    },
    {
      st: "E",
    },
    {
      st: "A",
    },
    {
      st: "M",
    },
  ];
  const options = {
    reverse: true,
    reverseY: true,
    speed: 1000,
    max: 30,
    glare: 1,
  };
  let router = useRouter();

  return (
    <>
      <Center h="100vh" w="100vw" overflow={"hidden"} id="team">
        <Center
          w={"30vw"}
          h="10vh"
          fontSize={"12vh"}
          fontWeight="800"
          ml={"60vw"}
          pos="absolute"
          transition={"all .2s"}
          overflow="hidden"
        >
          <Box display={"flex"} transition="all 1s">
            {team.map((item, key) => (
              <Center
                _hover={{
                  rounded: "5px",
                  fontSize: "15vh",
                  color: "#08fdd8",
                }}
                transition=".2s"
                className="gradient-hover"
              >
                {team[key].st}
              </Center>
            ))}
          </Box>
        </Center>
        <Tilt options={options}>
          <Center
            w="30vw"
            h="80vh"
            bgImage={"/image/section/section-portfolio.jpg"}
            bgSize={"100% "}
            bgPos="center"
            bgRepeat={"no-repeat"}
            rounded="10px"
            onClick={() => router.push("/portfolio")}
          ></Center>
        </Tilt>
      </Center>
    </>
  );
}
