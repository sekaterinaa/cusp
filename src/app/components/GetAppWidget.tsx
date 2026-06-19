import imgQr from "../../assets/sections/download-qr.png";

export default function GetAppWidget() {
  return (
    <div className="fixed bottom-[40px] right-[40px] z-50 backdrop-blur-[22.5px] bg-[rgba(255,255,255,0.9)] border border-solid border-white content-stretch flex gap-[16px] items-center justify-between px-[16px] py-[12px] rounded-[24px] shadow-[0px_4px_41px_0px_rgba(171,151,141,0.32)]" data-name="Get app">
      <div className="content-stretch flex items-center relative shrink-0">
        <div className="[word-break:break-word] font-aeonik font-normal leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.06px] whitespace-nowrap">
          <p className="leading-[32px] mb-0 whitespace-pre">{`Get the `}</p>
          <p className="leading-[32px] whitespace-pre">CUSP app</p>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[80px]" data-name="image">
        <img
          alt="QR code to download the CUSP app"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full"
          src={imgQr}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
