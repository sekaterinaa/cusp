import imgGooglePlay from "../../assets/sections/ratings-googleplay.svg";
import imgAppStore from "../../assets/sections/ratings-appstore.svg";
import imgStar from "../../assets/sections/ratings-star.svg";
import imgTrustpilot from "../../assets/sections/ratings-trustpilot.svg";

function Stars() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="relative shrink-0 size-[16px]" data-name="star">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
        </div>
      ))}
    </div>
  );
}

export default function RatingsBar() {
  return (
    <div className="content-stretch flex flex-col items-center px-[111px] py-[27px] relative shrink-0 w-full" data-node-id="968:22586">
      <div className="content-stretch flex gap-[41px] items-center relative shrink-0" data-node-id="968:22554">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="968:22555">
          <div className="relative shrink-0 size-[32px]" data-name="appstore">
            <img alt="App Store" className="absolute block inset-0 max-w-none size-full" src={imgAppStore} />
          </div>
          <Stars />
          <p className="[word-break:break-word] font-aeonik font-normal leading-[14px] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[-0.014px] whitespace-nowrap" data-node-id="968:22563">
            4.8
          </p>
        </div>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="968:22564">
          <div className="relative shrink-0 size-[32px]" data-name="google-play-store">
            <img alt="Google Play" className="absolute block inset-0 max-w-none size-full" src={imgGooglePlay} />
          </div>
          <Stars />
          <p className="[word-break:break-word] font-aeonik font-normal leading-[14px] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[-0.014px] whitespace-nowrap" data-node-id="968:22572">
            4.3
          </p>
        </div>
        <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0" data-node-id="968:22601">
          <div className="h-[32px] relative shrink-0 w-[112px]" data-node-id="968:22592">
            <img alt="Trustpilot" className="absolute block inset-0 max-w-none size-full" src={imgTrustpilot} />
          </div>
          <p className="[word-break:break-word] font-aeonik font-normal leading-[14px] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[-0.014px] whitespace-nowrap" data-node-id="968:22599">
            4.2 out of 5
          </p>
        </div>
      </div>
    </div>
  );
}
