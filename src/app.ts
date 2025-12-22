import Lenis from "lenis";
import { onReady } from "@xatom/core";
import { app } from "./routes";
import { Toggle } from "peakflow";
import { Cursor } from "peakflow/ui";

onReady(() => {
  global();

  app();
});

/**
 * Code that runs on all pages
 */
function global(): void {
  Toggle.initAll(document.body);
  initLenis();
  const cursor = Cursor.create<"light" | "dark" | "auto">({
    defaultTheme: "dark",
    themes: {
      dark: {
        base: {
          backgroundColor: "#000000",
          "mix-blend-mode": "normal",
          opacity: 1,
          scale: 1,
        },
        hover: {
          opacity: 0.5,
          scale: 2,
        },
      },
      light: {
        base: {
          backgroundColor: "#FFFFFF",
        },
      },
      auto: {
        base: {
          backgroundColor: "#FFFFFF",
          "mix-blend-mode": "difference",
          opacity: 1,
        },
        hover: {
          opacity: 1,
        },
      },
    },
    style: {
      width: "0.75rem",
      height: "0.75rem",
      borderRadius: "50%",
      backgroundColor: "#000000",
      marginRight: "-0.5rem",
    },
    breakpoints: {
      992: {
        display: "block",
      },
    },
  });
}

function initLenis(): void {
  const lenis = new Lenis({
    autoRaf: true,
  });

  const resizeObserver = new ResizeObserver(() => {
    lenis.resize();
  });

  resizeObserver.observe(document.body);
}
