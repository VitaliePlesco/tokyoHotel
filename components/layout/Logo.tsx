import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/images/white-logo.svg";

export default function Logo() {
  return (
    <Link href="/">
      <Image width={130} height={25} src={LogoImage} alt="logo" priority />
    </Link>
  );
}
