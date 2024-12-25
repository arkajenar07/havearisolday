// Define the type for a single post
interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  author: string;
  article: string[];
  recipes: string[];
}

// Array of posts with type annotation
const posts: Post[] = [
  {
    id: 1,
    title: "Who will i talk to?",
    description: "Boring, hobbies? nah, abandoned it long ago.",
    date: "Dec 25",
    image: "/images/kucing-ikan.png",
    author: "Ryu",
    article: [
      "I don’t even understand why, i was talkative before, i have many friends yet i can’t really talk all my heart out to them. It felt bizarre you know? I feel empty, not in some shit corny ways but, i really feel empty.",
      "I guess this is just my bad habit of not wanting to talk to people near me, everything is getting better though, did exercise every day and started to cook again even though I have to start all over again but i think it’s the beauty of it: learning everything again and enjoy the process.",
      "I also started learning to draw, for my future u know? i wanna go DKV but I feel like it's too hard for me. I've got this scholarship to Japan, but I’m not really sure if I want to go there or not. I can’t leave my family behind because i’ll miss them so much.",
      "Next year will be my year, i’ve learned a lot this year and i’ll use the lesson for me to get better, aamiin.",
      "Hope future me will always be happy... always."
    ],
    recipes: [

    ]
  },
  {
    id: 2,
    title: "My life lately",
    description: "Will i survive? will i enjoy the life? only god knows. I just hope i can get through it all.",
    date: "Nov 18",
    image: "/images/kucing-kotak.png",
    author: "Ryu",
    article: [
      "Have you ever felt like your life is boring? have u ever thought about not even wanting to live anymore? have you ever thought about that you were born for nothing like, at all? Well, that’s what i thought lately. Losing someone you love deeply is not so great after all. Plus, final test is coming soon, i don’t even know if im ready or not to even finish the first test.",
      "Lots in my mind lately, by lots i mean LOTS. I have troubles opening up to people, even my closest friends, i will get used to it though, just matter of time. Oh, have you ever stumbled upon a person who is younger than you, had the same passion as you, but he is more passionate about what they liked or even better than you? Demotivating isn’t it? Makes you think “I should’ve started earlier” “What am i doing with my life all this time?”. I know everyone has their own journey and path but, seeing them better than you is kind of... Yeah, you know exactly what i mean.",
      "Im not great at opening up, and im also not great at telling stories, so pardon if there is some things that seems like a bullshit or just a nonsensical ranting with nothing to hold into.",
      "I think that’s all, hope i can just get through it all."
    ],
    recipes: [

    ]
  },
];

export default posts;
