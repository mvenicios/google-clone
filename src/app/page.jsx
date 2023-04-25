import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/*header*/}
      <HomeHeader />
      {/*body*/}
      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="https://img1.picmix.com/output/stamp/normal/3/1/6/7/1737613_80338.png"
        />
        <HomeSearch />
      </div>
    </>
  );
}
