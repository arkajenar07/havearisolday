"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import posts from "@/data/post";
import cookings from "@/data/cooking";


export default function Landing() {
  const [activeTab, setActiveTab] = useState<"journals" | "cookings" | "projects">("journals");

const handleTabChange = (tab: "journals" | "cookings" | "projects") => {
  setActiveTab(tab);
};

const displayedData =
  activeTab === "journals"
    ? posts
    : activeTab === "cookings"
    ? cookings
    : []; // Tab projects tidak mengambil data
  
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="sm:h-[70px] h-[57px] flex items-center justify-between border-b-[1px] sm:px-[50px] px-[20px]">
        <Image src="/images/logo.png" width={147} height={52} alt="logo.png" className="sm:w-[147px] w-[105px]" />
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
      <main className="flex flex-1 2xl:px-[173px] sm:px-[96px] justify-between overflow-hidden xl:gap-x-[48px] gap-x-[24px]">
        <div className="md:mt-[81px] sm:mt-[48px] mt-[27px]  max-w-[858px] flex-grow overflow-scroll example">
          <div className="lg:block hidden">
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
          <div className="lg:hidden flex items-start xs:gap-x-[32px] gap-x-[16px] sm:px-0 px-[20px]">
            <Image
              src="/images/fox.png"
              width={110}
              height={119}
              alt="profile"
              className="sm:w-[110px] sm:h-[110px] xs:w-[70px] xs:h-[70px] w-[55px] h-[55px]"
            />
            <div>
            <div className="flex items-end xs:gap-x-[8px] gap-x-[4px]">
              <h2 className="xs:text-[36px] text-[22px] font-bold leading-none">Ryu</h2>
              <h2 className="sm:text-[18px] xs:text-[16px] text-[13px] text-secondary">he/him</h2>
            </div>
            <h2 className="text-secondary sm:text-[18px] xs:text-[16px] text-[13px] mt-[6px]">
                a.k.a Iyuka, Cyn, Ihsan
            </h2>
            <p className="xs:mt-[18px] mt-[9px] 2xl:max-w-full max-w-[413px] sm:text-[18px] xs:text-[16px] text-[13px] text-secondary">
              Writing my heart out. I do graphic design, still learning to draw
              & code. I play drums sometimes
            </p>
            <div className="mt-[22px] flex items-center justify-start gap-x-[18px]">
            <Link href="https://www.instagram.com/ryusolmayo/">
              <div className="bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[15px] py-[9px] xs:text-[14px] text-[9px]">
                <Image
                  src="/icons/insta.svg"
                  width={20}
                  height={20}
                  alt="insta"
                  className="xs:w-[20px] w-[14px]"
                />
                @ryusolmayo
              </div>
            </Link>
            <Link href="https://open.spotify.com/user/31zgx665pbmbakyabp22yoyklz7m?si=823091f45f404e41">
              <div className="bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[15px] py-[9px] xs:text-[14px] text-[9px]">
                <Image
                  src="/icons/spotify.svg"
                  width={20}
                  height={20}
                  alt="insta"
                  className="xs:w-[20px] w-[14px]"
                />
                Iyuka
              </div>
            </Link>
            </div>
            </div>
          </div>
          <div className="mt-[42px] w-full example flex flex-col items-start gap-y-[36px]">
            <div className="w-full border-b-2 flex gap-x-[27px] sm:mx-0 mx-[20px]">
              <button
                onClick={() => handleTabChange("journals")}
                className={`sm:pb-[18px] pb-[14px] mb-[-2px] sm:text-[18px] text-[13px] ${
                  activeTab === "journals" ? "border-b-2 border-black" : "border-b-2"
                }`}
              >
                Journals
              </button>
              <button
                onClick={() => handleTabChange("projects")}
                className={`sm:pb-[18px] pb-[14px] mb-[-2px] sm:text-[18px] text-[13px] lg:hidden block ${
                  activeTab === "projects" ? "border-b-2 border-black" : "border-b-2"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleTabChange("cookings")}
                className={`sm:pb-[18px] pb-[14px] mb-[-2px] sm:text-[18px] text-[13px] ${
                  activeTab === "cookings" ? "border-b-2 border-black" : "border-b-2"
                }`}
              >
                Cookings
              </button>
            </div>
            {activeTab === "projects" ? (
              <div className="lg:hidden relative w-full mx-[-10] flex justify-center items-center">
                <div className="w-full h-full overflow-hidden example flex-grow sm:px-0 px-[20px]">
                    <h1 className="text-[18px] font-semibold">
                      Some things that i made:
                    </h1>
                    <div className="mt-[18px] flex flex-col gap-y-[54px]">
                      <div>
                        <h1>Jerseys & T-Shirts</h1>
                        <div className="mt-[18px] flex gap-x-[20px]">
                          <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                            <Image
                              src="/images/funrunjersey.png"
                              width={184}
                              height={146}
                              alt="jersey"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                            <Image
                              src="/images/skomdajersey2.png"
                              width={184}
                              height={146}
                              alt="jersey"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1>Fish Fushion Re-Brand (LKS Wilker 2024)</h1>
                        <div className="mt-[18px] flex gap-x-[20px]">
                          <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                            <Image
                              src="/images/page12.png"
                              width={184}
                              height={146}
                              alt="jersey"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                            <Image
                              src="/images/01.png"
                              width={184}
                              height={146}
                              alt="jersey"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1>Jerseys & T-Shirts</h1>
                        <div className="mt-[18px] flex gap-x-[20px]">
                          <div className="xl:w-[184px] xl:h-[146px] w-[105px] h-[148px] overflow-hidden">
                            <Image
                              src="/images/ml.png"
                              width={184}
                              height={146}
                              alt="jersey"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="xl:w-[184px] xl:h-[146px] w-[105px] h-[148px] overflow-hidden">
                            <Image
                              src="/images/SAC_Poster.png"
                              width={184}
                              height={146}
                              alt="jersey"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="xl:w-[184px] xl:h-[146px] w-[105px] h-[148px] overflow-hidden">
                            <Image
                              src="/images/17an-isment.png"
                              width={184}
                              height={146}
                              alt="jersey"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-[480px] bg-gradient-to-t from-[#3F3F3F] flex flex-col items-center justify-end flex-grow">
                    <Link href="/projects" className="bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[22px] py-[9px] mb-[40px] text-[13px]">See Projects Now</Link>
                    <p className="text-[13px] text-white mb-[22px]">Have a Risol Day! - Design inspired by medium.com</p>
                </div>
              </div>
            ) : (
              displayedData?.map((post) => (
                <Link className="w-full" key={post.id} href={`/${activeTab}/${post.id}`}>
                  <div className="w-full flex items-start justify-between xl:pb-[36px] pb-[27px] border-b-[2px] sm:px-0 px-[20px]">
                    <div>
                      <h1 className="font-bold xl:text-[30px] sm:text-[24px] text-[17px]">{post.title}</h1>
                      <p className="sm:mt-[12px] mt-[8px] xl:w-[423px] sm:w-[320px] w-[240px] text-secondary xl:text-[18px] sm:text-[14px] text-[11px]">
                        {post.description}
                      </p>
                      <div className="sm:mt-[30px] mt-[17px] flex sm:gap-x-[10px] gap-x-[6px] text-secondary xl:text-[18px] sm:text-[14px] text-[11px]">
                        <Image
                          src="/icons/calendar.svg"
                          width={24}
                          height={24}
                          alt="calendar"
                          className="sm:w-[24px] w-[15px]"
                        />
                        {post.date}
                      </div>
                    </div>
                    <div className="overflow-hidden sm:w-[184px] sm:h-[146px] w-[105px] h-[87px] rounded-[3px]">
                      <Image
                        src={post.image}
                        width={660}
                        height={743}
                        className="w-full h-full object-cover"
                        alt={post.title}
                      />
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="lg:block hidden relative max-w-[595px] h-full overflow-hidden example pt-[57px] border-x-[2px] flex-grow">
          <div className="2xl:pl-[58px] pl-[24px] 2xl:pr-[58px] pr-[24px]">
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
            <p className="mt-[18px] 2xl:max-w-full max-w-[413px] 2xl:text-[18px] text-[16px] text-secondary">
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
                  <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                    <Image
                      src="/images/funrunjersey.png"
                      width={184}
                      height={146}
                      alt="jersey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                    <Image
                      src="/images/skomdajersey2.png"
                      width={184}
                      height={146}
                      alt="jersey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1>Fish Fushion Re-Brand (LKS Wilker 2024)</h1>
                <div className="mt-[18px] flex gap-x-[20px]">
                  <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                    <Image
                      src="/images/page12.png"
                      width={184}
                      height={146}
                      alt="jersey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                    <Image
                      src="/images/01.png"
                      width={184}
                      height={146}
                      alt="jersey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1>Jerseys & T-Shirts</h1>
                <div className="mt-[18px] flex gap-x-[20px]">
                  <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                    <Image
                      src="/images/funrunjersey.png"
                      width={184}
                      height={146}
                      alt="jersey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="xl:w-[184px] xl:h-[146px] w-[146px] h-[116px] overflow-hidden">
                    <Image
                      src="/images/skomdajersey2.png"
                      width={184}
                      height={146}
                      alt="jersey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="absolute bottom-0 w-full h-[480px] bg-gradient-to-t from-[#3F3F3F] flex flex-col items-center justify-end flex-grow">
            <Link href="/projects" className="bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[22px] py-[9px] mb-[55px]">See Projects Now</Link>
            <p className="text-[13px] text-white mb-[48px]">Design inspired by medium.com</p>
          </div>
        </div>
      </main>
    </div>
  );
}