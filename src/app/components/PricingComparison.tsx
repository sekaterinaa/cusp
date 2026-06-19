import Button from "./Button";
import imgLogoCusp from "../../assets/sections/logo-cusp.svg";
import imgLogoWio from "../../assets/sections/logo-wio.svg";
import imgLogoBaraka from "../../assets/sections/logo-baraka.svg";
import imgLogoSarwa from "../../assets/sections/logo-sarwa.svg";
import imgLogoIbkr from "../../assets/sections/logo-ibkr.svg";
import imgLogoEtoro from "../../assets/sections/logo-etoro.svg";
import imgCoinsBack from "../../assets/sections/coins-back.webp";
import imgCoinsFront from "../../assets/sections/coins-front.webp";
import imgBgMask from "../../assets/sections/pricing-bg-mask.svg";
import imgBgLine from "../../assets/sections/pricing-bg-line.svg";

const goldGradient =
  "linear-gradient(-76.71deg, rgba(253, 245, 242, 1) 5%, rgba(254, 227, 198, 1) 53%, rgba(148, 95, 59, 1) 95%, rgba(0, 0, 0, 1) 116.19%)";
const goldBadgeGradient =
  "linear-gradient(-76.88304305369729deg, rgb(254, 227, 198) 8.0089%, rgb(253, 245, 242) 64.109%, rgb(148, 95, 59) 144.26%)";
const cardGlow =
  "radial-gradient(60% 50% at 50% 0%, rgba(248, 212, 170, 0.16) 0%, rgba(248, 212, 170, 0) 100%)";

export default function PricingComparison() {
  return (
    <div className="content-stretch flex flex-col items-start px-[14px] relative shrink-0 w-full">
    <div className="bg-[#1d1611] content-stretch flex flex-col gap-[64px] items-center overflow-clip px-[119px] py-[90px] relative rounded-[32px] shrink-0 w-full" data-node-id="928:19385">
      {/* Background chart graphic */}
      <div className="-translate-x-1/2 absolute h-[682px] left-1/2 opacity-60 pointer-events-none top-[560px] w-[1743px]" data-node-id="930:22336">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBgMask} />
      </div>
      <div className="-translate-x-1/2 absolute h-[239px] left-1/2 opacity-60 pointer-events-none top-[540px] w-[1716px]" data-node-id="930:22339">
        <img alt="" className="block max-w-none size-full" src={imgBgLine} />
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[502px] max-w-full z-[1]" data-node-id="928:19387">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="928:19388">
          <div className="[word-break:break-word] font-aeonik font-normal leading-[0] not-italic relative shrink-0 text-white text-[48px] text-center tracking-[-0.96px] w-full" data-node-id="928:19389">
            <p className="leading-[56px] mb-0">{`Less in fees \u2013`}</p>
            <p className="leading-[56px]">more in your portfolio</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[15px] items-center px-[100px] relative shrink-0 w-full z-[1]" data-node-id="928:19390">
        <div className="flex flex-row items-center self-stretch">
          <div className="backdrop-blur-[19px] bg-[rgba(0,0,0,0.2)] content-stretch flex flex-col h-full items-start justify-center overflow-clip relative rounded-[32px] shrink-0 w-[377px]" data-node-id="928:19391">
            <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: cardGlow }} />
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-center pb-[12px] pt-[32px] px-[12px] relative rounded-[32px] shrink-0 w-full" data-node-id="928:19392">
              <div className="content-stretch flex items-center justify-center px-[12px] relative shrink-0 w-full" data-node-id="928:19394">
                <p className="[word-break:break-word] flex-[1_0_0] font-aeonik font-normal leading-[29.333px] min-w-px not-italic relative text-[28px] text-white" data-node-id="928:19395">
                  CUSP Wealth vs others
                </p>
              </div>
              <div className="bg-[rgba(0,0,0,0.32)] content-stretch flex flex-col gap-[16px] items-start p-[12px] relative rounded-[32px] shrink-0 w-full" data-node-id="859:11429">
                {/* CUSP */}
                <div className="content-stretch flex gap-[15px] items-center relative rounded-[20px] shrink-0 w-full" data-node-id="859:11430">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
                    <div className="bg-[#1a110a] overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
                      <div className="absolute flex inset-[42.78%_7.5%_42.77%_7.5%] items-center justify-center" style={{ containerType: "size" }}>
                        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                          <div className="relative size-full">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoCusp} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0 text-[rgba(255,255,255,0.9)] w-[177px]">
                      <p className="font-inter font-medium leading-[26px] overflow-hidden relative shrink-0 text-[18px] text-ellipsis tracking-[-0.216px] w-full">CUSP Wealth</p>
                      <p className="font-inter font-normal leading-[16px] opacity-50 overflow-hidden relative shrink-0 text-[12px] text-ellipsis w-full">$0.00 fees per trade</p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] bg-clip-text font-inter font-medium leading-[26px] not-italic overflow-hidden relative shrink-0 text-[18px] text-[transparent] text-ellipsis text-right tracking-[-0.216px] whitespace-nowrap" style={{ backgroundImage: goldGradient }}>
                    $0.00
                  </p>
                </div>
                {/* WIO */}
                <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-node-id="859:11431">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
                    <div className="bg-[#661af9] overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.904px] left-[calc(50%+0.83px)] top-[calc(50%+0.83px)] w-[30px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoWio} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0 text-[rgba(255,255,255,0.9)] w-[177px]">
                      <p className="font-inter font-medium leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis tracking-[-0.16px] w-full">WIO</p>
                      <p className="font-inter font-normal leading-[16px] opacity-50 overflow-hidden relative shrink-0 text-[12px] text-ellipsis w-full">0.20%, min $0.50 per trade</p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-inter font-medium leading-[24px] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-ellipsis text-right tracking-[-0.16px] whitespace-nowrap">$5.00</p>
                </div>
                {/* Baraka */}
                <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-node-id="859:11432">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
                    <div className="bg-black overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[26.667px] left-1/2 top-1/2 w-[20.143px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoBaraka} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0 text-[rgba(255,255,255,0.9)] w-[177px]">
                      <p className="font-inter font-medium leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis tracking-[-0.16px] w-full">Baraka</p>
                      <p className="font-inter font-normal leading-[16px] opacity-50 overflow-hidden relative shrink-0 text-[12px] text-ellipsis w-full">$1.00 per trade</p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-inter font-medium leading-[24px] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-ellipsis text-right tracking-[-0.16px] whitespace-nowrap">$10.00</p>
                </div>
                {/* Sarwa */}
                <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-node-id="859:11433">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
                    <div className="bg-[#f5f5f5] border-[0.417px] border-[#e0dedd] border-solid overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[26.667px] left-1/2 top-1/2 w-[25.619px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoSarwa} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0 text-[rgba(255,255,255,0.9)] w-[177px]">
                      <p className="font-inter font-medium leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis tracking-[-0.16px] w-full">Sarwa</p>
                      <p className="font-inter font-normal leading-[16px] opacity-50 overflow-hidden relative shrink-0 text-[12px] text-ellipsis w-full">0.25%, min $1.00 per trade</p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-inter font-medium leading-[24px] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-ellipsis text-right tracking-[-0.16px] whitespace-nowrap">$10.00</p>
                </div>
                {/* IBKR */}
                <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-node-id="859:11434">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
                    <div className="bg-gradient-to-b from-[#24242f] to-black overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
                      <div className="absolute inset-[-42.74%_32.44%_0_-5.59%]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoIbkr} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px not-italic relative text-[rgba(255,255,255,0.9)]">
                      <p className="font-inter font-medium leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis tracking-[-0.16px] w-full">Interactive Brokers</p>
                      <p className="font-inter font-normal leading-[16px] opacity-50 overflow-hidden relative shrink-0 text-[12px] text-ellipsis w-full">$0.005, min $1.00 per trade</p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-inter font-medium leading-[24px] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-ellipsis text-right tracking-[-0.16px] whitespace-nowrap">$10.00</p>
                </div>
                {/* eToro */}
                <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-node-id="859:11435">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
                    <div className="overflow-clip relative rounded-[12px] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(28, 200, 66) 0%, rgb(73, 223, 134) 100%)" }}>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.555px] left-1/2 top-[calc(50%-0.42px)] w-[23.333px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoEtoro} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px not-italic relative text-[rgba(255,255,255,0.9)]">
                      <p className="font-inter font-medium leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis tracking-[-0.16px] w-full">eToro</p>
                      <p className="font-inter font-normal leading-[16px] opacity-50 overflow-hidden relative shrink-0 text-[12px] text-ellipsis w-full">$1.00 per trade</p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-inter font-medium leading-[24px] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-ellipsis text-right tracking-[-0.16px] whitespace-nowrap">$10.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] h-full items-start justify-center min-w-px relative" data-node-id="859:11436">
            <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-start min-h-px relative w-full" data-node-id="859:11437">
              <div className="backdrop-blur-[19px] bg-[rgba(0,0,0,0.2)] content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-full items-center justify-center min-w-px overflow-clip pb-[126px] pl-[29px] pr-[30px] pt-[124px] relative rounded-[32px]" data-node-id="928:19405">
                <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: cardGlow }} />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-aeonik font-normal leading-[29.333px] left-[calc(50%-1px)] not-italic text-[28px] text-white text-center top-[179.5px] w-[212.5px]" data-node-id="859:11439">
                  basic commission
                </p>
                <div className="-translate-x-1/2 absolute backdrop-blur-[28.214px] border-[1.129px] border-[rgba(244,205,160,0.37)] border-solid content-stretch flex h-[79px] items-center justify-center left-[calc(50%-0.84px)] p-[18.057px] rounded-[27.086px] top-[53.5px] w-[138.814px]" data-node-id="859:11440" style={{ backgroundImage: goldBadgeGradient }}>
                  <p className="[word-break:break-word] font-aeonik font-semibold leading-[1.2] not-italic relative shrink-0 text-[35.982px] text-black whitespace-nowrap">
                    0%
                  </p>
                </div>
              </div>
              <div className="backdrop-blur-[19px] bg-[rgba(0,0,0,0.2)] content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-full items-center justify-center min-w-px overflow-clip pb-[126px] pl-[29px] pr-[30px] pt-[124px] relative rounded-[32px]" data-node-id="928:19410">
                <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: cardGlow }} />
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-aeonik font-normal leading-[29.333px] left-[calc(50%-1px)] not-italic text-[28px] text-white text-center top-[159.5px] w-[212.5px]" data-node-id="859:11443">
                  portfolio management fee
                </p>
                <div className="-translate-x-1/2 absolute backdrop-blur-[28.214px] border-[1.129px] border-[rgba(244,205,160,0.37)] border-solid content-stretch flex h-[79px] items-center justify-center left-[calc(50%-0.43px)] p-[18.057px] rounded-[27.086px] top-[53.5px] w-[138.814px]" data-node-id="859:11444" style={{ backgroundImage: goldBadgeGradient }}>
                  <p className="[word-break:break-word] font-aeonik font-semibold leading-[1.2] not-italic relative shrink-0 text-[35.982px] text-black whitespace-nowrap">
                    0.75%
                  </p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[19px] bg-[rgba(0,0,0,0.2)] content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[29px] pr-[30px] py-[45px] relative rounded-[32px] shrink-0 w-full" data-node-id="928:19415">
              <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: cardGlow }} />
              <p className="[word-break:break-word] font-aeonik font-normal leading-[29.333px] min-w-full not-italic relative shrink-0 text-[28px] text-white w-[min-content] z-[1]" data-node-id="928:19416">
                Withdraw any time
              </p>
              <p className="[word-break:break-word] font-inter font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px] w-[279px] z-[1]" data-node-id="928:19417">
                No lock-ins, no limits. Your money stays yours — withdraw whenever you want, however much you need.
              </p>
              {/* Coin stack */}
              <div className="absolute right-[-94px] size-[278px] top-[-37.47px] pointer-events-none" data-node-id="930:22224">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgCoinsBack} loading="lazy" decoding="async" />
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgCoinsFront} loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-node-id="928:19419">
        <Button>Explore pricing and fees</Button>
      </div>
    </div>
    </div>
  );
}
