import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="sm:h-[70px] h-[57px] flex items-center justify-between border-b-[1px] sm:px-[50px] px-[20px]">
        <Link href="/">
          <Image src="/images/logo.png" width={147} height={52} alt="logo.png" className="sm:w-[147px] w-[105px]" />
        </Link>
        <div className="flex items-center gap-x-[10px]">
          <h2 className="text-secondary sm:text-[15px] text-[11px]">Have a Risol Day!</h2>
          <Image
            src="/icons/profile.svg"
            width={30}
            height={30}
            alt="search.png"
            className="sm:w-[30px] w-[25px]"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center overflow-hidden gap-y-[36px]">
        <h1 className=" text-[20px] sm:text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] text-center">Unfortunately, <span className="font-bold">Projects</span> is not yet available</h1>
        <Image src="/images/logo-big.png" width={359} height={359} alt="logo.png" className="w-[169px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[359px] h-[169px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] 2xl:h-[359px]"/>
        <h1 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px]">Please wait for future updates!</h1>  
        <Link href="/" className="bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[22px] py-[9px] mb-[55px] sm:text-[18px] text-[10px]">Click Here To Go Back</Link>
      </main>
      {/* Footer */}
      <footer className="flex justify-center items-center h-[70px] text-secondary sm:text-[15px] text-[11px] border-t-2 sm:px-0 px-[24px] text-center">
        Have a Risol Day! - Design inspired by medium.com<br/> & name by haveatomatoday
      </footer>
    </div>
  );
}
