import { Box, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Tilt from "./drawer/vanilla";

export default function Story2() {
  const [active, setActive] = React.useState(1);
  const [now, setNow] = React.useState(false);
  const story = [
    {
      st: "S",
    },
    {
      st: "T",
    },
    {
      st: "O",
    },
    {
      st: "R",
    },
    {
      st: "Y",
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
      <Center h="100vh" w="100vw" overflow={"hidden"} id="story">
        <Center
          w={"30vw"}
          h="12vh"
          fontSize={"12vh"}
          fontWeight="800"
          mt={"-70vh"}
          pos="absolute"
          transition={"all .2s"}
          opacity={now === false ? 0 : 1}
          overflow="hidden"
        >
          <Box
            display={"flex"}
            transform={now === false ? "translateY(10vh)" : "translateY(0vh)"}
            transition="all 1s"
          >
            {story.map((item, key) => (
              <Center
                _hover={{
                  rounded: "5px",
                  fontSize: "15vh",
                  color: "#08fdd8",
                }}
                transition=".2s"
                className="gradient-hover"
              >
                {story[key].st}
              </Center>
            ))}
          </Box>
        </Center>
        <Center
          w={"30vw"}
          h="12vh"
          fontSize={"12vh"}
          fontWeight="800"
          ml={"60vw"}
          pos="absolute"
          transition={"all .2s"}
          opacity={now === false ? 1 : 0}
          overflow="hidden"
        >
          <Box
            display={"flex"}
            transform={now === false ? "translateY(0vh)" : "translateY(10vh)"}
            transition="all 1s"
          >
            {story.map((item, key) => (
              <Center
                _hover={{
                  rounded: "5px",
                  fontSize: "15vh",
                  color: "#08fdd8",
                }}
                transition=".2s"
                className="gradient-hover"
              >
                {story[key].st}
              </Center>
            ))}
          </Box>
        </Center>
        <Box>
          <Box h={now === false ? "0" : "10vh"} transition="all .5s"></Box>
          <Tilt options={options}>
            <Center
              w={now === false ? "30vw" : "27vw"}
              h={now === false ? "80vh" : "70vh"}
              bgImage={"/image/section/section-story.jpg"}
              bgSize={"100% "}
              bgPos="center"
              bgRepeat={"no-repeat"}
              rounded="10px"
              onClick={() => (now === false ? setNow(true) : setNow(false))}
              transition="all .5s"
            ></Center>
          </Tilt>
        </Box>

        <Box h="80vh">
          <Box h="10vh"></Box>
          <Box
            ml="2vw"
            h={"70vh"}
            w={now === false ? "0px" : "50vw"}
            overflow="hidden"
            display="flex"
            transition={"all .4s"}
          >
            <Box
              w="20vw"
              bgColor={"#253c78"}
              rounded="10px"
              roundedBottomEnd={"0"}
              style={{
                transform: now === false ? "translate(20vw)" : "translate(0)",
                transition: "all .5s",
                opacity: now === false ? 0 : 1,
              }}
            >
              <Center w="20vw" h="10vh" fontSize={"5vh"}>
                <Box
                  className="gradient-green"
                  w="3rem"
                  h="3.5rem"
                  rounded={"5px"}
                >
                  <Box fontSize={".7rem"} ml="2rem">
                    14
                  </Box>
                  <Box
                    mt="-.7rem"
                    ml=".5rem"
                    fontFamily={"system-ui"}
                    fontWeight={600}
                    fontSize="3rem"
                  >
                    S
                  </Box>
                </Box>
                hort Story
              </Center>
              <Box w="20vw" fontSize={"2.3vh"} padding=".5rem">
                "You're going to see that underlying humanity, even when he's
                making the most devious, terrible decisions, and you need
                someone who has that humanity – deep down, bedrock humanity – so
                you say, watching this show, 'All right, I'll go for this ride.
                I don't like what he's doing, but I understand, and I'll go with
                it for as far as it goes.' If you don't have a guy who gives you
                that, despite the greatest acting chops in the world, the show
                is not going to succeed."
                <br />
                <br />
                —Vince Gilligan, about Bryan Cranston
              </Box>
            </Box>

            <Box>
              <Center
                fontSize={"6vh"}
                bgColor="#3f2963"
                ml="2vw"
                roundedTop={"10px"}
                style={{
                  transform: now === false ? "translate(20vw)" : "translate(0)",
                  transition: "all .6s",
                  opacity: now === false ? "0" : 1,
                }}
              >
                What is{" "}
                <Center
                  w="10vw"
                  h="10vh"
                  className="gradient-hover-blue"
                  rounded={"5px"}
                  fontFamily="system-ui"
                  fontSize={"7vh"}
                  fontWeight="800"
                >
                  Meth
                </Center>{" "}
                ?
              </Center>

              <Center>
                <Box
                  w="28vw"
                  h="40vh"
                  ml="2vw"
                  fontSize={"2.3vh"}
                  bgColor="#3f2963"
                  style={{
                    transform:
                      now === false ? "translate(20vw)" : "translate(0)",
                    transition: "all .6s",
                    opacity: now === false ? "0" : 1,
                  }}
                >
                  Methamphetamine properly refers to a specific chemical
                  substance, the racemic free base, which is an equal mixture of
                  levomethamphetamine and dextromethamphetamine in their pure
                  amine forms. It is rarely prescribed over concerns involving
                  human neurotoxicity and potential for recreational use as an
                  aphrodisiac and euphoriant, among other concerns, as well as
                  the availability of safer substitute drugs with comparable
                  treatment efficacy such as Adderall and Vyvanse.
                </Box>
              </Center>
              <Box display={"flex"}>
                <Center
                  w="14vw"
                  h="16vh"
                  bgColor={"#253c78"}
                  mt="2vw"
                  rounded="10px"
                  roundedLeft={"0"}
                  style={{
                    transform:
                      now === false ? "translate(20vw)" : "translate(0)",
                    transition: "all .5s",
                    opacity: now === false ? "0" : 1,
                  }}
                ></Center>
                <Center
                  w="14vw"
                  h="20vh"
                  ml="2vw"
                  bgColor={"#3f2963"}
                  roundedBottom="10px"
                  style={{
                    transform:
                      now === false ? "translate(20vw)" : "translate(0)",
                    transition: "all .6s",
                    opacity: now === false ? "0" : 1,
                  }}
                ></Center>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
}
