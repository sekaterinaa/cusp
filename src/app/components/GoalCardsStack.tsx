import { useEffect, useRef, useState } from "react";
import GoalCard from "./GoalCard";
import Button from "./Button";
import "./GoalCardsStack.css";
import goalHalal from "../../assets/sections/goal-halal.png";
import goalCrossborder from "../../assets/sections/goal-crossborder.png";
import goalRetire from "../../assets/sections/goal-retire.png";
import goalIconMoon from "../../assets/sections/goal-icon-moon.svg";
import goalIconGlobe from "../../assets/sections/goal-icon-globe.svg";
import goalIconRocket from "../../assets/sections/goal-icon-rocket.svg";
import goalBgGlow from "../../assets/sections/goal-bg-glow.svg";

const GOAL_GRADIENT =
  "linear-gradient(174.42deg, rgb(26, 17, 10) 9.2971%, rgb(210, 173, 141) 130.78%)";

const cards = [
  {
    title: "Invest the halal way",
    description:
      "Your beliefs and your investments belong together. Our Shariah-compliant tools are designed with exactly that in mind.",
    background: GOAL_GRADIENT,
    image: goalHalal,
    icon: goalIconMoon,
    imagePosition: { left: "0px", top: "-90.02px", width: "1036px", height: "581px" },
  },
  {
    title: "Build a cross-border legacy",
    description:
      "Life as an expat is a journey. Build wealth that keeps up – wherever you live, invest, support your loved ones, or move next",
    background: GOAL_GRADIENT,
    image: goalCrossborder,
    icon: goalIconGlobe,
    imagePosition: { left: "-84px", top: "-39px", width: "1121px", height: "629px" },
  },
  {
    title: "Retire earlier",
    description:
      "The world moves fast. Invest in a financial foundation that stays strong, from education to retirement.",
    background: GOAL_GRADIENT,
    image: goalRetire,
    icon: goalIconRocket,
    imagePosition: { left: "0px", top: "-58px", width: "922px", height: "517px" },
  },
] as const;

const STACK_PEEK = 16;
const STACK_SCALE_STEP = 0.05;
const CARD_NATIVE_WIDTH = 922;
const CARD_NATIVE_HEIGHT = 394;
const CARD_WIDTH_RATIO = 0.7;
const PIN_PER_CARD = 420;

export default function GoalCardsStack() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const wrap = wrapRef.current;
    const section = sectionRef.current;
    if (!wrap || !section) return;

    const total = cards.length;
    let raf = 0;

    const apply = () => {
      raf = 0;

      const stack = stackRef.current;

      // Scale every card so its rendered width is a fixed ratio of the section
      // width, preserving the card's native aspect ratio and internal layout.
      const fitScale = (section.clientWidth * CARD_WIDTH_RATIO) / CARD_NATIVE_WIDTH;
      const scaledCardHeight = CARD_NATIVE_HEIGHT * fitScale;

      // Size the card box to the visible (scaled) height and scale from the top
      // (see CSS), so the frame hugs the card and the 40px gaps above/below it
      // stay exact regardless of viewport width.
      if (stack) stack.style.height = `${scaledCardHeight}px`;

      // The frame hugs its content, so center it in the viewport and size the
      // scroll track from the measured frame height in JS.
      const wrapStyle = getComputedStyle(wrap);
      const padTop = parseFloat(wrapStyle.paddingTop) || 0;
      const padBottom = parseFloat(wrapStyle.paddingBottom) || 0;
      const sectionHeight = section.offsetHeight;
      const pinScroll = (total - 1) * PIN_PER_CARD;
      wrap.style.minHeight = `${sectionHeight + pinScroll + padTop + padBottom}px`;
      const stickyTop = (window.innerHeight - sectionHeight) / 2;
      section.style.top = `${stickyTop}px`;

      // The section is position: sticky, so its own rect is frozen while pinned.
      // Progress must be derived from the wrapper, which scrolls normally.
      const wrapRect = wrap.getBoundingClientRect();
      const pinDistance = Math.max(1, wrap.offsetHeight - padTop - padBottom - sectionHeight);
      const scrolled = stickyTop - (wrapRect.top + padTop);
      const progress = Math.min(1, Math.max(0, scrolled / pinDistance));

      const segment = total > 1 ? 1 / (total - 1) : 1;
      const arrivals = cards.map((_, i) => {
        if (i === 0) return 1;
        return Math.min(1, Math.max(0, (progress - (i - 1) * segment) / segment));
      });

      // Distance needed to push a card from its resting position fully below the
      // frame's bottom edge, so overflow:hidden hides it before it slides up.
      const sectionRect = section.getBoundingClientRect();
      const restingTop = stack ? stack.getBoundingClientRect().top : sectionRect.bottom;
      const hideDistance = Math.max(0, sectionRect.bottom - restingTop) + scaledCardHeight;

      for (let i = 0; i < total; i += 1) {
        const el = itemRefs.current[i];
        if (!el) continue;

        let depth = 0;
        for (let j = i + 1; j < total; j += 1) depth += arrivals[j];

        const enter = (1 - arrivals[i]) * hideDistance;
        const translateY = enter - depth * STACK_PEEK * fitScale;
        const scale = fitScale * (1 - depth * STACK_SCALE_STEP);

        el.style.transform = `translateY(${translateY}px) scale(${scale})`;
        el.style.zIndex = String(i + 1);
        el.style.setProperty("--fit-scale", String(fitScale));
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <div ref={wrapRef} className="goal-cards-wrap flex w-full justify-center self-stretch py-12">
      <section
        ref={sectionRef}
        className="goal-cards-section rounded-[32px] bg-gradient-to-b from-[#3f1b04] to-[#a5470a]"
        aria-label="Built around your goal"
      >
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <img
            src={goalBgGlow}
            alt=""
            className="absolute bottom-[-28%] left-1/2 h-[72%] w-[120%] max-w-none -translate-x-1/2"
          />
        </div>

        <div className="relative z-[1] flex shrink-0 flex-col items-center gap-3 px-6 pb-[80px] pt-20 text-center text-white">
          <p className="font-aeonik font-normal text-[48px] leading-[56px] tracking-[-0.96px]">
            Built around your goal
          </p>
        </div>

        {reducedMotion ? (
          <div className="relative z-[2] flex flex-1 flex-col items-center justify-center gap-4 px-6 py-4">
            {cards.map((card) => (
              <GoalCard key={card.title} {...card} />
            ))}
          </div>
        ) : (
          <div className="goal-cards-stage relative z-[2]">
            <ul ref={stackRef} className="goal-cards-stack">
              {cards.map((card, index) => (
                <li
                  key={card.title}
                  className="goal-cards-stack__item"
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                >
                  <GoalCard {...card} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="relative z-[3] flex shrink-0 justify-center px-6 pb-12 pt-[40px]">
          <Button>Create account</Button>
        </div>
      </section>
    </div>
  );
}
