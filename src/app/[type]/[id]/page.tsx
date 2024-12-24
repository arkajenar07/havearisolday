'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import posts from "@/data/post";
import cookings from "@/data/cooking";

export default function PostDetail() {
  const params = useParams();
  const { type, id } = params; // Extract type and id from URL

  // Determine dataset based on type
  const dataset = type === "journals" ? posts : cookings;

  // Find the data by id
  const data = dataset.find((item) => item.id === parseInt(id as string, 10));

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
      <div className='px-[541px] w-full'>
        <div className="flex items-center gap-x-[30px] py-[52px] border-b-2">
          <Image src="/images/fox.png" width={64} height={64} alt='fox'></Image>
          <div>
            <h1 className="w-[18px] font-semibold">Ryu</h1>
            <p className="text-secondary">2 min read - Sep 8, 2024</p>
          </div>
        </div>
        <div className="mt-[56px] w-full flex flex-col items-center">
          <h1 className="text-[36px] font-black mb-[58px]">{data.title}</h1>
          <div className="w-full h-[432px] overflow-hidden">
            <Image
              className="mt-[px]"
              src={data.image}
              width={838}
              height={432}
              alt={data.title}
            />
          </div>
          <div className="mt-[58px] py-[56px] w-full border-y-2 flex flex-col gap-y-[48px]">
            {data.article.map((paragraph, index) => (
              <p key={index} className="w-full text-[24px] mt-[10px] text-justify font-light text-[#000]">
                {paragraph}
              </p>
            ))}
            {type === "cookings" && data.recipes && data.recipes.length > 0 && (
              <div className="list-decimal">
              {data.recipes.map((recipe, index) => (
                <li key={index} className="text-[24px] text-justify font-light text-[#000]">
                  {recipe}
                </li>
              ))}
              </div>   
            )}
            <p className="text-[24px] mt-[10px] text-justify font-light text-[#000000]">~{data.author}</p>
          </div>
        </div>
        <div className="flex items-start gap-x-[30px] py-[52px]">
          <Image src="/images/fox.png" width={64} height={64} alt='fox'></Image>
          <div className='flex flex-col items-start'>
            <h1 className="font-semibold">Written by {data.author}</h1>
            <p className="w-[413px] text-secondary">Writing my heart out. I do graphic design, still
              learning to draw & code. I play drums sometimes</p>
            <div className="mt-[16px] flex gap-x-[10px] text-secondary">
              <Image
                src="/icons/calendar.svg"
                width={24}
                height={24}
                alt="calendar"
              />
              {data.date}, 2024
            </div>
            <Link href="#">
              <div className="mt-[19px] bg-primary-btn flex items-center rounded-full gap-x-[6px] px-[15px] py-[9px]">
                See More From Ryu
              </div>
            </Link>
          </div>
        </div>
      </div>
      <footer className="flex justify-center items-center h-[70px] text-secondary text-[15px] border-t-2">
        Have a Risol Day! - Design inspired by medium.com & name by haveatomatoday
      </footer>
    </div>
  );
}