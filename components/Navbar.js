import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="textx-2xl font-medium z-20 relative">
      <ul className="flex gap-12">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
