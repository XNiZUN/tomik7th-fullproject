import { Box, Center, Fade } from "@chakra-ui/react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Tilt from "./drawer/vanilla";
import FadeInSection from "./drawer/fadeIn";

export default function Home() {
  const shapes = new Array(5).fill(null);
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
      name: "Bryan Cranston",
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
      name: "Giancarlo Esposito",
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
    speed: 500,
    max: 5,
  };
  return (
    <>
      <Box w="100vw" h="100vh" pos="absolute" overflow={"hidden"} zIndex={0}>
        <Box className="gradient"></Box>
        <Box
          w="100vw"
          h="100vh"
          bgColor={"#000"}
          bgImage="/image/section/BB1.jpeg"
          bgSize={"100%"}
          bgPos="center"
          bgRepeat="no-repeat"
        ></Box>
      </Box>
      <Box display={"flex"} pos="relative" h="100vh">
        <Box>
          <Box h="10vh"></Box>
          <Box
            w="23vw"
            h="30vh"
            bgImage="/image/section/breaking-bad.svg"
            bgSize={"100% "}
            bgPos="center"
            bgRepeat={"no-repeat"}
            id="BB1"
            ml="20vh"
          ></Box>
          <Box h="5vh"></Box>
          <Box
            w="35vw"
            ml="20vh"
            pt="5vh"
            fontSize={"2.2vh"}
            opacity={0.8}
            borderTop="1px solid"
          >
            Breaking Bad is an American crime drama television series created
            and produced by Vince Gilligan. The show aired on AMC from January
            20, 2008, to September 29, 2013, consisting of five seasons for a
            total of 62 episodes.
            <br />
            <br />
            Breaking Bad's first season received generally positive reviews,
            while the rest of its run received unanimous critical acclaim, with
            praise for the performances, direction, cinematography, screenplay,
            story, and character development. Since its conclusion, the show has
            been lauded by critics as one of the greatest television series of
            all time.
          </Box>
        </Box>
        <Box>
          <Tilt options={options}>
            <Box
              w="45vw"
              h="50vh"
              rounded="2rem"
              bgImage="/image/section/BB3.png"
              bgSize={"100% "}
              bgPos="center"
              bgRepeat={"no-repeat"}
              mt="20vh"
              transform={"perspective(1500px) rotateY(-30deg)"}
            ></Box>
          </Tilt>
        </Box>
      </Box>
    </>
  );
}
