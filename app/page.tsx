import Image from "next/image";
import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden p-10 rounded-2xl bg-white lg:block">
        <Image
          src="/SejukinLogin.png"
          alt="Image"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full rounded-[50px] p-10 w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
