"use client";
import { useState } from "react";

export default function about() {
  const [count, SetCount] = useState(0);
  return (
    <>
      <div>
        hello, 제 이름은 이승빈 입니다. {count}
        <button
          onClick={() => {
            SetCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            SetCount(count - 1);
          }}
        >
          -
        </button>
        <p>
          폴더구조와 page.js의 기본 이해 폴더는 곧 url의 연장, page.js는 그
          url의 얼굴 폴더내에서 컴포넌트화해서 사용하되, 각각의 컴포넌트는 다른
          폴더에 저장?
        </p>
      </div>
    </>
  );
}
