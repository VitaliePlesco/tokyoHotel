import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width={130}
        height={25}
        src="images/white-logo.svg"
        alt="logo"
        priority
      />
    </Link>
  );
}
