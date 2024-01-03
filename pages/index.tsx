import { Box, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Home from "@/components/home";
import End from "@/components/drawer/end";
import Cast from "@/components/cast";
import Movie from "@/components/movie";
import Story2 from "@/components/story2";
import Team from "@/components/portfolio2";
import { useRouter } from "next/router";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function Index() {
  const [active, setActive] = React.useState(false);
  const [now, setNow] = React.useState(0);
  console.log(now);
  console.log(active);
  const icons = [
    {
      src: "/image/icons8-discord-30.png",
    },
    {
      src: "/image/icons8-instagram-24.png",
    },
    {
      src: "/image/icons8-linkedin-30.png",
    },
    {
      src: "/image/icons8-twitter-30.png",
    },
  ];
  const options = {
    reverse: true,
    reverseY: true,
    speed: 1000,
    max: 30,
    glare: 1,
  };
  const scroll = (key: any) => {
    let sections: any = document.querySelectorAll(".section");
    if (key) {
      sections[key].scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleRight = () => {
    let imgs: any = document.querySelectorAll(".section");
    console.log(now);
    if (now < 5) {
      setNow(now + 1);
    }
    imgs[now + 1].scrollIntoView({ behavior: "smooth" });
  };
  const handleLeft = () => {
    let imgs: any = document.querySelectorAll(".section");
    console.log(now);
    if (now > 0) {
      setNow(now - 1);
    }
    imgs[now - 1].scrollIntoView({ behavior: "smooth" });
  };

  let router = useRouter();

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

  const section: any = [
    {
      src: <Home></Home>,
    },
    {
      src: <Cast></Cast>,
    },
    {
      src: <Story2></Story2>,
    },
    {
      src: <Movie></Movie>,
    },
    {
      src: <Team></Team>,
    },
    {
      src: <End></End>,
    },
  ];
  return (
    <>
      <Center pos="fixed" top="40vh" right="0vw" zIndex={300}>
        <Box w="7rem">
          <Center w="7rem">
            <Box
              w="3rem"
              h="3rem"
              bgImage={"/image/section/prev.svg"}
              bgSize={"40%"}
              bgPos="center"
              bgRepeat={"no-repeat"}
              onClick={() => {
                handleLeft();
              }}
              transform={"rotate(90deg)"}
              bgColor="#ffffff50"
              rounded={"2rem"}
              _hover={{
                bgColor: "#ffffff80",
                width: "5rem",
              }}
              transition="all .2s"
            ></Box>
          </Center>

          <Box h="1.5rem"></Box>
          <Center w="7rem">
            <Box
              w="3rem"
              h="3rem"
              bgImage={"/image/section/next.svg"}
              bgSize={"40%"}
              bgPos="center"
              bgRepeat={"no-repeat"}
              onClick={() => {
                handleRight();
              }}
              transform={"rotate(90deg)"}
              bgColor="#ffffff50"
              rounded={"2rem"}
              _hover={{
                bgColor: "#ffffff80",
                width: "5rem",
              }}
              transition="all .2s"
            ></Box>
          </Center>
        </Box>
      </Center>
      <Box pos="fixed" left="50vw">
        {section.map((item: any, key: any) => (
          <Box ml="0rem" opacity={"0"} onClick={() => scroll(key)}>
            {key}
          </Box>
        ))}
      </Box>
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
      <Center pos="fixed" w="4rem" h="100vh" left=".5rem" zIndex="300">
        <Box>
          {icons.map((item, key) => (
            <Box w="3rem" h="4rem" overflow="visble">
              <MouseParallaxContainer
                globalFactorX={0.4}
                globalFactorY={1}
                resetOnLeave={true}
              >
                <MouseParallaxChild factorX={-0.4} factorY={-1}>
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
      <Box>
        <Box w="100vw" h="100vh" overflow={"hidden"}>
          {section.map((item: any, key: any) => (
            <Box
              h={"100vh"}
              w="100vw"
              overflow={"hidden"}
              className="section"
              pos="relative"
              key={key}
              onWheel={(event: any) => {
                if (event.nativeEvent.wheelDelta > 0) {
                } else {
                }
              }}
            >
              {section[key].src}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
