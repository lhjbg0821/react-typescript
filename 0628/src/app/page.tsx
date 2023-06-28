import { NextPage } from "next";
import Image from "next/image"; // image 태그 최적화됨 이거 쓰는게 좋음!
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/images/맹구.png"
        width={200}
        height={200}
        alt="꽃을 든 맹구"
      />
      <div>{process.env.NEXT_JS}</div>

      <Link href="/mint">
        <button>민팅페이지</button>
      </Link>
    </main>
  );
};

export default Home;
