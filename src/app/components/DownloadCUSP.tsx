import imgPhone from "../../assets/sections/download-phone.png";
import imgQr from "../../assets/sections/download-qr.png";

export default function DownloadCUSP() {
  return (
    <div className="content-stretch flex flex-col items-start mt-[60px] px-[24px] relative shrink-0 w-full" data-node-id="982:22686">
      <div className="h-[374px] overflow-clip relative shrink-0 w-full" data-node-id="982:24057">
        <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 px-[200px] py-[32px] rounded-[32px] top-[51.41px] w-full" data-node-id="982:22687" style={{ backgroundImage: "linear-gradient(228.81224057338144deg, rgb(181, 126, 74) 32.615%, rgb(249, 245, 240) 102.89%), linear-gradient(90deg, rgb(251, 237, 222) 0%, rgb(251, 237, 222) 100%)" }}>
          <div className="[word-break:break-word] font-aeonik font-normal leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[434px] whitespace-pre-wrap" data-node-id="982:22688">
            <p className="leading-[29px] mb-0">{`Ready to make `}</p>
            <p className="leading-[29px]">your money work?</p>
          </div>
          <p className="[word-break:break-word] font-aeonik font-normal leading-[56px] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[434px]" data-node-id="982:22714">
            Download CUSP
          </p>
          <div className="absolute h-[638px] right-[189px] top-[-50.47px] w-[312.146px]" data-node-id="982:24055" data-name="image 583338">
            <img alt="CUSP app on phone" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhone} loading="lazy" decoding="async" />
          </div>
          <div className="relative rounded-[4px] shrink-0 size-[121px]" data-node-id="982:24058" data-name="image">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]">
              <div className="absolute bg-white inset-0 rounded-[4px]" />
              <img alt="QR code to download the CUSP app" className="absolute max-w-none object-cover rounded-[4px] size-full" src={imgQr} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
