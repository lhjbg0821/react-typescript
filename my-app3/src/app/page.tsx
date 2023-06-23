import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-blue-300 min-h-screen flex justify-center items-center">
      <Image
        src="/images/맹구.png"
        width={200}
        height={200}
        alt="꽃을 든 맹구"
      />
    </div>
  );
};

export default Home;
