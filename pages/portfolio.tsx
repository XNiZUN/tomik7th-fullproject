import { Box, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import FadeInSection from "../components/drawer/fadeIn";
import Hover1 from "../components/portfolio/hover1";
import Hover2 from "../components/portfolio/hover2";
import Hover3 from "../components/portfolio/hover3";

export default function Portfolio() {
  const about = new Array(3).fill(null);
  let divs = [
    {
      src: <Hover1></Hover1>,
    },
    {
      src: <Hover2></Hover2>,
    },
    {
      src: <Hover3></Hover3>,
    },
  ];
  const [active, setActive] = React.useState(false);
  const [now, setNow] = React.useState(false);
  console.log(now);
  // useEffect(() => {
  // const element: any = document.getElementById("team");
  // const rect: any = element.getBoundingClientRect();
  // window.addEventListener("scroll", function () {
  //   let value: any = window.scrollY;
  // if (value < rect.top) {
  //   setActive(false);
  // }
  //   });
  // });
  useEffect(() => {
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
  });
  const icons = [
    {
      src: "/image/icons8-twitter-30.png",
    },
    {
      src: "/image/icons8-discord-30.png",
    },
    {
      src: "/image/icons8-instagram-24.png",
    },
    {
      src: "/image/icons8-linkedin-30.png",
    },
  ];
  return (
    <>
      <Box
        w="1rem"
        h="1rem"
        border="1px solid"
        rounded="50%"
        bgColor="#fff"
        id="cursor"
        pos="fixed"
        zIndex={900}
        left="0"
        top="0"
        transform="translate(-50%, -50%)"
        transition={"0ms"}
        pointerEvents="none"
      ></Box>
      <Box
        w="3rem"
        h="3rem"
        border="1px solid"
        rounded="50%"
        id="cursor2"
        pos="fixed"
        zIndex={900}
        left="0"
        top="0"
        transform="translate(-50%, -50%)"
        transition={"50ms"}
        pointerEvents="none"
      ></Box>
      <Center pos="fixed" w="4rem" h="40vh" top="0vh" left=".5rem" zIndex="300">
        <Box>
          {icons.map((item, key) => (
            <Box w="3rem" h="4rem" overflow="visble">
              <MouseParallaxContainer
                globalFactorX={0.6}
                globalFactorY={1}
                resetOnLeave={true}
              >
                <MouseParallaxChild factorX={-0.6} factorY={-1}>
                  <Box
                    bgImage={icons[key].src}
                    w="4rem"
                    h="4rem"
                    bgSize={"50%"}
                    bgPos="0 center"
                    bgRepeat={"no-repeat"}
                    mt="1rem"
                  ></Box>
                </MouseParallaxChild>
              </MouseParallaxContainer>
            </Box>
          ))}
        </Box>
      </Center>
      <Box h="50vh" pos="relative" zIndex={200}>
        <Box>
          <Center>
            <Box
              pos={"absolute"}
              w="80vw"
              h="0vh"
              borderBottom={"1px solid #ffffff50"}
            ></Box>
            <Box
              w="20vw"
              h="26vh"
              bgImage="/image/section/breaking-bad.svg"
              bgSize={"80% "}
              bgPos="center"
              bgRepeat={"no-repeat"}
              bgColor={"#0c0c0e"}
              zIndex="1"
            ></Box>
          </Center>
        </Box>

        <Box h="10vh"></Box>
        <Center>
          <Center
            w="19rem"
            h="3rem"
            border={"1px solid "}
            color={active === true ? "black" : ""}
            className={active === true ? "GR-team" : ""}
            fontSize="1.9rem"
            fontWeight={"500"}
            fontFamily="sans-serif"
            rounded={"2rem"}
            _hover={{
              width: "20rem",
            }}
            transition="all .3s"
            onClick={() => {
              active === false ? setActive(true) : setActive(false);
              now === false ? setNow(false) : setNow(false);
            }}
          >
            Click On Me
          </Center>
        </Center>
      </Box>
      <Box
        w="100vw"
        pos="relative"
        zIndex={200}
        onWheel={(event: any) => {
          if (event.nativeEvent.wheelDelta > 0) {
            setNow(true);
          } else {
            setNow(true);
          }
        }}
      >
        <Box
          w="100vw"
          h="50vh"
          pos="sticky"
          top="50vh"
          overflow="hidden"
          id="team"
        >
          <Box display={"flex"}>
            <Box
              w="19vw"
              h="10rem"
              bgImage={"/image/portfolio/about-pen-1.png"}
              bgRepeat="no-repeat"
              bgSize="100%"
              zIndex="1"
              transform={
                active === false ? "translate(16.5vw)" : "translate(-5vw)"
              }
              transition="all .7s"
              ml="7vw"
            ></Box>
            <Box
              w="52vw"
              h="7.5rem"
              bgImage={"/image/portfolio/about-pen-2.png"}
              bgRepeat="no-repeat"
              bgSize="100%"
              transform={
                active === false ? "translate(0vw)" : "translate(50vw)"
              }
              transition="all .7s"
            ></Box>
          </Box>
          <Center>
            <Box
              w="7rem"
              h="7rem"
              bgImage="/image/section/mouse.png"
              bgRepeat={"no-repeat"}
              bgPos="center 0rem"
              opacity={active === false || now === true ? 0 : 1}
            >
              <Box h="5rem"></Box>
              <Center>Scroll Down</Center>
            </Box>
          </Center>
        </Box>

        <Box h={active === false ? "0vh" : "330vh"} w="100vw" overflow="hidden">
          {about.map((item, key) => (
            <FadeInSection>
              <Center w="100vw" h="80vh" pos="relative">
                {divs[key].src}
              </Center>
            </FadeInSection>
          ))}
          <Center h="40vh">
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
              mb="7vh"
              pr="1vw"
              opacity={0.6}
            >
              Copyrights @ 2022 MC.Dalai . All rights reserved.
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
