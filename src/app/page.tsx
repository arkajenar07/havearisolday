import Image from "next/image";
import Link from "next/link";

import posts from "@/data/post";

export default function Landing() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="h-[70px] flex items-center justify-between border-b-[1px] px-[50px]">
        <div className="flex items-center gap-x-[42px]">
          <Image src="/images/logo.png" width={147} height={52} alt="logo.png" />
          <div className="flex items-center gap-x-[10px]">
            <button>
              <Image
                src="/icons/search.svg"
                width={30}
                height={30}
                alt="search.png"
              />
            </button>
            <input
              className="font-inter focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
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
      <main className="flex flex-1 px-[173px] justify-between overflow-hidden">
        <div className="mt-[81px] max-w-[858px] flex-grow overflow-scroll example">
          <div>
            <h1 className="font-black text-[40px]">Ryu</h1>
            <div className="flex items-center gap-x-[8px]">
              <Image
                src="/icons/pencil.svg"
                width={24}
                height={24}
                alt="search.png"
              />
              <h2 className="text-secondary text-[18px]">
                a.k.a Iyuka, Cyn, Ihsan
              </h2>
            </div>
          </div>
          <div className="mt-[42px] w-full example flex flex-col items-start gap-y-[36px]">
            {posts.map((post) => (
              <Link className="w-full" key={post.id} href={`/detail/${post.id}`}>
                <div className="w-full flex items-start justify-between pb-[36px] border-b-[2px]">
                  <div>
                    <h1 className="font-black text-[30px]">{post.title}</h1>
                    <p className="mt-[12px] w-[423px] text-secondary text-[18px]">
                      {post.description}
                    </p>
                    <div className="mt-[30px] flex gap-x-[10px] text-secondary">
                      <Image
                        src="/icons/calendar.svg"
                        width={24}
                        height={24}
                        alt="calendar"
                      />
                      {post.date}
                    </div>
                  </div>
                  <Image
                    src={post.image}
                    width={184}
                    height={146}
                    alt={post.title}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="relative w-[595px] h-full overflow-hidden example pt-[57px] border-x-[2px]">
          <div className="pl-[58px]">
          <div>
            <Image
              src="/images/fox.png"
              width={110}
              height={119}
              alt="profile"
            />
            <div className="flex items-center gap-x-[12px] mt-[18px]">
              <h2 className="text-[18px] font-semibold">Ryu</h2>
              <h2 className="text-[18px] text-secondary">he/him</h2>
            </div>
            <p className="mt-[18px] w-[413px]">
              Writing my heart out. I do graphic design, still learning to draw
              & code. I play drums sometimes
            </p>
          </div>
          <div className="flex gap-x-[12px] mt-[18px]">
            <Link href="https://www.instagram.com/ryusolmayo/">
              <div className="bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[15px] py-[9px]">
                <Image
                  src="/icons/insta.svg"
                  width={20}
                  height={20}
                  alt="insta"
                />
                @ryusolmayo
              </div>
            </Link>
            <Link href="https://open.spotify.com/user/31zgx665pbmbakyabp22yoyklz7m?si=823091f45f404e41">
              <div className="bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[15px] py-[9px]">
                <Image
                  src="/icons/spotify.svg"
                  width={20}
                  height={20}
                  alt="insta"
                />
                Iyuka
              </div>
            </Link>
          </div>
          <div className="mt-[51px]">
            <h1 className="text-[18px] font-semibold">
              Some things that i made:
            </h1>
            <div className="mt-[18px] flex flex-col gap-y-[54px]">
              <div>
                <h1>Jerseys & T-Shirts</h1>
                <div className="mt-[18px] flex gap-x-[20px]">
                  <div>
                    <Image
                      src="/images/funrunjersey.png"
                      width={184}
                      height={146}
                      alt="jersey"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/skomdajersey2.png"
                      width={184}
                      height={146}
                      alt="jersey"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1>Fish Fushion Re-Brand (LKS Wilker 2024)</h1>
                <div className="mt-[18px] flex gap-x-[20px]">
                  <div>
                    <Image
                      src="/images/page12.png"
                      width={184}
                      height={146}
                      alt="jersey"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/01.png"
                      width={184}
                      height={146}
                      alt="jersey"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1>Jerseys & T-Shirts</h1>
                <div className="mt-[18px] flex gap-x-[20px]">
                  <div>
                    <Image
                      src="/images/funrunjersey.png"
                      width={184}
                      height={146}
                      alt="jersey"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/skomdajersey2.png"
                      width={184}
                      height={146}
                      alt="jersey"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="absolute bottom-0 w-[591px] h-[480px] bg-gradient-to-t from-[#3F3F3F] flex flex-col items-center justify-end">
            <button className="bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[22px] py-[9px] mb-[55px]">See Projects Now</button>
            <p className="text-[13px] text-white mb-[48px]">Design inspired by medium.com</p>
          </div>
        </div>
      </main>
    </div>
  );
}