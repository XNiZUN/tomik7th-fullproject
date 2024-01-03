import { Box, Center, Fade } from "@chakra-ui/react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Tilt from "./drawer/vanilla";
import FadeInSection from "./drawer/fadeIn";
import React from "react";

export default function Cast() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(1);
  const [click, setClick] = React.useState(false);
  const shapes = new Array(5).fill(null);
  const cast1 = [
    {
      st: "C",
    },
    {
      st: "A",
    },
    {
      st: "S",
    },
    {
      st: "T",
    },
  ];
  const cast: any = [
    {
      src: "/image/section/Cast-1.jpeg",
    },
    {
      src: "/image/section/Cast-2.webp",
    },
    {
      src: "/image/section/Cast-3.jpeg",
    },
    {
      src: "/image/section/Cast-4.jpeg",
    },
    {
      src: "/image/section/Cast-5.jpeg",
    },
  ];
  const name = [
    {
      name: "B. Cranston",
    },
    {
      name: "Aoron Paul",
    },
    {
      name: "Dean Norris",
    },
    {
      name: "Anna Gunn",
    },
    {
      name: "G. Esposito",
    },
  ];
  const movieName = [
    {
      mname: "Walter White",
    },
    {
      mname: "Jesse Pinkman",
    },
    {
      mname: "Hank Schrader",
    },
    {
      mname: "Skylar White",
    },
    {
      mname: "Gus Fring",
    },
  ];
  const options = {
    reverse: true,
    reverseY: true,
    speed: 1000,
    max: 30,
    glare: 1,
  };
  return (
    <>
      <Center w="100vw" h="100vh">
        <Center
          w={"30vw"}
          h="12vh"
          fontSize={"12vh"}
          fontWeight="800"
          mt={"-70vh"}
          ml="30vw"
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
            {cast1.map((item, key) => (
              <Center
                _hover={{
                  rounded: "5px",
                  fontSize: "15vh",
                  color: "#08fdd8",
                }}
                transition=".2s"
                className="gradient-hover"
              >
                {cast1[key].st}
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
            {cast1.map((item, key) => (
              <Center
                _hover={{
                  rounded: "5px",
                  fontSize: "15vh",
                  color: "#08fdd8",
                }}
                transition=".2s"
                className="gradient-hover"
              >
                {cast1[key].st}
              </Center>
            ))}
          </Box>
        </Center>
        <Box>
          <Tilt options={options}>
            <Center
              w={"30vw"}
              h={"80vh"}
              bgImage={"/image/section/Section-cast.jpg"}
              bgSize={"100% 100%"}
              bgPos="center"
              bgRepeat={"no-repeat"}
              rounded="10px"
              onClick={() => (now === false ? setNow(true) : setNow(false))}
              transition="all .5s"
            ></Center>
          </Tilt>
        </Box>

        <Box h="80vh">
          <Box h="12vh"></Box>
          <Center
            h={"68vh"}
            w={now === false ? "0px" : "55vw"}
            overflow="hidden"
            transition={"all .5s"}
            ml="2vh"
          >
            <Box display="flex">
              <Box>
                <Box
                  h="60vh"
                  w="20vw"
                  rounded={"1rem"}
                  overflow="hidden"
                  style={{
                    transform:
                      now === false ? "translate(20vw)" : "translate(0)",
                    transition: "all .4s",
                    opacity: now === false ? "0" : 1,
                  }}
                >
                  {shapes.map((item, key) => (
                    <>
                      <Center
                        h={"60vh"}
                        w={now === false ? "0px" : "20vw"}
                        bgImage={cast[key].src}
                        bgSize={"cover"}
                        bgPos="center"
                        bgRepeat={"no-repeat"}
                        pos="absolute"
                        transform={
                          active === key
                            ? "translateY(0vh)"
                            : active < key
                            ? "translateY(0vh)"
                            : "translateY(-60vh)"
                        }
                        transition={"all .6s"}
                        zIndex={
                          key === 4
                            ? 0
                            : key === 3
                            ? 1
                            : key === 2
                            ? 2
                            : key === 1
                            ? 3
                            : key === 0
                            ? 4
                            : ""
                        }
                        rounded="1rem"
                      ></Center>
                    </>
                  ))}
                </Box>
                <Box
                  w="20vw"
                  h="8vh"
                  overflow={"hidden"}
                  style={{
                    transform:
                      now === false ? "translate(20vw)" : "translate(0)",
                    transition: "all .4s",
                    opacity: now === false ? "0" : 1,
                  }}
                >
                  {shapes.map((item, key) => (
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      w="20vw"
                      h="7vh"
                      border={"1px solid #ffffff40"}
                      rounded="10px"
                      opacity={active === key ? 1 : 0}
                      transform={
                        active === key ? "translateY(-" + key * 8 + "vh)" : ""
                      }
                      _hover={{
                        bgColor: "#08fdd820",
                      }}
                      transition={"all .3s"}
                      mt="1vh"
                    >
                      <Center
                        fontSize={"5vh"}
                        fontWeight="900"
                        className="letter-border"
                        transition="all 1s"
                      >
                        {name[key].name}
                      </Center>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Center
                ml="2vh"
                w={click === false ? "0" : "20vw"}
                h="60vh"
                bgColor={"#ffffff20"}
                rounded="1rem"
                transition={"all .5s"}
              >
                <Center opacity={click === false ? 0 : 1}>
                  sbfachifndcipvjwsnvfjlk
                </Center>
              </Center>

              <Box
                w="14vw"
                h="60vh"
                style={{
                  transform: now === false ? "translate(20vw)" : "translate(0)",
                  transition: "all .4s",
                  opacity: now === false ? "0" : 1,
                }}
              >
                {shapes.map((item, key) => (
                  <Center>
                    <Center
                      mt="1vh"
                      w={active === key ? "12vw" : "11vw"}
                      h="3rem"
                      border={"1px solid #ffffff50"}
                      rounded="10px"
                      transition={"all .1s ease-in"}
                      bgColor={active === key ? "white" : "transparent"}
                      color={active === key ? "black" : "white"}
                      pos="relative"
                      onClick={() => setActive(key)}
                      _hover={{
                        bgColor: key === active ? "white" : "#08fdd810",
                      }}
                    >
                      <Box
                        fontSize={"1.3rem"}
                        fontWeight="400"
                        fontFamily={"system-ui"}
                      >
                        {movieName[key].mname}
                      </Box>
                    </Center>
                  </Center>
                ))}

                <Center
                  style={{
                    transform:
                      now === false ? "translate(20vw)" : "translate(0)",
                    transition: "all .4s",
                    opacity: now === false ? "0" : 1,
                  }}
                >
                  <Box
                    w="11vw"
                    h="20vh"
                    mt="1vh"
                    rounded={"10px"}
                    bgColor={"#455CE9"}
                    onClick={() =>
                      click === false ? setClick(true) : setClick(false)
                    }
                  ></Box>
                </Center>
              </Box>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
}
