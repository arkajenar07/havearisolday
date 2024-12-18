import { useRouter } from "next/router";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "My life lately",
    description: "Will i survive? will i enjoy the life? only god knows. I just hope i can get through it all.",
    date: "Sep 8",
    image: "/images/kucing-kotak.png"
  },
  {
    id: 2,
    title: "Another day",
    description: "It's been a long week, but I'm holding on. Let's see what tomorrow brings.",
    date: "Sep 10",
    image: "/images/kucing-kotak.png"
  },
  {
    id: 3,
    title: "New beginnings",
    description: "Starting something new always feels exciting and scary at the same time.",
    date: "Sep 15",
    image: "/images/kucing-kotak.png"
  }
];

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Cari data berdasarkan id
  const post = posts.find((item) => item.id === parseInt(id as string, 10));

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-[36px] font-black">{post.title}</h1>
      <p className="mt-[20px] text-secondary text-[18px]">{post.description}</p>
      <div className="mt-[20px] flex gap-x-[10px] text-secondary">
        <Image
          src="/icons/calendar.svg"
          width={24}
          height={24}
          alt="calendar"
        />
        {post.date}
      </div>
      <Image
        className="mt-[30px]"
        src={post.image}
        width={500}
        height={400}
        alt={post.title}
      />
    </div>
  );
}