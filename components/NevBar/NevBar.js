import Link from "next/link";

export default function NevBar() {
  return (
    <>
      <div>
        <Link href="/">
          <p>hello</p>
          {/* Anchor태그가 안들어 갈 뿐, 나머지 태그를 넣었을 때에는 여전히 동작한다. 
         Link에는 스타일이 안들어가므로 참고하자 */}
        </Link>
      </div>
      <div>
        <Link href="/about">ABOUT</Link>
      </div>
    </>
  );
}
