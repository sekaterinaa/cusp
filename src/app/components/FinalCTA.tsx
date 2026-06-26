import Button from "./Button";
import imgAdvisor from "../../assets/sections/cta-advisor.png";
import imgGold from "../../assets/sections/cta-gold.png";
import imgEmailIcon from "../../assets/sections/cta-email-icon.svg";

export default function FinalCTA() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pt-[160px] pb-[124px] relative shrink-0 w-full" data-node-id="959:22385">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="959:22411">
        <p className="[word-break:break-word] font-aeonik font-normal leading-[56px] not-italic relative shrink-0 text-[#1d1611] text-[48px] text-center tracking-[-0.96px] w-full whitespace-pre-wrap" data-node-id="959:22386">
          {`Let\u2019s build something\nthat lasts`}
        </p>
      </div>
      <div className="content-stretch flex gap-[12px] items-start justify-center px-[200px] relative shrink-0 w-full" data-node-id="959:22421">
        <div className="bg-gradient-to-b content-stretch flex flex-[1_0_0] flex-col from-[#d2ad8d] from-[28.958%] h-[461px] items-start justify-between min-w-px overflow-clip p-[32px] relative rounded-[32px] to-[#faf7ee]" data-node-id="959:22424">
          <div className="absolute h-[439px] left-[172px] top-[30.53px] w-[491px]" data-node-id="959:22426" data-name="image 583025">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[91.52%] left-[-8.39%] max-w-none top-[8.46%] w-[114.71%]" src={imgAdvisor} loading="lazy" decoding="async" />
            </div>
          </div>
          <p className="[word-break:break-word] font-aeonik font-normal leading-[32.765px] not-italic relative shrink-0 text-[31px] text-black w-[221px]" data-node-id="959:22414">
            Book a call with an advisor
          </p>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-node-id="959:22470">
            <p className="[word-break:break-word] font-aeonik font-normal leading-[23.829px] not-italic relative shrink-0 text-[16px] text-black w-[212px]" data-node-id="959:22415">
              Get your Personalised portfolio curated by an expert with 10+ years of experience at Goldman Sachs, 360 ONE, and Elixir Wealth
            </p>
            <Button>Talk to the advisor</Button>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[461px] items-start justify-between min-w-px overflow-clip px-[44px] py-[32px] relative rounded-[32px]" data-node-id="959:22471" style={{ backgroundImage: "linear-gradient(185.18786936400352deg, rgb(221, 116, 15) 11.523%, rgb(249, 245, 240) 181.22%), linear-gradient(90deg, rgb(251, 237, 222) 0%, rgb(251, 237, 222) 100%)" }}>
          <div className="absolute h-[582.766px] left-[135.55px] top-[39.53px] w-[582.766px]" data-node-id="1193:6498" data-name="image 583370">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGold} loading="lazy" decoding="async" />
          </div>
          <p className="[word-break:break-word] font-aeonik font-normal leading-[32.765px] not-italic relative shrink-0 text-[31px] text-white w-[221px]" data-node-id="959:22473">
            Learn how we structure CUSP Personalised Portfolios
          </p>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="959:22474">
            <div className="backdrop-blur-[16.5px] bg-[rgba(255,255,255,0.41)] content-stretch flex h-[56px] items-center justify-between px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="963:22490" data-name="text field">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px py-[7px] relative" data-node-id="963:22492" data-name="content">
                <div className="content-stretch flex h-[26px] items-center relative shrink-0" data-node-id="963:22493" data-name="label-text">
                  <div className="[word-break:break-word] flex flex-col font-inter font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[18px] text-ellipsis text-white tracking-[-0.216px] whitespace-nowrap" data-node-id="963:22494">
                    <p className="leading-[26px] overflow-hidden text-ellipsis">E-mail</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="963:22495" data-name="ic_circle-x, close, checkbox, remove/on/2/1/round">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEmailIcon} />
              </div>
            </div>
            <p className="[word-break:break-word] font-aeonik font-normal leading-[23.829px] not-italic relative shrink-0 text-[16px] text-white w-[212px]" data-node-id="959:22475">
              We&rsquo;ll send insights &mdash; check your inbox
            </p>
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
