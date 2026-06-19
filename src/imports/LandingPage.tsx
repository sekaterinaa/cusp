import GoalCardsStack from "../app/components/GoalCardsStack";
import Button from "../app/components/Button";
import RetirementCalculator from "../app/components/RetirementCalculator";
import PressMilestones from "../app/components/PressMilestones";
import PricingComparison from "../app/components/PricingComparison";
import FinalCTA from "../app/components/FinalCTA";
import DownloadCUSP from "../app/components/DownloadCUSP";
import FAQ from "../app/components/FAQ";
import Footer from "../app/components/Footer";
import GetAppWidget from "../app/components/GetAppWidget";
import logoCuspLight from "../assets/sections/black-main-logo-without-trademark.svg";
import imgTrustIconShield from "../assets/sections/trust-icon-shield.svg";
import imgTrustIconUmbrella from "../assets/sections/trust-icon-umbrella.svg";
import imgTrustIconCheck from "../assets/sections/trust-icon-check.svg";
import imgTrustIconWallet from "../assets/sections/trust-icon-wallet.svg";
import heroPeople from "../assets/sections/hero-people.png";
import heroBgBlur from "../assets/sections/hero2-bg-blur.png";
import heroChartArea from "../assets/sections/hero2-chart-area.svg";
import heroChartLine from "../assets/sections/hero2-chart-line.svg";
import heroDotOuter from "../assets/sections/hero2-dot-outer.svg";
import heroDotInner from "../assets/sections/hero2-dot-inner.svg";
import heroArrowUp from "../assets/sections/hero2-arrow-up.svg";
import pressGulfBusiness from "../assets/sections/press-gulfbusiness.svg";
import pressZawya from "../assets/sections/press-zawya.svg";
import pressYahoo from "../assets/sections/press-yahoo.svg";
import pressAlpaca from "../assets/sections/press-alpaca.svg";
import imgInvestStocks from "../assets/sections/invest-stocks.png";
import imgInvestGold from "../assets/sections/invest-gold.png";
import imgInvestEtfs from "../assets/sections/invest-etfs.png";
import imgCardMarkets from "../assets/card-markets.webp";
import imgCardAi from "../assets/card-ai.webp";
import imgCardGoal from "../assets/card-goal.webp";
import imgCardShariah from "../assets/card-shariah.webp";

const imgYouImage1 = "https://www.figma.com/api/mcp/asset/85f9fee4-728e-4282-9bf3-afbfb56ac642";
const imgImage583325 = "https://www.figma.com/api/mcp/asset/6f7f1b6f-a28b-4644-addf-6d4ce628e035";
const imgImage583324 = "https://www.figma.com/api/mcp/asset/f2250d47-05f9-4ed7-a55f-a1fd12d335a6";
const imgYoutubeCover12807202 = "https://www.figma.com/api/mcp/asset/f0db2628-2c00-4779-a630-73dc01db121e";
const img647A8716A1 = "https://www.figma.com/api/mcp/asset/6321a584-866b-499b-b1e2-2795f73c50c8";
const img647A8760A1 = "https://www.figma.com/api/mcp/asset/0115d1de-68e0-4854-8869-e9aab80cfce6";
const img647A9213A1 = "https://www.figma.com/api/mcp/asset/98ac0b72-0c41-4cd9-bef6-d513b0ca00b0";
const img647A9772A1 = "https://www.figma.com/api/mcp/asset/1329b408-951e-4f07-b6c4-30596407b8bf";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/ddbd2854-940b-4b71-ad89-5113b4177610";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/0ebbbe0e-54c1-4adb-b865-081a95e7bb13";
const imgGroup2085663158 = "https://www.figma.com/api/mcp/asset/b1854765-2570-49e6-88b8-9fae9e30dc6d";
const imgGroup2085662947 = "https://www.figma.com/api/mcp/asset/c8799416-ac3d-43a7-8367-5a62fab44f9f";

export default function LandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pt-[24px] relative size-full" data-node-id="842:5539">
      <div className="flex w-full flex-col items-center" data-name="hero-screen">
      <div className="fixed z-50 backdrop-blur-[10px] bg-[rgba(255,255,255,0.32)] text-white content-stretch flex items-center justify-between left-[calc(24px+3.13%)] right-[calc(24px+3.13%)] top-[10px] overflow-clip px-[20px] py-[4px] rounded-[16px] border-[0.5px] border-solid border-[rgba(128,128,128,1)]" data-node-id="827:2493" data-name="header">
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
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full" data-node-id="842:5567">
        <div className="bg-[#1a110a] h-[80vh] mt-[60px] overflow-clip relative rounded-[32px] w-full" data-node-id="842:5568" data-name="MacBook Air - 27">
          <div className="absolute h-[699px] left-0 top-[-42px] w-[1280px] pointer-events-none" data-node-id="987:25534" style={{ backgroundImage: "linear-gradient(182.67250820454893deg, rgb(221, 116, 15) 11.523%, rgb(249, 245, 240) 181.22%), linear-gradient(90deg, rgb(251, 237, 222) 0%, rgb(251, 237, 222) 100%)" }} />
          <div className="absolute bg-gradient-to-b from-[#1a110a] h-[629px] left-0 right-0 rounded-[10.42px] to-[#d2ad8d] top-0 pointer-events-none" data-node-id="987:25535" />
          <div className="absolute flex h-[1952px] items-center justify-center left-[-1553px] top-[-792px] w-[4078px] pointer-events-none">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="blur-[150px] h-[1952px] relative w-[4078px]" data-node-id="987:25536" data-name="image 583176">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={heroBgBlur} />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none" data-node-id="989:25687" data-name="magnific_rlv19fpxtc 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={heroPeople} />
          </div>
          <div className="absolute bg-[#825435] blur-[19px] h-[53px] left-[532px] rounded-[44px] top-[250px] w-[185px] pointer-events-none" data-node-id="987:25538" />
          <div className="-translate-x-1/2 absolute backdrop-blur-[20px] bg-[rgba(255,255,255,0.11)] border-2 border-[rgba(255,255,255,0.3)] border-solid h-[237px] left-1/2 overflow-clip rounded-[24.103px] top-[49px] w-[270px]" data-node-id="987:25550" data-name="chart-card">
            <div className="absolute bottom-[-5px] flex h-[291px] items-center justify-center left-[-2px] w-[269px] pointer-events-none">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[291px] overflow-clip relative w-[269px]" data-name="overviewChart">
                  <div className="absolute flex h-[276px] items-center justify-center left-[-63.97px] right-[-344.03px] top-[117.76px]" style={{ containerType: "size" }}>
                    <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                      <div className="relative size-full" data-name="Area">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={heroChartArea} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[192px] items-center justify-center left-[-63.97px] right-[-344.03px] top-[117.76px]" style={{ containerType: "size" }}>
                    <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                      <div className="relative size-full" data-name="Line">
                        <div className="absolute inset-[-0.5%_-0.14%]">
                          <img alt="" className="block max-w-none size-full" src={heroChartLine} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-0 size-[15px] top-[130px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="relative size-[15px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={heroDotOuter} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-[4px] size-[7px] top-[134px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="relative size-[7px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={heroDotInner} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bottom-[9.52px] content-stretch flex items-center left-[calc(50%-0.23px)] px-[5.03px]" data-name="chips_timeframe">
              <div className="content-stretch flex h-[25.518px] items-center justify-center px-[9.569px] py-[4.785px] relative rounded-[12.759px] shrink-0">
                <p className="font-aeonik font-semibold leading-[15.949px] not-italic relative shrink-0 text-[11.16px] text-center text-white tracking-[0.0112px] whitespace-nowrap">1D</p>
              </div>
              <div className="content-stretch flex h-[25.518px] items-center justify-center px-[9.569px] py-[4.785px] relative rounded-[12.759px] shrink-0">
                <p className="font-aeonik font-semibold leading-[15.949px] not-italic relative shrink-0 text-[11.16px] text-center text-white tracking-[0.0112px] whitespace-nowrap">1W</p>
              </div>
              <div className="content-stretch flex h-[25.518px] items-center justify-center px-[9.569px] py-[4.785px] relative rounded-[12.759px] shrink-0">
                <p className="font-aeonik font-semibold leading-[15.949px] not-italic relative shrink-0 text-[11.16px] text-center text-white tracking-[0.0112px] whitespace-nowrap">1M</p>
              </div>
              <div className="content-stretch flex h-[25.518px] items-center justify-center px-[9.569px] py-[4.785px] relative rounded-[12.759px] shrink-0">
                <p className="font-aeonik font-semibold leading-[15.949px] not-italic relative shrink-0 text-[11.16px] text-center text-white tracking-[0.0112px] whitespace-nowrap">6M</p>
              </div>
              <div className="content-stretch flex h-[25.518px] items-center justify-center px-[9.569px] py-[4.785px] relative rounded-[12.759px] shrink-0">
                <p className="font-aeonik font-semibold leading-[15.949px] not-italic relative shrink-0 text-[11.16px] text-white tracking-[0.0112px] whitespace-nowrap">YTD</p>
              </div>
              <div className="content-stretch flex h-[25.518px] items-center justify-center px-[9.569px] py-[4.785px] relative rounded-[12.759px] shrink-0">
                <p className="font-aeonik font-semibold leading-[15.949px] not-italic relative shrink-0 text-[11.16px] text-center text-white tracking-[0.0112px] whitespace-nowrap">1Y</p>
              </div>
              <div className="bg-[rgba(230,242,211,0.2)] content-stretch flex h-[25.518px] items-center justify-center px-[9.569px] py-[4.785px] relative rounded-[12.759px] shrink-0">
                <p className="font-aeonik font-semibold leading-[15.949px] not-italic relative shrink-0 text-[11.16px] text-center text-white tracking-[0.0112px] whitespace-nowrap">ALL</p>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-0 items-center left-[calc(50%+0.15px)] px-[14.92px] top-[27.21px] w-[335.693px]" data-node-id="987:25568">
              <div className="[word-break:break-word] flex flex-col font-aeonik font-semibold justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[24px] text-black text-center text-ellipsis tracking-[-0.096px] w-[min-content] whitespace-nowrap">
                <p className="leading-[41.029px] overflow-hidden text-ellipsis">$149,618.52</p>
              </div>
              <div className="content-stretch flex gap-[5.595px] items-center relative shrink-0" data-name="trend-value">
                <div className="content-stretch flex gap-[3.73px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[11.19px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={heroArrowUp} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-aeonik font-normal justify-center leading-[0] not-italic opacity-60 overflow-hidden relative shrink-0 text-[14.92px] text-black text-ellipsis whitespace-nowrap">
                    <p className="leading-[22.38px] overflow-hidden text-ellipsis">124.85%</p>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-aeonik font-normal justify-center leading-[0] not-italic opacity-60 overflow-hidden relative shrink-0 text-[14.92px] text-black text-ellipsis whitespace-nowrap">
                  <p className="leading-[22.38px] overflow-hidden text-ellipsis">All time</p>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-1/2 top-[310px] w-[502px]" data-node-id="842:5574">
            <div className="[word-break:break-word] font-aeonik font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[48px] text-center text-white tracking-[-0.96px] w-[min-content] whitespace-pre-wrap" data-node-id="842:5575">
              <p className="leading-[56px] mb-0">{`Invest smarter. `}</p>
              <p className="leading-[56px]">Grow further.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[31px] items-center relative shrink-0 w-[431px]" data-node-id="842:5576">
              <p className="[word-break:break-word] font-inter font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.16px] w-[363px]" data-node-id="842:5577">{`Trade stocks and ETFs, build personalized portfolio strategies, and get guidance from AI `}</p>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="842:5578">
                <Button>Start now</Button>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex flex-wrap gap-[36px] items-center justify-center bottom-[40px] left-1/2 max-w-[calc(100%-130px)]" data-node-id="859:14056">
            <img alt="Gulf Business" className="block h-[14px] w-[111px] shrink-0 object-contain" src={pressGulfBusiness} />
            <img alt="Zawya" className="block h-[62px] w-[155px] shrink-0 object-contain" src={pressZawya} />
            <img alt="Yahoo" className="block h-[27px] w-[99px] shrink-0 object-contain" src={pressYahoo} />
            <img alt="Alpaca" className="block h-[44px] w-[152px] shrink-0 object-contain" src={pressAlpaca} />
          </div>
        </div>
        </div>
      </div>
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
              <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[13px] tracking-[-0.13px] w-full" data-node-id="913:17522">
                CUSP is registered in DIFC and regulated by the Dubai Financial Services Authority. All funds are insured
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
              <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[13px] tracking-[-0.13px] w-full" data-node-id="913:17529">
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
              <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[13px] tracking-[-0.13px] w-full" data-node-id="913:17536">
                CUSP Wealth is the UAE&apos;s first AI-powered investment platform to get an official Shariah certification
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
                Withdraw and deposit anytime
              </p>
              <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[13px] tracking-[-0.13px] w-full" data-node-id="913:17543">
                Certified Shariah-compliant by Amanie Advisors. Invest with confidence
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex w-full flex-col items-stretch pt-[44px] px-[24px] relative shrink-0">
        <GoalCardsStack />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[100px] py-[48px] relative shrink-0 w-full" data-node-id="987:25198">
        <p className="[word-break:break-word] font-aeonik font-normal leading-[56px] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-0.96px] w-[434px] whitespace-pre-wrap" data-node-id="987:25199">
          {`What can I `}
          <br aria-hidden />
          invest into?
        </p>
        <div className="content-stretch flex flex-col items-start px-[100px] relative shrink-0 w-full" data-node-id="987:25200">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full md:flex-row md:items-stretch" data-node-id="987:25201">
            <div className="bg-[#fafafa] border border-[#f6f6f6] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch" data-node-id="989:25737">
              <div className="h-[127px] relative shrink-0 w-[198px]">
                <img alt="Apple, Tesla, Nvidia" className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-[56px] w-auto object-contain" src={imgInvestStocks} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black text-center w-full" data-node-id="989:25739">
                <p className="font-aeonik leading-[29px] relative shrink-0 text-[26px] tracking-[-0.026px] w-full" data-node-id="989:25740">
                  Company stocks
                </p>
                <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[13px] tracking-[-0.13px] w-full" data-node-id="989:25741">
                  Keep more of what you earn. No trading fees, no hidden charges — just your money, growing.
                </p>
              </div>
            </div>
            <div className="bg-[#fafafa] border border-[#f6f6f6] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch" data-node-id="989:25748">
              <div className="relative shrink-0 size-[127px]" data-node-id="989:25749">
                <img alt="Gold bars" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgInvestGold} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black text-center w-full" data-node-id="989:25750">
                <p className="font-aeonik leading-[29px] relative shrink-0 text-[26px] tracking-[-0.026px] w-full" data-node-id="989:25751">
                  Gold
                </p>
                <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[13px] tracking-[-0.13px] w-full" data-node-id="989:25752">
                  Keep more of what you earn. No trading fees, no hidden charges — just your money, growing.
                </p>
              </div>
            </div>
            <div className="bg-[#fafafa] border border-[#f6f6f6] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch" data-node-id="989:25743">
              <div className="h-[127px] relative shrink-0 w-[198px]">
                <img alt="iShares, Vanguard, SPY" className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-[56px] w-auto object-contain" src={imgInvestEtfs} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black text-center w-full" data-node-id="989:25745">
                <p className="font-aeonik leading-[29px] relative shrink-0 text-[26px] tracking-[-0.026px] w-full" data-node-id="989:25746">
                  ETFs
                </p>
                <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[13px] tracking-[-0.13px] w-full" data-node-id="989:25747">
                  Keep more of what you earn. No trading fees, no hidden charges — just your money, growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center px-[24px] relative shrink-0 w-full" data-node-id="842:5667">
        <div className="bg-[#1d1611] content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-center min-w-px overflow-clip px-[119px] py-[90px] relative rounded-[32px]" data-node-id="842:5668">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center text-white w-[502px]" data-node-id="842:5669">
            <p className="font-aeonik font-normal leading-[56px] relative shrink-0 text-[48px] tracking-[-0.96px] whitespace-nowrap" data-node-id="842:5670">
              Invest the way you prefer
            </p>
            <p className="font-inter font-normal leading-[24px] relative shrink-0 text-[16px] tracking-[-0.16px] w-[431px]" data-node-id="842:5671">
              Manage your portfolio yourself, delegate it to CUSP’s experts, or use our robo-advisory services.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[1042px]" data-node-id="842:5672">
            <div className="content-stretch flex gap-[12px] h-[577px] items-center relative shrink-0 w-full" data-node-id="842:5673">
              <div className="border-[0.5px] border-[rgba(255,255,255,0.16)] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[48px] relative rounded-[64px] shadow-[0px_4px_79px_0px_rgba(0,0,0,0.25)]" data-node-id="854:9193">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgCardMarkets} loading="lazy" decoding="async" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-aeonik font-normal gap-[8px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="854:9462">
                  <p className="leading-[29.333px] min-w-full relative shrink-0 text-[#fbedde] text-[28px] w-[min-content] whitespace-pre-wrap" data-node-id="854:9463">
                    {`The world's markets, `}
                    <br aria-hidden />
                    from right here
                  </p>
                  <p className="leading-[21.333px] relative shrink-0 text-[16px] text-[rgba(251,237,222,0.6)] w-[292px]" data-node-id="854:9464">
                    Remove conflict between financial decisions and personal moral values with our shariah investment tools
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[48px] relative rounded-[64px]" data-node-id="854:9211">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgCardAi} loading="lazy" decoding="async" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-aeonik font-normal gap-[8px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="854:9466">
                  <div className="leading-[0] min-w-full relative shrink-0 text-[#fbedde] text-[28px] w-[min-content] whitespace-pre-wrap" data-node-id="854:9467">
                    <p className="leading-[29.333px] mb-0">{`AI insights to make `}</p>
                    <p className="leading-[29.333px]">your portfolio stronger</p>
                  </div>
                  <p className="leading-[21.333px] relative shrink-0 text-[16px] text-[rgba(251,237,222,0.6)] w-[292px]" data-node-id="854:9468">{`A 0–10 portfolio score and four pillar insights tell you what's working, what isn't, and what to do about it — no jargon required`}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] h-[577px] items-center relative shrink-0 w-full" data-node-id="842:5733">
              <div className="border-[0.5px] border-[rgba(255,255,255,0.16)] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[48px] relative rounded-[64px] shadow-[0px_4px_79px_0px_rgba(0,0,0,0.25)]" data-node-id="854:9247">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgCardGoal} loading="lazy" decoding="async" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-aeonik font-normal gap-[8px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="854:9470">
                  <div className="leading-[0] min-w-full relative shrink-0 text-[#fbedde] text-[28px] w-[min-content] whitespace-pre-wrap" data-node-id="854:9471">
                    <p className="leading-[29.333px] mb-0">{`A portfolio built `}</p>
                    <p className="leading-[29.333px]">around your goal</p>
                  </div>
                  <p className="leading-[21.333px] relative shrink-0 text-[16px] text-[rgba(251,237,222,0.6)] w-[292px]" data-node-id="854:9472">
                    Remove conflict between financial decisions and personal moral values with our shariah investment tools
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[48px] relative rounded-[64px]" data-node-id="854:9342">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgCardShariah} loading="lazy" decoding="async" />
                <div className="[word-break:break-word] content-stretch flex flex-col font-aeonik font-normal gap-[8px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="854:9474">
                  <p className="leading-[29.333px] min-w-full relative shrink-0 text-[#fbedde] text-[28px] w-[min-content]" data-node-id="854:9475">
                    Shariah screening
                  </p>
                  <p className="leading-[21.333px] relative shrink-0 text-[16px] text-[rgba(251,237,222,0.6)] w-[292px]" data-node-id="854:9476">
                    Curated Shariah-compliant stocks and ETFs, screened to trusted standards — so your portfolio can grow without compromise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center px-[24px] relative shrink-0 w-full" data-node-id="842:5837">
        <div className="bg-[#fdf6eb] content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip px-[119px] py-[80px] relative rounded-[32px]" data-node-id="842:5838">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[502px]" data-node-id="842:5839">
            <p className="[word-break:break-word] font-aeonik font-normal leading-[56px] not-italic relative shrink-0 text-[#1d1611] text-[48px] text-center tracking-[-0.96px] w-[540px]" data-node-id="842:5840">
              We are on a mission to help people build wealth
            </p>
          </div>
          <div className="h-[411.75px] overflow-clip relative rounded-[32px] shrink-0 w-[732px]" data-node-id="842:5841" data-name="youtube cover_1280х720_2">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[32px]">
              <div className="absolute inset-0 rounded-[32px]" style={{ backgroundImage: "linear-gradient(0deg, rgb(26, 17, 10) 0%, rgb(250, 247, 238) 100%), linear-gradient(1.3270602159367542deg, rgb(221, 116, 15) 304.66%, rgb(249, 245, 240) 35.394%), linear-gradient(180.00000000080541deg, rgb(255, 252, 249) 1.3071%, rgb(248, 242, 236) 120%), linear-gradient(90deg, rgb(251, 248, 244) 0%, rgb(251, 248, 244) 100%)" }} />
              <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgYoutubeCover12807202} />
              <div className="absolute inset-0 rounded-[32px]" style={{ backgroundImage: "linear-gradient(178.80815861329546deg, rgb(210, 173, 141) 1.7833%, rgb(26, 17, 10) 104.58%), linear-gradient(90deg, rgb(225, 113, 5) 0%, rgb(225, 113, 5) 100%), linear-gradient(0deg, rgb(225, 113, 5) 0%, rgb(250, 247, 238) 100%)" }} />
            </div>
            <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-aeonik font-normal inset-[7%_45.11%_75.03%_3.59%] leading-[normal] not-italic text-[#faf7ee] text-[40.031px]" data-node-id="842:5846">
              Driven by purpose, guided by values
            </p>
            <div className="absolute inset-[38.33%_-12.1%_-32.11%_-40.45%]" data-node-id="842:5848">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2085663158} />
            </div>
            <div className="absolute contents left-[191.51px] top-[83.15px]" data-node-id="842:5853">
              <div className="absolute h-[392.134px] left-[calc(58.33%-19.37px)] top-[83.15px] w-[264.349px]" data-node-id="842:5854" data-name="647A8716a 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img647A8716A1} />
              </div>
              <div className="absolute h-[393.361px] left-[191.51px] top-[99.24px] w-[263.441px]" data-node-id="842:5855" data-name="647A8760a 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img647A8760A1} />
              </div>
              <div className="absolute contents left-[calc(25%+104.41px)] top-[137.55px]" data-node-id="842:5856">
                <div className="absolute h-[256.482px] left-[calc(25%+104.41px)] shadow-[-1.144px_1.144px_5.89px_0px_rgba(0,0,0,0.25),5.931px_2.372px_11.862px_0px_rgba(0,0,0,0.25)] top-[259.65px] w-[252.39px]" data-node-id="842:5857" data-name="647A9213a 1">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[147.61%] left-0 max-w-none top-[-47.61%] w-full" src={img647A9213A1} />
                  </div>
                </div>
                <div className="absolute h-[378.585px] left-[calc(25%+104.41px)] top-[137.55px] w-[252.39px]" data-node-id="842:5858" data-name="647A9213a 2">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img647A9213A1} />
                </div>
              </div>
              <div className="absolute contents left-[calc(91.67%-136.74px)] top-[99.65px]" data-node-id="842:5859">
                <div className="absolute h-[229.337px] left-[calc(91.67%-136.74px)] shadow-[0px_2.372px_11.862px_0px_rgba(0,0,0,0.25)] top-[249.9px] w-[253.057px]" data-node-id="842:5860" data-name="647A9772a 1">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.51%] left-0 max-w-none top-[-65.51%] w-full" src={img647A9772A1} />
                  </div>
                </div>
                <div className="absolute h-[379.586px] left-[calc(91.67%-136.74px)] top-[99.65px] w-[253.057px]" data-node-id="842:5861" data-name="647A9772a 2">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img647A9772A1} />
                </div>
              </div>
            </div>
            <div className="absolute contents inset-[89.64%_81.44%_6.39%_3.59%]" data-node-id="842:5863">
              <div className="absolute inset-[89.64%_81.44%_6.39%_3.59%]" data-node-id="842:5864">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2085662947} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="842:5868">
            <Button>Create account</Button>
          </div>
        </div>
      </div>
      <RetirementCalculator />
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