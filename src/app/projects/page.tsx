import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="h-[70px] flex items-center justify-between border-b-[1px] px-[50px]">
        <Image src="/images/logo.png" width={147} height={52} alt="logo.png" />
        <div className="flex items-center gap-x-[10px]">
          <h2 className="text-secondary">Have a Risol Day!</h2>
          <Image
            src="/icons/profile.svg"
            width={30}
            height={30}
            alt="search.png"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col px-[173px] items-center justify-center overflow-hidden gap-y-[36px]">
        <h1 className="text-[42px]">Unfortunately, <span className="font-bold">Projects</span> is not yet available</h1>
        <Image src="/images/logo-big.png" width={359} height={359} alt="logo.png" />
        <h1 className="text-[42px]">Please wait for future updates!</h1>  
        <Link href="/" className="bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[22px] py-[9px] mb-[55px]">Click Here To Go Back</Link>
      </main>
      {/* Footer */}
      <footer className="flex justify-center items-center h-[70px] text-secondary text-[15px] border-t-2">
        Have a Risol Day! - Design inspired by medium.com & name by haveatomatoday
      </footer>
    </div>
  );
}
