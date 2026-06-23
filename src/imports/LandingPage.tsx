import Button from "../app/components/Button";
import GoalCardsStack from "../app/components/GoalCardsStack";
import InvestWays from "../app/components/InvestWays";
import InvestOptions from "../app/components/InvestOptions";
import RetirementCalculator from "../app/components/RetirementCalculator";
import PressMilestones from "../app/components/PressMilestones";
import PricingComparison from "../app/components/PricingComparison";
import FinalCTA from "../app/components/FinalCTA";
import FAQ from "../app/components/FAQ";
import Footer from "../app/components/Footer";
import RatingsBar from "../app/components/RatingsBar";
import GetAppWidget from "../app/components/GetAppWidget";
import DownloadCUSP from "../app/components/DownloadCUSP";
import videoHeroPhone from "../assets/hero-phone-white.mov";
import videoHeroDesert from "../assets/hero-desert-bg-upscaled.mp4";
import logoCuspLight from "../assets/sections/black-main-logo-without-trademark.svg";
import pressGulfBusiness from "../assets/sections/press-gulfbusiness.svg";
import pressZawya from "../assets/sections/press-zawya.svg";
import pressYahoo from "../assets/sections/press-yahoo.svg";
import pressAlpaca from "../assets/sections/press-alpaca.svg";
import imgTrustIconShield from "../assets/sections/trust-icon-shield.svg";
import imgTrustIconUmbrella from "../assets/sections/trust-icon-umbrella.svg";
import imgTrustIconCheck from "../assets/sections/trust-icon-check.svg";
import imgTrustIconWallet from "../assets/sections/trust-icon-wallet.svg";
import imgMissionCover from "../assets/sections/mission-cover.png";

export default function LandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pt-[24px] relative size-full" data-node-id="842:5539">
      <div className="flex w-full flex-col items-center px-[24px]" data-name="hero-screen">
        <div className="relative w-full h-[80vh] overflow-clip rounded-[32px] bg-[#1a110a]" data-node-id="859:12535" data-name="hero">
          <div className="absolute inset-0 overflow-clip" data-node-id="898:16167" data-name="hero-desert-bg">
            <video className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full" src={videoHeroDesert} autoPlay muted loop playsInline />
          </div>
          <div className="fixed z-50 backdrop-blur-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.3)_100%)] text-white content-stretch flex items-center justify-between left-[calc(24px+3.13%)] right-[calc(24px+3.13%)] top-[30px] overflow-clip px-[20px] py-[4px] rounded-[16px] border-[0.5px] border-solid border-[rgba(255,255,255,0.6)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.65),0px_8px_24px_rgba(0,0,0,0.12)]" data-node-id="827:2493" data-name="header">
            <div className="h-[16px] relative shrink-0 w-[107px]" data-name="logo">
              <img alt="CUSP" className="absolute block inset-0 max-w-none size-full text-black" src={logoCuspLight} />
            </div>
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
              <div className="content-stretch flex items-center justify-center p-[12px] relative shrink-0">
                <p className="[word-break:break-word] font-inter font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.07px] whitespace-nowrap">Personalised portfolios</p>
              </div>
              <div className="content-stretch flex items-center justify-center p-[12px] relative shrink-0">
                <p className="[word-break:break-word] font-inter font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.07px] whitespace-nowrap">Pricing</p>
              </div>
              <div className="content-stretch flex items-center justify-center p-[12px] relative shrink-0">
                <p className="[word-break:break-word] font-inter font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.07px] whitespace-nowrap">Help center</p>
              </div>
              <div className="content-stretch flex items-center justify-center p-[12px] relative shrink-0">
                <p className="[word-break:break-word] font-inter font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.07px] whitespace-nowrap">About us</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="contentRight">
              <div className="bg-[rgba(255,255,255,0.16)] content-stretch flex items-center overflow-clip px-[12px] py-[10px] relative rounded-[24px] shrink-0" data-name="searchContainer">
                <svg className="block shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="9" cy="9" r="6.25" stroke="black" strokeWidth="1.25" />
                  <path d="m13.6 13.6 2.9 2.9" stroke="black" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
              </div>
              <div className="bg-[rgba(255,255,255,0.16)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative rounded-[32px] shrink-0">
                <p className="[word-break:break-word] font-inter font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.07px] whitespace-nowrap">Eng</p>
                <svg className="block shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="m6.5 8.5 3.5 3.5 3.5-3.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="bg-[rgba(255,255,255,0.16)] content-stretch flex flex-col gap-[4px] items-center justify-center px-[16px] py-[10px] relative rounded-[32px] shrink-0">
                <div className="bg-black h-[2px] relative shrink-0 w-[24px]" />
                <div className="bg-black h-[2px] relative shrink-0 w-[24px]" />
                <div className="bg-black h-[2px] relative shrink-0 w-[24px]" />
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute h-[733px] left-[calc(50%+364.67px)] overflow-clip bottom-0 w-[503.348px] max-w-none" data-node-id="859:14036">
            <video className="absolute inset-0 max-w-none object-contain object-bottom pointer-events-none size-full scale-[1.4] origin-bottom" src={videoHeroPhone} autoPlay muted playsInline />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[104px] top-1/2 -translate-y-1/2 w-[502px] max-w-[calc(100%-130px)]" data-node-id="859:12618">
            <div className="[word-break:break-word] font-aeonik font-normal leading-[0] not-italic relative shrink-0 text-[64px] text-black tracking-[-1.28px] whitespace-pre-wrap" data-node-id="859:12619">
              <p className="leading-[64px] mb-0">{`Invest with clarity. `}</p>
              <p className="leading-[64px]">Grow with purpose.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-[431px] max-w-full" data-node-id="859:12620">
              <p className="[word-break:break-word] font-inter font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] w-[363px] max-w-full" data-node-id="859:12621">{`Everything in one app \u2013 10,000+ global markets, $0 trading fees, halal investing, and portfolios built around your life.`}</p>
              <Button>Start with $25</Button>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[36px] items-center justify-start left-[104px] bottom-[56px] max-w-[calc(100%-130px)]" data-node-id="859:14056">
            <img alt="Gulf Business" className="block h-[14px] w-[111px] shrink-0 object-contain" src={pressGulfBusiness} />
            <img alt="Zawya" className="block h-[62px] w-[155px] shrink-0 object-contain" src={pressZawya} />
            <img alt="Yahoo" className="block h-[27px] w-[99px] shrink-0 object-contain" src={pressYahoo} />
            <img alt="Alpaca" className="block h-[44px] w-[152px] shrink-0 object-contain" src={pressAlpaca} />
          </div>
        </div>
      </div>
      <RatingsBar />
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[100px] py-[48px] relative shrink-0 w-full" data-node-id="842:5608">
        <p className="[word-break:break-word] font-aeonik font-normal leading-[56px] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-0.96px] whitespace-nowrap" data-node-id="913:17146">
          Why trust us?
        </p>
        <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-node-id="842:5610">
          <div className="bg-[#fafafa] border border-[#f6f6f6] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch" data-node-id="913:17516">
            <div className="bg-gradient-to-b border border-solid border-white content-stretch flex from-white items-center p-[12px] relative rounded-[48px] shadow-[0px_4px_33px_0px_rgba(0,0,0,0.07)] shrink-0 to-[rgba(255,255,255,0.8)]" data-node-id="913:17518">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="913:17519" data-name="shield-check, security, protection">
                <div className="absolute inset-[8.56%_12.5%_7.68%_12.5%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrustIconShield} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black text-center w-full" data-node-id="913:17520">
              <p className="font-aeonik font-normal leading-[29px] relative shrink-0 text-[26px] tracking-[-0.026px] w-full" data-node-id="913:17521">
                Regulated by the DFSA
              </p>
              <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[14px] tracking-[-0.13px] w-full" data-node-id="913:17522">
                Cusp Wealth Ltd. is regulated by the DFSA with an Islamic endorsement. License #10863, ref.# F011420.
              </p>
            </div>
          </div>
          <div className="bg-[#fafafa] border border-[#f6f6f6] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch" data-node-id="913:17523">
            <div className="bg-gradient-to-b border border-solid border-white content-stretch flex from-white items-center p-[12px] relative rounded-[48px] shadow-[0px_4px_33px_0px_rgba(0,0,0,0.07)] shrink-0 to-[rgba(255,255,255,0.8)]" data-node-id="913:17525">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="913:17526" data-name="umbrella-security">
                <div className="absolute inset-[8.33%_8.49%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrustIconUmbrella} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black text-center w-full" data-node-id="913:17527">
              <p className="font-aeonik font-normal leading-[29px] relative shrink-0 text-[26px] tracking-[-0.026px] w-full" data-node-id="913:17528">
                Insured by SIPC
              </p>
              <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[14px] tracking-[-0.13px] w-full" data-node-id="913:17529">
                All investments are protected up to $500,000 by the Securities Investor Protection Corporation (SIPC).
              </p>
            </div>
          </div>
          <div className="bg-[#fafafa] border border-[#f6f6f6] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch" data-node-id="913:17530">
            <div className="bg-gradient-to-b border border-solid border-white content-stretch flex from-white items-center p-[12px] relative rounded-[48px] shadow-[0px_4px_33px_0px_rgba(0,0,0,0.07)] shrink-0 to-[rgba(255,255,255,0.8)]" data-node-id="913:17532">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="913:17533" data-name="circle-check, check radio, circle, checkbox, check, checkmark, confirm">
                <div className="absolute inset-[8.33%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrustIconCheck} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black text-center w-full" data-node-id="913:17534">
              <p className="font-aeonik font-normal leading-[29px] relative shrink-0 text-[26px] tracking-[-0.026px] w-full" data-node-id="913:17535">
                Fatwa-certified
              </p>
              <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[14px] tracking-[-0.13px] w-full" data-node-id="913:17536">
                The first AI-powered investment platform in the UAE to hold a Fatwa certification from Amanie Advisors.
              </p>
            </div>
          </div>
          <div className="bg-[#fafafa] border border-[#f6f6f6] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch" data-node-id="913:17537">
            <div className="bg-gradient-to-b border border-solid border-white content-stretch flex from-white items-center p-[12px] relative rounded-[48px] shadow-[0px_4px_33px_0px_rgba(0,0,0,0.07)] shrink-0 to-[rgba(255,255,255,0.8)]" data-node-id="913:17539">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="913:18170" data-name="wallet-4">
                <div className="absolute inset-[16.67%_8.54%_16.67%_8.12%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrustIconWallet} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black text-center w-full" data-node-id="913:17541">
              <p className="font-aeonik font-normal leading-[29px] relative shrink-0 text-[26px] tracking-[-0.026px] w-full" data-node-id="913:17542">
                Withdraw anytime
              </p>
              <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[14px] tracking-[-0.13px] w-full" data-node-id="913:17543">
                Top up your account instantly via multiple methods. Withdraw your funds whenever you need to, with no hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex w-full flex-col items-stretch pt-[44px] px-[24px] relative shrink-0">
        <GoalCardsStack />
      </div>
      <InvestOptions />
      <InvestWays />
      <RetirementCalculator />
      <div className="content-stretch flex items-center px-[24px] relative shrink-0 w-full" data-node-id="842:5837">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip px-[24px] py-[64px] relative rounded-[32px]" data-node-id="842:5838" style={{ backgroundColor: "rgb(253, 246, 235)", backgroundImage: "linear-gradient(108.19141153114029deg, rgb(255, 240, 226) 30.82%, rgb(255, 247, 237) 122.93%, rgb(221, 116, 15) 148.31%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1232 694.95' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.0000057125 -123.58 109.67 0.000025204 615.79 1235.8)'><stop stop-color='rgba(251,248,244,1)' offset='0'/><stop stop-color='rgba(195,190,186,1)' offset='0.25'/><stop stop-color='rgba(167,161,156,1)' offset='0.375'/><stop stop-color='rgba(139,133,127,1)' offset='0.5'/><stop stop-color='rgba(110,104,98,1)' offset='0.625'/><stop stop-color='rgba(82,75,69,1)' offset='0.75'/><stop stop-color='rgba(54,46,39,1)' offset='0.875'/><stop stop-color='rgba(40,31,25,1)' offset='0.9375'/><stop stop-color='rgba(26,17,10,1)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(252, 248, 239) 0%, rgb(252, 248, 239) 100%)" }}>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[502px]" data-node-id="842:5839">
            <p className="[word-break:break-word] font-aeonik font-normal leading-[56px] not-italic relative shrink-0 text-[#1d1611] text-[48px] text-center tracking-[-0.96px] w-[540px]" data-node-id="842:5840">
              We are on a mission to help people build wealth
            </p>
          </div>
          <div className="h-[411.75px] overflow-clip relative rounded-[32px] shrink-0 w-[732px]" data-node-id="842:5841" data-name="youtube cover_1280х720_2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgMissionCover} loading="lazy" decoding="async" />
            <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-aeonik font-normal inset-[7%_45.11%_75.03%_3.59%] leading-[normal] not-italic text-[#faf7ee] text-[40.031px]" data-node-id="842:5846">
              Driven by purpose, guided by values
            </p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="842:5868">
            <Button>Create account</Button>
          </div>
        </div>
      </div>
      <PressMilestones />
      <PricingComparison />
      <FinalCTA />
      <DownloadCUSP />
      <FAQ />
      <Footer />
      <GetAppWidget />
    </div>
  );
}