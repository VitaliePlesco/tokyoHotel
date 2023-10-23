type HeroImageProps = {
  url: string;
  height: number;
  children?: React.ReactNode;
};

export default function HeroImage({ url, height, children }: HeroImageProps) {
  return (
    <div
      style={{
        height: `${height}px`,
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}
