import Button from "./Button";
import investStocks from "../../assets/sections/invest-stocks.png";
import investGold from "../../assets/sections/invest-gold.png";
import investEtfs from "../../assets/sections/invest-etfs.png";

type Option = {
  title: string;
  description: string;
  image: string;
  imageClassName: string;
};

const options: Option[] = [
  {
    title: "Stocks",
    description:
      "Access 10,000+ US-listed stocks \u2013 from global giants to emerging names \u2013 with $0 trading fees.",
    image: investStocks,
    imageClassName: "h-[56px] w-auto",
  },
  {
    title: "Halal assets",
    description:
      "Discover over 1,300 Shariah-compliant assets, so your investments stay true to your faith.",
    image: investGold,
    imageClassName: "size-[127px]",
  },
  {
    title: "ETFs",
    description:
      "Diversify across markets with a single investment \u2013 ETFs give you broad exposure.",
    image: investEtfs,
    imageClassName: "h-[56px] w-auto",
  },
];

export default function InvestOptions() {
  return (
    <div className="content-stretch flex items-center px-[24px] relative shrink-0 w-full" data-node-id="1013:26310">
      <div
        className="content-stretch flex flex-col gap-[32px] items-center overflow-clip px-[24px] py-[60px] relative rounded-[32px] shrink-0 w-full"
        data-node-id="1013:26241"
      >
        <p className="font-aeonik font-normal leading-[56px] relative shrink-0 text-[48px] text-black text-center tracking-[-0.96px] w-[434px]">
          What can I invest into?
        </p>

        <div className="content-stretch flex flex-col items-start px-[200px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-stretch relative shrink-0 w-full">
            {options.map((option) => (
              <div
                key={option.title}
                className="bg-[#fafafa] border border-[#f6f6f6] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch"
              >
                <div className="flex h-[127px] items-center justify-center relative shrink-0">
                  <img src={option.image} alt="" className={option.imageClassName} />
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-black text-center w-full">
                  <p className="font-aeonik font-normal leading-[29px] relative shrink-0 text-[26px] tracking-[-0.026px] w-full">
                    {option.title}
                  </p>
                  <p className="font-inter font-normal leading-[20px] opacity-50 relative shrink-0 text-[13px] tracking-[-0.13px] w-full">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button>Open account</Button>
      </div>
    </div>
  );
}
