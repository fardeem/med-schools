import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} p-8`}>
      <h1 className="">Use GPT to figure out which med schools to apply to</h1>
    </main>
  );
}
