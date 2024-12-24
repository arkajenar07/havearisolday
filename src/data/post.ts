// Define the type for a single post
interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  author: string;
  article: string[];
}

// Array of posts with type annotation
const posts: Post[] = [
  {
    id: 1,
    title: "My life lately",
    description: "Will I survive? Will I enjoy the life? Only God knows. I just hope I can get through it all.",
    date: "Sep 8",
    image: "/images/kucing-kotak.png",
    author: "Ryu",
    article: [
      "Have you ever felt like your life is boring? have u ever thought about not even wanting to live anymore? have you ever thought about that you were born for nothing like, at all? Well, that’s what i thought lately. Losing someone you love deeply is not so great after all. Plus, final test is coming soon, i don’t even know if im ready or not to even finish the first test.",
      "Lots in my mind lately, by lots i mean LOTS. I have troubles opening up to people, even my closest friends, i will get used to it though, just matter of time. Oh, have you ever stumbled upon a person who is younger than you, had the same passion as you, but he is more passionate about what they liked or even better than you? Demotivating isn’t it? Makes you think “I should’ve started earlier” “What am i doing with my life all this time?”. I know everyone has their own journey and path but, seeing them better than you is kind of... Yeah, you know exactly what i mean.",
      "Im not great at opening up, and im also not great at telling stories, so pardon if there is some things that seems like a bullshit or just a nonsensical ranting with nothing to hold into.",
      "I think that’s all, hope i can just get through it all."
    ]
  }
];

export default posts;
