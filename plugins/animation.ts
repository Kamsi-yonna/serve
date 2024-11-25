// plugins/gsap.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.registerEffect({
    name: "bouncer",
    effect: (targets: HTMLElement, config: any) => {
      return gsap.from(targets, {
        duration: config.duration || 1,
        x: config.x || 600,
        y: -50,
        opacity: 0,
        ease: "bounce.out",
      });
    },
    defaults: { duration: 1 },
    extendTimeline: true,
  });

  return {
    provide: {
      gsap,
      ScrollTrigger,
      ScrollToPlugin,
    },
  };
});
