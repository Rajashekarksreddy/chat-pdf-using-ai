import {getServerAuthSession} from '@/server/auth'
import Link from "next/link";
import Login from "@/components/Login";

export default function Home() {
  const auth = getServerAuthSession()
  return (
    <main className=" flex h-full w-screen flex-col items-center justify-center overflow-x-hidden  py-16 md:py-8">
      <h1 className=" mt-6 text-8xl leading-8 py-36 text-white">
        chat with documents
      </h1>

      <div className=" flex justify-center flex-col items-center py-2">
       {auth && auth.user ? (
        <Link href='/dashboard' legacyBehavior passHref>
          get started
        </Link>
       ): (
        <Login/>
       )}
      </div>
    </main>
  );
}
