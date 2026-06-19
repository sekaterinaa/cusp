import imgLogo from "../../assets/sections/footer-logo.svg";
import imgLinkedin from "../../assets/sections/footer-linkedin.svg";
import imgWhatsapp from "../../assets/sections/footer-whatsapp.svg";
import imgMail from "../../assets/sections/footer-mail.svg";

export default function Footer() {
  return (
    <div className="bg-[#1a110a] content-stretch flex items-center justify-center px-[180px] py-[48px] relative shrink-0 w-full" data-node-id="982:24625" data-name="footer">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[63px] items-start justify-center min-w-px relative" data-node-id="982:24626">
        <div className="h-[29px] relative shrink-0 w-[194.062px]" data-node-id="982:24627" data-name="logo">
          <img alt="CUSP" className="absolute block inset-0 max-w-none size-full" src={imgLogo} />
        </div>
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="982:24629">
          <p className="[word-break:break-word] font-aeonik font-normal leading-[40px] not-italic relative shrink-0 text-[37px] text-white max-w-[885px]" data-node-id="982:24631">
            Have any questions or just want to keep in touch?
          </p>
          <div className="content-stretch flex flex-wrap gap-[63px] items-start relative shrink-0" data-node-id="982:24632">
            <a href="https://www.linkedin.com/company/cuspwealth" target="_blank" rel="noreferrer" className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="982:24633">
              <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="982:24634" data-name="linkedin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedin} />
              </div>
              <p className="[word-break:break-word] font-aeonik font-normal leading-[1.4] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] whitespace-nowrap" data-node-id="982:24638">
                Follow us on LinkedIn
              </p>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="982:24639">
              <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="982:24640" data-name="whatsapp">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWhatsapp} />
              </div>
              <p className="[word-break:break-word] font-aeonik font-normal leading-[1.4] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] whitespace-nowrap" data-node-id="982:24645">
                Chat on WhatsApp
              </p>
            </a>
            <a href="mailto:support@cuspwealth.com" className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="982:24646">
              <div className="relative shrink-0 size-[36px]" data-node-id="982:24647" data-name="mail">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMail} />
              </div>
              <p className="[word-break:break-word] font-aeonik font-normal leading-[1.4] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] whitespace-nowrap" data-node-id="982:24652">
                support@cuspwealth.com
              </p>
            </a>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-wrap gap-[63px] items-start not-italic relative shrink-0 w-full" data-node-id="982:24653">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap" data-node-id="982:24654">
              <p className="font-aeonik font-semibold leading-[1.4] relative shrink-0" data-node-id="982:24655">*T&amp;C Apply</p>
              <div className="content-stretch flex flex-col font-inter font-normal gap-[12px] items-start justify-center relative shrink-0 w-full" data-node-id="982:24656">
                <a href="#" className="leading-[1.4] relative shrink-0 underline decoration-solid [text-underline-position:from-font]" data-node-id="982:24657">
                  Fees Schedule
                </a>
                <a href="#" className="leading-[1.4] relative shrink-0 underline decoration-solid [text-underline-position:from-font]" data-node-id="982:24658">
                  Privacy &amp; Cookies Policy
                </a>
                <a href="#" className="leading-[1.4] relative shrink-0 underline decoration-solid [text-underline-position:from-font]" data-node-id="982:24659">
                  Terms and Conditions
                </a>
              </div>
            </div>
            <p className="flex-[1_0_0] font-inter font-normal leading-[1.4] min-w-px opacity-50 relative text-[16px] text-white" data-node-id="982:24660">
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
