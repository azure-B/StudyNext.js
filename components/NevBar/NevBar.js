import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NevBar() {
  const router = useRouter();
  return (
    <>
      <div>
        <Link href="/" className={`${styles.nav} ${styles.Hello}`}>
          <p style={{ color: router.pathname === "/" ? "red" : "blue" }}>
            hello
          </p>
          {/* Anchor태그가 안들어 갈 뿐, 나머지 태그를 넣었을 때에는 여전히 동작한다. 
         Link에는 스타일이 안들어가므로 참고하자 */}
        </Link>
      </div>
      <div>
        <Link href="/about">
          <p style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
            ABOUT
          </p>
        </Link>
      </div>
    </>
  );
}
