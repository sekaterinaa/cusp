import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import imgSlide1 from "../../assets/way-slide-1.png";
import imgSlide2 from "../../assets/way-slide-2.png";
import imgSlide3 from "../../assets/way-slide-3.png";
import imgSlide4 from "../../assets/way-slide-4.png";

type Slide = {
  title: string;
  description: string;
  image: string;
};

// Add more slides here — the counter, progress bar and scroll length adapt automatically.
const slides: Slide[] = [
  {
    title: "The world's markets, from right here.",
    description:
      "Manage your portfolio yourself, delegate it to CUSP\u2019s experts, or use our robo-advisory services.",
    image: imgSlide1,
  },
  {
    title: "AI insights to make your portfolio stronger",
    description:
      "A 0\u201310 portfolio score and four pillar insights tell you what's working, what isn't, and what to do about it \u2014 no jargon required",
    image: imgSlide2,
  },
  {
    title: "A portfolio built around your goal",
    description:
      "Remove conflict between financial decisions and personal moral values with our shariah investment tools",
    image: imgSlide3,
  },
  {
    title: "Shariah screening",
    description:
      "Curated Shariah-compliant stocks and ETFs, screened to trusted standards \u2014 so your portfolio can grow without compromise",
    image: imgSlide4,
  },
];

const TRACK_HEIGHT = 357;
const FADE_MS = 350;

export default function InvestWays() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const count = slides.length;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const dist = wrap.offsetHeight - window.innerHeight;
      const p = dist > 0 ? Math.min(1, Math.max(0, -rect.top / dist)) : 0;
      setProgress(p);
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
  }, [count]);

  const activeIndex = count > 1 ? Math.min(count - 1, Math.round(progress * (count - 1))) : 0;

  // Gentle fade: when the active slide changes, fade the current content out,
  // swap to the new slide, then fade it back in.
  const [displayIndex, setDisplayIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (activeIndex === displayIndex) return;
    setVisible(false);
    const t = setTimeout(() => {
      setDisplayIndex(activeIndex);
      setVisible(true);
    }, FADE_MS);
    return () => clearTimeout(t);
  }, [activeIndex, displayIndex]);

  const slide = slides[displayIndex];

  const thumbHeight = TRACK_HEIGHT / count;
  const thumbTop = count > 1 ? progress * (TRACK_HEIGHT - thumbHeight) : 0;

  return (
    <div
      ref={wrapRef}
      className="relative w-full bg-white"
      style={{ height: `${count * 100}vh` }}
      data-node-id="827:2593"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-[24px]">
        <div className="flex w-full max-w-[1100px] flex-col items-center">
          <div className="flex w-full items-center justify-between gap-[40px]">
          <div className="flex w-[383px] shrink-0 items-start gap-[29px]">
            <div className="relative w-[4px] shrink-0" style={{ height: TRACK_HEIGHT }}>
              <div className="absolute inset-0 rounded-[32px] bg-black/10" />
              <div
                className="absolute left-0 w-[4px] rounded-[32px] bg-[#e0842b]"
                style={{ height: thumbHeight, top: thumbTop }}
              />
            </div>
            <div className="relative min-w-px flex-1" style={{ minHeight: TRACK_HEIGHT }}>
              <div
                className="flex flex-col gap-[12px] text-black transition-opacity ease-in-out"
                style={{ opacity: visible ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
              >
                <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.16px]">
                  {displayIndex + 1}/{count}
                </p>
                <p className="font-aeonik font-normal text-[48px] leading-[56px] tracking-[-0.96px]">{slide.title}</p>
                <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.16px]">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[418px] w-[554px] shrink-0">
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 size-full object-contain transition-opacity ease-in-out"
              style={{ opacity: visible ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
            />
          </div>
          </div>

          <Button className="mt-[32px]">Download CUSP</Button>
        </div>
      </div>
    </div>
  );
}
