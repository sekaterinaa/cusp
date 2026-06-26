import { useRef, useState } from "react";
import Button from "./Button";
import imgChevron from "../../assets/sections/calc-chevron.svg";
import imgKnob from "../../assets/sections/calc-knob.svg";
import imgLegend0 from "../../assets/sections/calc-legend0.svg";
import imgLegend1 from "../../assets/sections/calc-legend1.svg";
import imgLine17 from "../../assets/sections/calc-line17.svg";
import imgLine18 from "../../assets/sections/calc-line18.svg";
import imgCircle0 from "../../assets/sections/calc-circle0.svg";
import imgCircle1 from "../../assets/sections/calc-circle1.svg";

const KNOB_W = 27;

const formatUsd = (value: number) =>
  `$${Math.round(value).toLocaleString("en-US")}`;

type SliderProps = {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  ariaLabel: string;
};

function Slider({ value, min, max, step, onChange, ariaLabel }: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const pct = max > min ? Math.min(1, Math.max(0, (value - min) / (max - min))) : 0;
  // Keep the knob inside the track at the extremes.
  const knobCenter = `calc(${pct} * (100% - ${KNOB_W}px) + ${KNOB_W / 2}px)`;
  // The fill's rounded cap wraps around the knob, so it extends to the knob's trailing edge.
  const fillExpr = `calc(${pct} * (100% - ${KNOB_W}px) + ${KNOB_W}px)`;

  const updateFromClientX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const snapped = Math.round((min + ratio * (max - min)) / step) * step;
    onChange(Math.min(max, Math.max(min, snapped)));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const stopDragging = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      onChange(Math.min(max, value + step));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      onChange(Math.max(min, value - step));
    }
  };

  return (
    <div
      ref={trackRef}
      role="slider"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onKeyDown={handleKeyDown}
      className="h-[33px] overflow-clip relative rounded-[32px] shrink-0 w-full cursor-pointer select-none touch-none"
    >
      <div aria-hidden className="absolute bg-[#f5f5f5] inset-0 pointer-events-none rounded-[32px]" />
      <div
        aria-hidden
        className="absolute border border-black border-solid bottom-[1.59px] left-0 pointer-events-none rounded-[32px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] top-[1.41px]"
        style={{
          width: fillExpr,
          backgroundImage: "linear-gradient(1.3464159384011367deg, rgb(8, 8, 7) 9.1319%, rgb(110, 110, 96) 113.35%)",
        }}
      />
      <div
        aria-hidden
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[26px] pointer-events-none top-1/2 w-[27px]"
        style={{ left: knobCenter }}
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgKnob} />
      </div>
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_12px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}

export default function RetirementCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(20000);
  const [monthlyContribution, setMonthlyContribution] = useState(1500);

  return (
    <div className="content-stretch flex flex-col items-start px-[14px] relative shrink-0 w-full" data-node-id="928:19281">
      <div
        className="box-content content-stretch flex flex-col items-center overflow-clip px-0 pt-0 pb-[80px] relative rounded-[32px] shrink-0 w-full"
        data-node-id="928:19282"
      >
        <div className="content-stretch flex flex-col gap-[56px] items-center pb-[22.992px] pt-[45.984px] relative shrink-0 w-[748.202px] max-w-full" data-node-id="928:19283">
          <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-node-id="928:19284">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.992px] items-start min-w-px relative self-stretch" data-node-id="928:19285">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[7.664px] items-start relative shrink-0 w-full" data-node-id="928:19286">
                <p className="font-aeonik font-normal leading-[56px] relative shrink-0 text-[#1d1611] text-[48px] tracking-[-0.96px] w-full" data-node-id="928:19287">
                  See what&rsquo;s possible
                </p>
                <p className="font-inter font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.16px] w-full" data-node-id="928:19288">{`Explore how your investment could look over time \u2013 with lower fees and a $25 starting deposit.`}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="928:19289">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[342.101px] max-w-full" data-node-id="928:19291">
                  <p className="[word-break:break-word] font-inter font-normal leading-[12.454px] relative shrink-0 text-[12px] text-[#080807] tracking-[-0.144px] w-full" data-node-id="928:19292">{`Portfolio `}</p>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative rounded-tl-[1.916px] rounded-tr-[1.916px] shrink-0 w-full" data-node-id="928:19293">
                    <div className="content-stretch flex h-[45px] items-center px-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="928:19294">
                      <div aria-hidden className="absolute bg-[#f5f5f5] inset-0 pointer-events-none rounded-[12px]" />
                      <div className="content-stretch flex flex-[1_0_0] gap-[1.916px] items-center min-w-px relative" data-node-id="928:19297">
                        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px py-[8px] relative" data-node-id="928:19298">
                            <div className="[word-break:break-word] flex flex-col font-inter font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[0px] text-black text-ellipsis tracking-[-0.168px] whitespace-nowrap" data-node-id="928:19300">
                              <p className="overflow-hidden text-[14px] text-ellipsis">
                                <span className="font-medium leading-[12.454px]">Medium / 8%</span>
                                <span className="leading-[12.454px]">{` `}</span>
                                <span className="leading-[12.454px] text-[rgba(0,0,0,0.5)]">avg. annual return</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="overflow-clip relative shrink-0 size-[28px]" data-node-id="928:19301">
                          <div className="-translate-y-1/2 absolute aspect-[8/4] left-[31.25%] right-[31.25%] top-[calc(50%+0.87px)]">
                            <div className="absolute inset-[-14.29%_-7.14%]">
                              <img alt="" className="block max-w-none size-full" src={imgChevron} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_12px_0px_rgba(0,0,0,0.07)]" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[5.748px] h-[50px] items-start relative shrink-0 w-[342px] max-w-full" data-node-id="928:19304">
                  <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[12.454px] px-[2.395px] relative shrink-0 text-[#080807] w-full whitespace-nowrap" data-node-id="928:19305">
                    <p className="font-inter font-normal relative shrink-0 text-[12px] tracking-[-0.144px]" data-node-id="928:19306">
                      Initial investment
                    </p>
                    <p className="font-inter font-medium relative shrink-0 text-[16px] text-right tracking-[-0.192px]" data-node-id="928:19307">
                      {formatUsd(initialInvestment)}
                    </p>
                  </div>
                  <Slider
                    value={initialInvestment}
                    min={0}
                    max={32000}
                    step={1000}
                    onChange={setInitialInvestment}
                    ariaLabel="Initial investment"
                  />
                </div>
                <div className="content-stretch flex flex-col gap-[5.748px] h-[51px] items-start relative shrink-0 w-[342px] max-w-full" data-node-id="928:19311">
                  <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[12.454px] px-[2.395px] relative shrink-0 text-[#080807] w-full whitespace-nowrap" data-node-id="928:19312">
                    <p className="font-inter font-normal relative shrink-0 text-[12px] tracking-[-0.144px]" data-node-id="928:19313">
                      Monthly contribution
                    </p>
                    <p className="font-inter font-medium relative shrink-0 text-[16px] text-right tracking-[-0.192px]" data-node-id="928:19314">
                      {formatUsd(monthlyContribution)}
                    </p>
                  </div>
                  <Slider
                    value={monthlyContribution}
                    min={0}
                    max={2400}
                    step={100}
                    onChange={setMonthlyContribution}
                    ariaLabel="Monthly contribution"
                  />
                </div>
                </div>
              </div>
            <div
              className="bg-white content-stretch drop-shadow-[0px_4px_16.5px_rgba(0,0,0,0.09)] flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pb-[24px] pt-[48px] px-[48px] relative rounded-[48px] self-stretch"
              data-node-id="928:19318"
            >
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] relative shrink-0 w-full" data-node-id="928:19320">
                <div className="content-stretch flex font-aeonik font-medium items-baseline justify-between relative shrink-0 text-black w-full" data-node-id="1183:7273">
                  <div className="flex flex-col justify-center relative shrink-0 text-[27px] tracking-[-0.108px] w-[180px]" data-node-id="928:19322">
                    <p className="leading-[21.076px]">$250,000.00</p>
                  </div>
                  <div className="flex flex-col justify-center opacity-50 relative shrink-0 text-[19px] tracking-[-0.076px] whitespace-nowrap" data-node-id="928:19325">
                    <p className="leading-[21.076px]">$10,000</p>
                  </div>
                </div>
                <div className="content-stretch flex font-inter font-normal items-center justify-between relative shrink-0 text-[#474743] text-[8px] tracking-[-0.04px] w-full whitespace-nowrap" data-node-id="1183:7274">
                  <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-ellipsis w-[180px]" data-node-id="928:19323">
                    <p className="leading-[9.58px] overflow-hidden text-ellipsis">projected value in 20 years</p>
                  </div>
                  <div className="flex flex-col justify-center opacity-50 overflow-hidden relative shrink-0 text-ellipsis" data-node-id="928:19326">
                    <p className="leading-[9.58px] overflow-hidden text-ellipsis">saved on comission</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.664px] items-start min-h-px relative w-full" data-node-id="928:19327">
                <div className="content-stretch flex flex-[1_0_0] gap-[3.832px] items-start min-h-px relative w-full" data-node-id="928:19328">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.832px] h-full items-start min-w-px relative" data-node-id="928:19329">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-[calc(100%+22.992px)]" data-node-id="928:19330">
                      <div className="bg-[#9e9997] h-px opacity-40 relative shrink-0 w-full" data-node-id="928:19331" />
                      <div className="bg-[#9e9997] h-px opacity-40 relative shrink-0 w-full" data-node-id="928:19332" />
                      <div className="bg-[#9e9997] h-px opacity-40 relative shrink-0 w-full" data-node-id="928:19333" />
                      <div className="bg-[#9e9997] h-px opacity-40 relative shrink-0 w-full" data-node-id="928:19334" />
                    </div>
                    <div className="[word-break:break-word] content-stretch flex font-inter font-normal items-center justify-between leading-[0] relative shrink-0 text-[#080807] text-[7.664px] tracking-[-0.0766px] w-full" data-node-id="928:19335">
                      <div className="flex flex-col justify-center relative shrink-0 w-[19.16px]" data-node-id="928:19336">
                        <p className="leading-[11.496px]">2025</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 text-center w-[19.16px]" data-node-id="928:19337">
                        <p className="leading-[11.496px]">2030</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 text-center w-[19.16px]" data-node-id="928:19338">
                        <p className="leading-[11.496px]">2035</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 text-right w-[19.16px]" data-node-id="928:19339">
                        <p className="leading-[11.496px]">2040</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 text-right w-[19.16px]" data-node-id="928:19340">
                        <p className="leading-[11.496px]">2045</p>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col font-inter font-normal h-full items-start justify-between leading-[0] pb-[15.328px] relative shrink-0 text-[#080807] text-[7.664px] tracking-[-0.0766px] w-[19.16px]" data-node-id="928:19341">
                    <div className="flex flex-col h-fit justify-center overflow-hidden relative shrink-0 text-ellipsis w-full" data-node-id="928:19343">
                      <p className="h-fit leading-[11.496px]">300k</p>
                    </div>
                    <div className="flex flex-col h-fit justify-center overflow-hidden relative shrink-0 text-ellipsis w-full" data-node-id="928:19344">
                      <p className="h-fit leading-[11.496px]">200k</p>
                    </div>
                    <div className="flex flex-col h-fit justify-center overflow-hidden relative shrink-0 text-ellipsis w-full" data-node-id="928:19345">
                      <p className="h-fit leading-[11.496px]">100k</p>
                    </div>
                    <div className="flex flex-col h-fit justify-center overflow-hidden relative shrink-0 text-ellipsis w-full" data-node-id="928:19346">
                      <p className="h-fit leading-[11.496px]">0</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start pt-[12px] relative shrink-0 w-full" data-node-id="928:19347">
                  <div className="content-stretch flex gap-[3.832px] items-center relative shrink-0" data-node-id="928:19348">
                    <div className="relative shrink-0 size-[6px]" data-node-id="928:19349">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLegend0} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-inter font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#474743] text-[10px] text-ellipsis tracking-[-0.05px] whitespace-nowrap" data-node-id="928:19351">
                      <p className="leading-[9.58px] overflow-hidden text-ellipsis">Value with CUSP</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[3.832px] items-center relative shrink-0" data-node-id="928:19352">
                    <div className="relative shrink-0 size-[6px]" data-node-id="928:19353">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLegend1} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-inter font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#474743] text-[10px] text-ellipsis tracking-[-0.05px] whitespace-nowrap" data-node-id="928:19355">
                      <p className="leading-[9.58px] overflow-hidden text-ellipsis">Value with other wealth managers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[97.18px] h-[133px] left-[49.82px] w-[219px] pointer-events-none" data-node-id="928:19356">
                <div className="absolute inset-[-0.9%_-0.55%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine17} />
                </div>
              </div>
              <div className="absolute bottom-[93.18px] h-[97px] left-[49.82px] w-[219px] pointer-events-none" data-node-id="928:19357">
                <div className="absolute inset-[-1.23%_-0.55%]">
                  <img alt="" className="block max-w-none size-full" src={imgLine18} />
                </div>
              </div>
              <div className="absolute bottom-[223.68px] left-[262.32px] size-[13px] pointer-events-none" data-node-id="928:19358">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCircle0} />
              </div>
              <div className="absolute bottom-[183.18px] left-[261.82px] size-[14px] pointer-events-none" data-node-id="928:19359">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCircle1} />
              </div>
            </div>
          </div>
          <Button>Open account</Button>
        </div>
      </div>
    </div>
  );
}
