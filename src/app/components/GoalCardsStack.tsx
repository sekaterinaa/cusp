import Button from "./Button";
import imgHalalCouple from "../../assets/sections/goal/halal-couple.png";
import imgMoonStar from "../../assets/sections/goal/moon-star.svg";
import imgLegacyCoins from "../../assets/sections/goal/legacy-coins.png";
import imgRetireMan from "../../assets/sections/goal/retire-man.png";

const RETIRE_GRADIENT =
  "linear-gradient(194.67599399443316deg, rgb(210, 173, 141) 2.1601%, rgb(250, 247, 238) 103.92%)";

export default function GoalCardsStack() {
  return (
    <div
      className="bg-gradient-to-b content-stretch flex flex-col from-[#160a04] gap-[32px] h-[824.2px] items-center justify-center overflow-clip p-[44px] relative rounded-[44px] shrink-0 to-[#d2ad8d] w-full"
      data-node-id="982:24226"
    >
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[502px] max-w-full z-[1]" data-node-id="982:24227">
        <p
          className="[word-break:break-word] font-aeonik font-normal leading-[56px] relative shrink-0 text-[48px] text-white text-center tracking-[-0.96px] whitespace-pre"
          data-node-id="982:24229"
        >
          {`Investing designed `}
          <br aria-hidden />
          {`for you `}
        </p>
      </div>

      <div
        className="content-stretch flex gap-[12px] h-[517px] items-start relative shrink-0 w-[870px] max-w-full z-[1]"
        data-node-id="982:24230"
      >
        <div
          className="bg-[#d8c9b9] content-stretch flex flex-col h-full items-start justify-end overflow-clip p-[12px] relative rounded-[44px] shrink-0 w-[424px]"
          data-node-id="982:24231"
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[711.896px] left-[calc(50%+140.26px)] top-[calc(50%-46.23px)] w-[1260.648px] pointer-events-none" data-node-id="1162:6849">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHalalCouple} loading="lazy" decoding="async" />
          </div>
          <div
            className="backdrop-blur-[19px] bg-white content-stretch flex flex-col gap-[8.936px] items-start px-[32px] py-[24px] relative rounded-[32px] shrink-0 w-full"
            data-node-id="1013:26431"
          >
            <div
              className="bg-gradient-to-b border border-solid border-white content-stretch flex from-white items-center p-[12px] relative rounded-[48px] shadow-[0px_4px_33px_0px_rgba(0,0,0,0.16)] shrink-0 to-[rgba(255,255,255,0.8)]"
              data-node-id="1013:26432"
            >
              <div className="relative shrink-0 size-[24px]" data-node-id="1013:26433">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMoonStar} />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-aeonik font-normal leading-[32.765px] min-w-full relative shrink-0 text-[23.829px] text-black"
              data-node-id="1013:26434"
            >
              Invest the halal way
            </p>
            <p
              className="[word-break:break-word] font-aeonik font-normal leading-[23.829px] min-w-full relative shrink-0 text-[17.872px] text-[rgba(0,0,0,0.6)]"
              data-node-id="1013:26435"
            >
              Your beliefs and your investments belong together. Our Shariah-compliant tools are designed with exactly that in mind.
            </p>
          </div>
        </div>

        <div
          className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start justify-center min-w-px relative"
          data-node-id="982:24239"
        >
          <div
            className="bg-[#fcefde] content-stretch flex flex-[1_0_0] flex-col items-end min-h-px overflow-clip px-[12px] py-[32px] relative rounded-[32px] w-full"
            data-node-id="982:24293"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[8.936px] items-start relative shrink-0 text-[#271810] w-[200px] z-[1]"
              data-node-id="982:24294"
            >
              <p className="font-aeonik font-normal leading-[32.765px] relative shrink-0 text-[26px] w-[194px]" data-node-id="982:24295">
                Build cross-border legacy
              </p>
              <div className="font-inter font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[-0.14px] whitespace-pre-wrap" data-node-id="982:24296">
                <p>Life as an expat is a journey. Build wealth that keeps up &ndash; wherever you live, invest, support your loved ones, or move next.</p>
              </div>
            </div>
            <div className="absolute h-[253px] left-0 top-0 w-[181px] pointer-events-none" data-node-id="1162:6788">
              <div className="absolute flex items-center justify-center left-[-214.52px] size-[395.972px] top-[-55.16px]">
                <div className="flex-none rotate-[15deg]">
                  <div className="blur-[16.5px] opacity-50 relative size-[323.309px]" data-node-id="1162:6789">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLegacyCoins} loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center left-[-214.52px] size-[395.972px] top-[-76.16px]">
                <div className="flex-none rotate-[15deg]">
                  <div className="relative size-[323.309px]" data-node-id="1162:6786">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLegacyCoins} loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px overflow-clip px-[12px] py-[32px] relative rounded-[32px] w-full"
            data-node-id="982:24240"
            style={{ backgroundImage: RETIRE_GRADIENT }}
          >
            <div className="absolute flex h-[437.68px] items-center justify-center left-[-260.48px] top-[-11.29px] w-[784.176px] pointer-events-none" data-node-id="1180:6769">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[437.68px] relative w-[784.176px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRetireMan} loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[8.936px] items-start relative shrink-0 text-black w-[200px] z-[1]"
              data-node-id="1031:26706"
            >
              <p className="font-aeonik font-normal leading-[32.765px] relative shrink-0 text-[26px] w-full" data-node-id="1031:26707">
                Retire earlier
              </p>
              <p className="font-inter font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[-0.14px] w-full" data-node-id="1031:26708">
                The world moves fast. Invest in a financial foundation that stays strong, from education to retirement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col items-center relative shrink-0 z-[1]" data-node-id="982:24297">
        <Button>Create account</Button>
      </div>
    </div>
  );
}
