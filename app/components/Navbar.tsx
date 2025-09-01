import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between max-container relative z-30 p-4">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={64} />
      </Link>
      <ul className="hidden gap-12 h-full lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
}

export default Navbar;
