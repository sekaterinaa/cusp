type GoalCardProps = {
  title: string;
  description: string;
  background: string;
  image: string;
  icon: string;
  imagePosition: { left: string; top: string; width: string; height: string };
};

export default function GoalCard({
  title,
  description,
  background,
  image,
  icon,
  imagePosition,
}: GoalCardProps) {
  return (
    <div
      className="relative aspect-[922/394] w-full max-w-[922px] shrink-0 overflow-hidden rounded-[32px]"
      style={{ backgroundImage: background }}
    >
      <div
        className="absolute"
        style={{
          left: imagePosition.left,
          top: imagePosition.top,
          width: imagePosition.width,
          height: imagePosition.height,
        }}
      >
        <img
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src={image}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="absolute left-[531px] top-[53.98px] flex h-[285px] w-[347px] flex-col gap-[8.936px] rounded-[32px] bg-white px-[32px] py-[24px] backdrop-blur-[19px]">
        <div className="flex w-fit shrink-0 items-center rounded-[48px] border border-solid border-white bg-gradient-to-b from-white to-[rgba(255,255,255,0.8)] p-[12px] shadow-[0px_4px_33px_0px_rgba(0,0,0,0.16)]">
          <img alt="" className="size-[24px] shrink-0" src={icon} />
        </div>
        <p className="font-aeonik font-normal text-[23.829px] leading-[32.765px] text-black">{title}</p>
        <p className="goal-card__text font-aeonik font-normal text-[18px] leading-[23.829px] text-[rgba(0,0,0,0.6)]">
          {description}
        </p>
      </div>
    </div>
  );
}
