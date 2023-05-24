import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} p-8 max-w-md prose`}>
      <Head>
        <title>ChatGPT Plugin to Find Med Schools to Apply To</title>
      </Head>

      <h1 className="">Use GPT to figure out which med schools to apply to.</h1>

      <p>
        Install the chatgpt plugin from <br />
        <span className="text-blue-500 hover:underline select-all">
          https://med-schools.fardeem.com/
        </span>
        <br />
        and ask it questions like:
      </p>

      <pre className="whitespace-normal">
        my mcat score is 510 and my gpa is 3.5. ideally i would like to go to a
        school in california since it&apos;s close to home but any med school is
        good. give me a list of 20 schools i should apply to and give reasons
        for picking each of them
      </pre>

      <p>Good luck with applications :)</p>

      <footer>
        <p>
          a{" "}
          <a className="text-red-600" href="https://www.fardeem.com">
            fardeem munir
          </a>{" "}
          experiment
        </p>
      </footer>
    </main>
  );
}
