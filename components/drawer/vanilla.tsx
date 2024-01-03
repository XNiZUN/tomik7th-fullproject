import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Tilt(props: any) {
  const { options, ...rest } = props;
  const tilt: any = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
