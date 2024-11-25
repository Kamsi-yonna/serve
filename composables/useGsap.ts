// composables/use-gsap.ts
import { gsap } from "gsap";

export default function useGsap() {
  const nuxtApp = useNuxtApp();

  // Define the GSAP effects
  const gsapEffects = [
    {
      id: "fadeSlideTo",
      props: { opacity: 0, x: 500, repeat: -1 },
      animate: "to",
    },
    {
      id: "fadeSlideFrom",
      props: { opacity: 0, x: 300, repeat: -1 },
      animate: "from",
    },
    {
      id: "fadeSlideFromTo",
      props: { opacity: 0, x: 800, duration: 5, repeat: -1 },
      props2: { opacity: 1, x: 200, duration: 5, repeat: -1 },
      animate: "fromTo",
    },
  ];

  // Register theseffects
  gsapEffects.forEach((effect) => {
    gsap.registerEffect({
      name: effect.id,
      defaults: { duration: 1 },
      extendTimeline: true,
      effect(targets: HTMLElement, config: any) {
        if (effect.animate === "from") {
          return gsap.from(targets, { ...effect.props, ...config });
        } else if (effect.animate === "fromTo") {
          return gsap.fromTo(
            targets,
            { ...effect.props, ...config },
            { ...effect.props2 }
          );
        } else {
          return gsap.to(targets, { ...effect.props, ...config });
        }
      },
    });
  });

  return {
    gsap: nuxtApp.$gsap,
    ScrollTrigger: nuxtApp.$ScrollTrigger,
    ScrollToPlugin: nuxtApp.$ScrollToPlugin,
    fadeSlideTo: (targets: HTMLElement, config: any) =>
      gsap.effects.fadeSlideTo(targets, config),
    fadeSlideFrom: (targets: HTMLElement, config: any) =>
      gsap.effects.fadeSlideFrom(targets, config),
    fadeSlideFromTo: (targets: HTMLElement, config: any) =>
      gsap.effects.fadeSlideFromTo(targets, config),
  };
}
