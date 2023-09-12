import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constants";
import UserMenu from "./UserMenu";

export default function NavBar() {
  return (
    <div className="w-full bg-blue-200 p-4 flex justify-between  ">
      <div>
        <Link href="/">
          <Image
            width={150}
            height={35}
            src="images/black-logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex justify-between gap-12">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <UserMenu />
      </div>
    </div>
  );
}
