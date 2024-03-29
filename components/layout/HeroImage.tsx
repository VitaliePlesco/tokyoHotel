import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SearchWrapper from "../booking/SearchWrapper";

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

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Container>
        {children}

        <div>
          <SearchWrapper />
        </div>
      </Container>
    </div>
  );
}
