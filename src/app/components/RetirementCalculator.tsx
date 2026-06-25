import Button from "./Button";
import imgChevron from "../../assets/sections/calc-chevron.svg";
import imgKnob from "../../assets/sections/calc-knob.svg";
import imgLegend0 from "../../assets/sections/calc-legend0.svg";
import imgLegend1 from "../../assets/sections/calc-legend1.svg";
import imgLine17 from "../../assets/sections/calc-line17.svg";
import imgLine18 from "../../assets/sections/calc-line18.svg";
import imgCircle0 from "../../assets/sections/calc-circle0.svg";
import imgCircle1 from "../../assets/sections/calc-circle1.svg";

export default function RetirementCalculator() {
  return (
    <div className="content-stretch flex flex-col items-start px-[14px] relative shrink-0 w-full" data-node-id="928:19281">
      <div
        className="box-content content-stretch flex flex-col items-center overflow-clip px-0 py-[32px] relative rounded-[32px] shrink-0 w-full"
        data-node-id="928:19282"
      >
        <div className="content-stretch flex flex-col gap-[56px] items-center pb-[22.992px] pt-[45.984px] relative shrink-0 w-[748.202px] max-w-full" data-node-id="928:19283">
          <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-node-id="928:19284">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.992px] items-start min-w-px relative self-stretch" data-node-id="928:19285">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[7.664px] items-start relative shrink-0 w-full" data-node-id="928:19286">
                <p className="font-aeonik font-normal leading-[43px] relative shrink-0 text-[#1d1611] text-[48px] tracking-[-0.72px] w-full" data-node-id="928:19287">
                  See what&rsquo;s possible
                </p>
                <p className="font-inter font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.16px] w-full" data-node-id="928:19288">{`Explore how your investment could look over time \u2013 with lower fees and a $25 starting deposit.`}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[15.328px] items-start relative shrink-0 w-full" data-node-id="928:19289">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="928:19290">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.832px] items-start min-w-px relative" data-node-id="928:19291">
                    <p className="[word-break:break-word] font-inter font-normal leading-[12.454px] relative shrink-0 text-[12px] text-[#080807] tracking-[-0.144px] w-full" data-node-id="928:19292">{`Portfolio `}</p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative rounded-tl-[1.916px] rounded-tr-[1.916px] shrink-0 w-full" data-node-id="928:19293">
                      <div className="bg-[#f5f5f5] content-stretch flex gap-[5.748px] items-center p-[8px] relative rounded-[7.664px] shrink-0 w-full" data-node-id="928:19294">
                        <div className="content-stretch flex flex-[1_0_0] gap-[1.916px] items-center min-w-px relative" data-node-id="928:19297">
                          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px py-[8px] relative" data-node-id="928:19298">
                              <div className="[word-break:break-word] flex flex-col font-inter font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[0px] text-black text-ellipsis tracking-[-0.168px] whitespace-nowrap" data-node-id="928:19300">
                                <p className="overflow-hidden text-[14px] text-ellipsis">
                                  <span className="leading-[12.454px]">{`Medium / 8% `}</span>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[5.748px] h-[50px] items-start relative shrink-0 w-[342px] max-w-full" data-node-id="928:19304">
                  <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[12.454px] px-[2.395px] relative shrink-0 text-[#080807] w-full whitespace-nowrap" data-node-id="928:19305">
                    <p className="font-inter font-normal relative shrink-0 text-[12px] tracking-[-0.144px]" data-node-id="928:19306">
                      Initial investment
                    </p>
                    <p className="font-inter font-medium relative shrink-0 text-[16px] text-right tracking-[-0.192px]" data-node-id="928:19307">
                      $20,000
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] h-[32px] relative rounded-[32px] shrink-0 w-full" data-node-id="928:19308">
                    <div className="absolute bg-[#080807] inset-[0_120.9px_-0.33px_0] rounded-[32px]" data-node-id="928:19309" />
                    <div className="-translate-y-1/2 absolute h-[28px] right-[122.9px] top-[calc(50%-0.46px)] w-[29px]" data-node-id="928:19310">
                      <div className="absolute inset-[-10.26%_-13.21%_-17.11%_-13.21%]">
                        <img alt="" className="block max-w-none size-full" src={imgKnob} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[5.748px] h-[51px] items-start relative shrink-0 w-[342px] max-w-full" data-node-id="928:19311">
                  <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[12.454px] px-[2.395px] relative shrink-0 text-[#080807] w-full whitespace-nowrap" data-node-id="928:19312">
                    <p className="font-inter font-normal relative shrink-0 text-[12px] tracking-[-0.144px]" data-node-id="928:19313">
                      Monthly contribution
                    </p>
                    <p className="font-inter font-medium relative shrink-0 text-[16px] text-right tracking-[-0.192px]" data-node-id="928:19314">
                      $1,500
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] h-[32px] relative rounded-[32px] shrink-0 w-full" data-node-id="928:19315">
                    <div className="absolute bg-[#080807] inset-[0_120.9px_-0.33px_0] rounded-[32px]" data-node-id="928:19316" />
                    <div className="-translate-y-1/2 absolute h-[28px] right-[122.45px] top-[calc(50%-0.46px)] w-[29px]" data-node-id="928:19317">
                      <div className="absolute inset-[-10.26%_-13.21%_-17.11%_-13.21%]">
                        <img alt="" className="block max-w-none size-full" src={imgKnob} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-white content-stretch drop-shadow-[0px_4px_16.5px_rgba(0,0,0,0.09)] flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pb-[24px] pt-[48px] px-[48px] relative rounded-[48px] self-stretch"
              data-node-id="928:19318"
            >
              <div className="[word-break:break-word] content-stretch flex gap-[15.328px] items-center leading-[0] relative shrink-0 w-full whitespace-nowrap" data-node-id="928:19320">
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-node-id="928:19321">
                  <div className="flex flex-col font-aeonik font-medium justify-center relative shrink-0 text-[27px] text-black tracking-[-0.108px]" data-node-id="928:19322">
                    <p className="leading-[21.076px]">$250,000.00</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center overflow-hidden relative shrink-0 text-[#474743] text-[6.706px] text-ellipsis tracking-[-0.0335px]" data-node-id="928:19323">
                    <p className="leading-[9.58px] overflow-hidden text-ellipsis">projected value in 20 years</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center opacity-50 relative shrink-0" data-node-id="928:19324">
                  <div className="flex flex-col font-aeonik font-medium justify-center opacity-[0.67] relative shrink-0 text-[27px] text-black tracking-[-0.108px]" data-node-id="928:19325">
                    <p className="leading-[21.076px]">$10,000</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center overflow-hidden relative shrink-0 text-[#474743] text-[6.706px] text-ellipsis tracking-[-0.0335px]" data-node-id="928:19326">
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
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+96.45px)] size-[13px] top-[calc(50%-58.21px)] pointer-events-none" data-node-id="928:19358">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCircle0} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+95.95px)] size-[14px] top-[calc(50%-19.71px)] pointer-events-none" data-node-id="928:19359">
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
