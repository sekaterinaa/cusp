import imgLogo from "../../assets/sections/footer-logo.svg";
import imgInstagram from "../../assets/sections/footer-instagram.svg";
import imgLinkedin from "../../assets/sections/footer-linkedin.svg";
import imgWhatsapp from "../../assets/sections/footer-whatsapp.svg";

const navLinks = [
  "Personalised portfolios",
  "Islamic investing",
  "Pricing & Fees",
  "About us",
  "Blog",
  "Help centre",
];

export default function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[24px] px-[24px] relative shrink-0 w-full" data-node-id="1162:6778">
      <div className="bg-[#1a110a] content-stretch flex items-center justify-center px-[100px] py-[48px] relative rounded-[32px] shrink-0 w-full" data-node-id="1162:6733" data-name="footer">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1040px] max-w-full gap-[48px]" data-node-id="1162:6736">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[400px]" data-node-id="1162:6737">
            <div className="h-[21px] relative shrink-0 w-[140px]" data-node-id="1162:6738" data-name="logo">
              <img alt="CUSP" className="absolute block inset-0 max-w-none size-full" src={imgLogo} />
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="1162:6739">
              <a href="https://www.instagram.com/cuspwealth" target="_blank" rel="noreferrer" aria-label="Instagram" className="overflow-clip relative shrink-0 size-[32px]" data-node-id="1162:6740">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/cuspwealth" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="overflow-clip relative shrink-0 size-[32px]" data-node-id="1162:6744">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedin} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="overflow-clip relative shrink-0 size-[32px]" data-node-id="1162:6748">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWhatsapp} />
              </a>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 w-[640px] max-w-full" data-node-id="1162:6781">
            <div className="content-stretch flex font-aeonik items-start leading-[1.4] relative shrink-0 text-[#f5f5f5] text-[14px] w-full whitespace-nowrap gap-[48px]" data-node-id="1162:6779">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="1162:6754">
                {navLinks.map((label) => (
                  <a key={label} href="#" className="relative shrink-0 hover:opacity-80 transition-opacity">
                    {label}
                  </a>
                ))}
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-node-id="1162:6761">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="1162:6762">
                  <p className="opacity-50 relative shrink-0" data-node-id="1162:6763">have questions?</p>
                  <a href="mailto:support@cuspwealth.com" className="relative shrink-0 hover:opacity-80 transition-opacity" data-node-id="1162:6764">
                    support@cuspwealth.com
                  </a>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="1162:6765">
                  <p className="opacity-50 relative shrink-0" data-node-id="1162:6766">want to collaborate?</p>
                  <a href="mailto:partnerships@cuspwealth.com" className="relative shrink-0 hover:opacity-80 transition-opacity" data-node-id="1162:6767">
                    partnerships@cuspwealth.com
                  </a>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="1162:6768">
                  <p className="opacity-50 relative shrink-0" data-node-id="1162:6769">*T&amp;C Apply</p>
                  <div className="content-stretch flex flex-col gap-[7px] items-start justify-center relative shrink-0 w-full" data-node-id="1162:6770">
                    <a href="#" className="relative shrink-0 hover:opacity-80 transition-opacity" data-node-id="1162:6771">Fees Schedule</a>
                    <a href="#" className="relative shrink-0 hover:opacity-80 transition-opacity" data-node-id="1162:6772">Privacy &amp; Cookies policy</a>
                    <a href="#" className="relative shrink-0 hover:opacity-80 transition-opacity" data-node-id="1162:6773">Terms and Conditions</a>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-inter font-normal leading-[1.4] opacity-50 relative shrink-0 text-[14px] text-white w-full" data-node-id="1162:6782">
              {`Cusp Wealth is a DFSA-regulated company with a Category 4 license to serve retail clients under license number F011420. We are authorised to advise on financial products and arrange deals in investments. Any information presented here is of a general nature and does not take into account your personal circumstances or financial objectives. All materials used in these communications are for marketing purposes of the Cusp Wealth Application; none are meant to offer to sell, a solicitation or an offer to buy, or a recommendation for any investment product or strategy. Investing involves risk; you may lose all or part of your capital. No content from Cusp Wealth should be understood as guaranteeing returns, offering risk-free investments, or promising wealth outcomes. This material is intended for DFSA-defined Retail and/or Professional Clients. If you are unsure of your classification or eligibility, please contact us at support@cuspwealth.com, or refer to our full disclosure at `}
              <a className="underline decoration-solid [text-underline-position:from-font] cursor-pointer" href="https://cuspwealth.com/terms-and-conditions" target="_blank" rel="noreferrer">
                https://cuspwealth.com/terms-and-conditions
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
