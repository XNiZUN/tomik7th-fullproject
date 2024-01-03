import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect, useRef, useState, useMemo } from "react";
import FadeInSection from "@/components/drawer/fadeIn";
export default function App() {
  const [isShown, setIsShown] = React.useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? "Unmount" : "Mount"} fade in section
      </button>
      <h1>Fade in demo</h1>

      {isShown && (
        <>
          <Box>
            <FadeInSection>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
                commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac
                rutrum lorem rutrum eget. Donec libero lorem, luctus in maximus
                at, facilisis sit amet sapien. Pellentesque pharetra non urna ac
                porttitor. Phasellus a dignissim augue, rhoncus sagittis ante.
                Cras quis orci ac risus dapibus pellentesque faucibus in leo.
                Vivamus gravida eros a leo luctus, mollis elementum lectus
                viverra. Vivamus pellentesque pulvinar turpis. Cras rutrum justo
                at mauris aliquam, quis luctus est posuere. Quisque erat neque,
                sollicitudin quis mi et, commodo ultrices magna. Etiam varius
                efficitur elementum. Nam et lacus sit amet mi viverra lacinia.
                Nullam pretium est vitae tortor mollis tempor. Cras tincidunt
                magna eget purus gravida, et ultricies ex consequat.
              </p>
            </FadeInSection>
          </Box>

          <FadeInSection h="100vh">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
              commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac
              rutrum lorem rutrum eget. Donec libero lorem, luctus in maximus
              at, facilisis sit amet sapien. Pellentesque pharetra non urna ac
              porttitor. Phasellus a dignissim augue, rhoncus sagittis ante.
              Cras quis orci ac risus dapibus pellentesque faucibus in leo.
              Vivamus gravida eros a leo luctus, mollis elementum lectus
              viverra. Vivamus pellentesque pulvinar turpis. Cras rutrum justo
              at mauris aliquam, quis luctus est posuere. Quisque erat neque,
              sollicitudin quis mi et, commodo ultrices magna. Etiam varius
              efficitur elementum. Nam et lacus sit amet mi viverra lacinia.
              Nullam pretium est vitae tortor mollis tempor. Cras tincidunt
              magna eget purus gravida, et ultricies ex consequat.
            </p>
          </FadeInSection>
          <FadeInSection h="100vh">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
              commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac
              rutrum lorem rutrum eget. Donec libero lorem, luctus in maximus
              at, facilisis sit amet sapien. Pellentesque pharetra non urna ac
              porttitor. Phasellus a dignissim augue, rhoncus sagittis ante.
              Cras quis orci ac risus dapibus pellentesque faucibus in leo.
              Vivamus gravida eros a leo luctus, mollis elementum lectus
              viverra. Vivamus pellentesque pulvinar turpis. Cras rutrum justo
              at mauris aliquam, quis luctus est posuere. Quisque erat neque,
              sollicitudin quis mi et, commodo ultrices magna. Etiam varius
              efficitur elementum. Nam et lacus sit amet mi viverra lacinia.
              Nullam pretium est vitae tortor mollis tempor. Cras tincidunt
              magna eget purus gravida, et ultricies ex consequat.
            </p>
          </FadeInSection>
          <FadeInSection h="100vh">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
              commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac
              rutrum lorem rutrum eget. Donec libero lorem, luctus in maximus
              at, facilisis sit amet sapien. Pellentesque pharetra non urna ac
              porttitor. Phasellus a dignissim augue, rhoncus sagittis ante.
              Cras quis orci ac risus dapibus pellentesque faucibus in leo.
              Vivamus gravida eros a leo luctus, mollis elementum lectus
              viverra. Vivamus pellentesque pulvinar turpis. Cras rutrum justo
              at mauris aliquam, quis luctus est posuere. Quisque erat neque,
              sollicitudin quis mi et, commodo ultrices magna. Etiam varius
              efficitur elementum. Nam et lacus sit amet mi viverra lacinia.
              Nullam pretium est vitae tortor mollis tempor. Cras tincidunt
              magna eget purus gravida, et ultricies ex consequat.
            </p>
          </FadeInSection>
        </>
      )}
    </div>
  );
}
