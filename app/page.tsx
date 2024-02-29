import Image from "next/image";
import { imageBlur } from "./utils/blur-data";
import { Suspense } from "react";
import Banner from "@/components/Banner";

export const Loading = () => {
  return <>Loading...</>;
};

export default function Home() {
  return (
    <h1>
      <Image
        src="https://jashtechperu.com.pe/wp-content/uploads/2023/10/setup-gamer-pc-gaming.jpg"
        alt="Setup Image"
        blurDataURL={imageBlur}
        width={960}
        height={640}
        placeholder="blur"
      />

      <Suspense fallback={<Loading />}>
        <Banner id={1} />
      </Suspense>
    </h1>
  );
}
