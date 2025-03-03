import bg from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="mt-24 px-4 sm:px-6 lg:px-8">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="Mountains and forests with two cabins"
        />

        <div className="relative z-10 text-center">
          <h1 className="mb-10 text-5xl font-normal tracking-tight text-primary-50 sm:text-8xl">
            Welcome to paradise.
          </h1>
          <Link
            href="/cabins"
            className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
          >
            Explore luxury cabins
          </Link>
        </div>
      </main>
      <footer className="absolute bottom-0 left-0 z-10 w-full px-4 py-4 text-center sm:px-6 lg:px-8">
        <Link
          href="/privacy-policy"
          className="text-sm text-primary-100 hover:text-primary-300"
        >
          Privacy Policy
        </Link>
      </footer>
    </>
  );
}
