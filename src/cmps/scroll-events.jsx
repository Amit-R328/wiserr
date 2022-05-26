import React, {useState, useEffect, useLayoutEffect} from 'react';

export const ScrollEvents = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrolledLayout, setScrolledLayout] = useState(false)

  useEffect(() => {
    console.log(">>>> useEffect");

    const handleScroll = e => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useLayoutEffect(() => {
    console.log(">>>> useLayoutEffect");

    const handleScroll = e => {
      setScrolledLayout(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`Header ${scrolledLayout ? "Header--scrolledLayout" : ""} ${scrolled ? "Header--scrolled" : ""}`}>
      Header
    </header>
  );
}




















// import React, { useState, useEffect, useRef } from "react";

// export default function ScrollEvents() {
//   const prevScrollY = useRef(0);

//   const [goingUp, setGoingUp] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (prevScrollY.current < currentScrollY && goingUp) {
//         setGoingUp(false);
//       }
//       if (prevScrollY.current > currentScrollY && !goingUp) {
//         setGoingUp(true);
//       }

//       prevScrollY.current = currentScrollY;
//       console.log(goingUp, currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [goingUp]);

//   return (
//     <div>
//       {Array(50)
//         .fill("foo")
//         .map((f, i) => {
//           return <p key={i}>{f}</p>;
//         })}
//     </div>
//   );
// }
