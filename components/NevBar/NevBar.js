import Link from "next/link";

export default function NevBar() {
  return (
    <>
      <div>
        <Link href="/">HOME</Link>
      </div>
      <div>
        <Link href="/about">ABOUT</Link>
      </div>
    </>
  );
}
