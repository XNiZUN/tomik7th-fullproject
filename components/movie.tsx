import Tilt from "@/components/drawer/vanilla";
import { Box, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import FadeInSection from "./drawer/fadeIn";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
export default function Movie() {
  const movie = [
    {
      st: "M",
    },
    {
      st: "O",
    },
    {
      st: "V",
    },
    {
      st: "I",
    },
    {
      st: "E",
    },
  ];
  const seasonimg: any = [
    {
      src: "/image/section/BB-s1.jpeg",
    },
    {
      src: "/image/section/BB1.jpeg",
    },
    {
      src: "/image/section/BB-s3.jpeg",
    },
    {
      src: "/image/section/BB-s4.webp",
    },
    {
      src: "/image/section/BB-s5.jpeg",
    },
  ];
  const title = [
    {
      title: "Season 1 (2008)",
    },
    {
      title: "Season 2 (2009)",
    },
    {
      title: "Season 3 (2010)",
    },
    {
      title: "Season 4 (2011)",
    },
    {
      title: "Season 5 (2012)",
    },
  ];
  const [active, setActive] = React.useState(1);
  const [now, setNow] = React.useState(false);
  const handleRight = () => {
    if (active < 4) {
      setActive(active + 1);
    }
  };
  const handleLeft = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };
  const text = [
    {
      text: "Walter, diagnosed with inoperable lung cancer, conspires with Jesse to cook crystal meth to pay for his treatment and provide financial security for his family.After a failed attempt by Walter and Jesse to start their own distribution network leaves one of their dealers arrested and one murdered.After a failed attempt by Walter and Jesse to start their own distribution network leaves one of their dealers arrested and one murdered.",
    },
    {
      text: " After a failed attempt by Walter and Jesse to start their own distribution network leaves one of their dealers arrested and one murdered.After a failed attempt by Walter and Jesse to start their own distribution network leaves one of their dealers arrested and one murdered.",
    },
    {
      text: "Skyler learns of Walt's crimes and seeks a divorce from him. Walt briefly retires from the drug trade, but Gus offers him a job cooking meth at a hidden lab with an assistant, Gale.After a failed attempt by Walter and Jesse to start their own distribution network leaves one of their dealers arrested and one murdered. ",
    },
    {
      text: "After a failed attempt by Walter and Jesse to start their own distribution network leaves one of their dealers arrested and one murdered.After a failed attempt by Walter and Jesse to start their own distribution network leaves one of their dealers arrested and one murdered.",
    },
    {
      text: "When their accomplice Todd kills a child witness during a methylamine theft, Jesse and Mike sell their share of the methylamine to Declan, another distributor.After a failed attempt by Walter and Jesse to start their own distribution network leaves one of their dealers arrested and one murdered. ",
    },
  ];
  const options = {
    reverse: true,
    reverseY: true,
    speed: 1000,
    max: 30,
    glare: 1,
  };
  const hover = () => {
    let cursorinner: any = document.querySelector("#cursor");
    let cursorinner2: any = document.querySelector("#cursor2");

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner2.style.left = x + "px";
      cursorinner2.style.top = y + "px";
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });
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
            {movie.map((item, key) => (
              <Center
                _hover={{
                  rounded: "5px",
                  fontSize: "15vh",
                  color: "#08fdd8",
                }}
                transition=".2s"
                className="gradient-hover"
              >
                {movie[key].st}
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
            {movie.map((item, key) => (
              <Center
                _hover={{
                  rounded: "5px",
                  fontSize: "15vh",
                  color: "#08fdd8",
                }}
                transition=".2s"
                className="gradient-hover"
              >
                {movie[key].st}
              </Center>
            ))}
          </Box>
        </Center>
        <Tilt options={options} transition="all .5s">
          <Center
            w="30vw"
            h="80vh"
            bgImage={"/image/section/section-movie.jpg"}
            bgSize={"100% "}
            bgPos="center"
            bgRepeat={"no-repeat"}
            rounded="10px"
            onClick={() => (now === false ? setNow(true) : setNow(false))}
          ></Center>
        </Tilt>
        <Box h="80vh">
          <Box h="12vh"></Box>
          <Box
            ml="2vw"
            w={now === false ? "0px" : "50vw"}
            overflow="hidden"
            transition={"all .5s"}
            display={"flex"}
            h={"68vh"}
          >
            {" "}
            <Box h="68vh" w="25vw">
              <Box
                bgColor={"#ffffff20"}
                w="23vw"
                rounded="10px"
                h={"50vh"}
                style={{
                  transform: now === false ? "translate(20vw)" : "translate(0)",
                  transition: "all .4s",
                  opacity: now === false ? "0" : 1,
                }}
              >
                {movie.map((item, key) => (
                  <Box
                    h={active === key ? "" : "0vh"}
                    transition="all 0s"
                    pos="absolute"
                  >
                    <Center h="7vh" overflowY={"hidden"}>
                      {" "}
                      <Center
                        fontSize={"5vh"}
                        fontFamily="system-ui"
                        transform={
                          active === key
                            ? "translateY(0vh)"
                            : "translateY(10vh)"
                        }
                        transition="all .8s"
                      >
                        {title[key].title}
                      </Center>
                    </Center>

                    <Center
                      opacity={active === key ? 1 : 0}
                      transition="all .4s"
                    >
                      <Box w={"22vw"} textAlign={"justify"}>
                        {text[key].text}
                      </Box>
                    </Center>
                  </Box>
                ))}
              </Box>

              <Box
                display="flex"
                alignItems={"flex-end"}
                h="18vh"
                style={{
                  transform: now === false ? "translate(20vw)" : "translate(0)",
                  transition: "all .5s",
                  opacity: now === false ? "0" : 1,
                }}
              >
                <Box
                  w="7vw"
                  h="7vw"
                  className="gradient-hover-blue"
                  rounded="10px"
                ></Box>
                <Box
                  w="7vw"
                  h="7vw"
                  className="gradient-green"
                  rounded="10px"
                  ml="2rem"
                ></Box>
              </Box>
            </Box>
            <Box
              w="25vw"
              h="70vh"
              overflow={"hidden"}
              style={{
                transform: now === false ? "translate(20vw)" : "translate(0)",
                transition: "all .6s",
                opacity: now === false ? 0 : 1,
              }}
            >
              <Box w="125vw" h="70vh" display={"flex"}>
                <Box
                  pos={"absolute"}
                  w={now === false ? "0" : "25vw"}
                  h="70vh"
                  zIndex="2"
                >
                  <Center>
                    <MouseParallaxContainer
                      globalFactorX={1}
                      globalFactorY={1}
                      resetOnLeave={true}
                    >
                      <Center
                        w={"12.5vw"}
                        h="70vh"
                        opacity={0}
                        _hover={{
                          opacity: 1,
                        }}
                      >
                        <MouseParallaxChild factorX={-1} factorY={-1}>
                          <Box
                            w={active === 0 ? "0" : "5vw"}
                            h="10vh"
                            bgImage={"/image/section/prev.svg"}
                            bgSize={"200%"}
                            bgPos="center"
                            bgRepeat={"no-repeat"}
                            onClick={() => {
                              handleLeft();
                            }}
                            className="GR-chevron"
                          ></Box>
                        </MouseParallaxChild>
                      </Center>
                    </MouseParallaxContainer>
                    <MouseParallaxContainer
                      globalFactorX={1}
                      globalFactorY={1}
                      resetOnLeave={true}
                    >
                      <Center
                        w="12.5vw"
                        h="70vh"
                        opacity={0}
                        _hover={{
                          opacity: 1,
                        }}
                      >
                        <MouseParallaxChild factorX={-1} factorY={-1}>
                          <Box
                            w={active === 4 ? "0" : "5vw"}
                            h="10vh"
                            bgImage={"/image/section/next.svg"}
                            bgSize={"200%"}
                            bgPos="center"
                            bgRepeat={"no-repeat"}
                            onClick={() => {
                              handleRight();
                            }}
                            className="GR-chevron"
                          ></Box>
                        </MouseParallaxChild>
                      </Center>
                    </MouseParallaxContainer>
                  </Center>
                </Box>
                {movie.map((item, key) => (
                  <>
                    <Box className="GR-movie"></Box>
                    <Box
                      w={"25vw"}
                      h="68vh"
                      bgImage={seasonimg[key].src}
                      bgSize={"cover"}
                      bgPos={key === 3 ? "left" : "center"}
                      bgRepeat="no-repeat"
                      rounded="1rem"
                      pointerEvents={key === active ? "auto" : "none"}
                      overflow="hidden"
                      opacity={active === key ? 1 : 0}
                      transform={
                        active === key ? "translate(-" + key * 25 + "vw)" : ""
                      }
                      transition="all .5s"
                    >
                      <Box
                        w="8rem"
                        h="5rem"
                        bgImage="/image/section/breaking-bad.svg"
                        bgSize={"100% "}
                        bgPos="center"
                        bgRepeat={"no-repeat"}
                        mt="1rem"
                        ml="2rem"
                      ></Box>
                    </Box>
                  </>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
}
