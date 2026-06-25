import imgPhone from "../../assets/sections/download-phone.png";
import imgQr from "../../assets/sections/download-qr.png";

export default function DownloadCUSP() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] pt-[60px] relative shrink-0 w-full" data-node-id="982:22686">
      <div className="h-[374px] overflow-clip pt-[40px] relative shrink-0 w-full" data-node-id="982:24057">
        <div className="absolute content-stretch flex flex-col gap-[12px] h-[323px] items-start left-0 px-[200px] py-[32px] rounded-[32px] top-[51.41px] w-full" style={{ backgroundImage: "linear-gradient(133.05919637495649deg, rgb(227, 205, 183) 38.062%, rgb(250, 247, 238) 116.84%)" }} data-node-id="982:22687">
          <div className="[word-break:break-word] font-aeonik font-normal leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[434px] whitespace-pre-wrap" data-node-id="982:22688">
            <p className="leading-[29px]">This is your CUSP of change</p>
          </div>
          <p className="[word-break:break-word] font-aeonik font-normal leading-[56px] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[434px]" data-node-id="982:22714">
            Download app
          </p>
          <div className="absolute h-[638px] right-[189px] top-[-50.47px] w-[312.146px]" data-node-id="982:24055" data-name="image 583338">
            <img alt="CUSP app on phone" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhone} loading="lazy" decoding="async" />
          </div>
          <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[24px] shrink-0" data-node-id="982:24058" data-name="image">
            <div className="relative rounded-[24px] shrink-0 size-[113px]">
              <img alt="QR code to download the CUSP app" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgQr} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
