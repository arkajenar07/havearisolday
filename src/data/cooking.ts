// Define the type for a single post
interface Cooking {
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
const cookings: Cooking[] = [
  {
    id: 1,
    title: "Simple Omelette",
    description: "Indomie omelette, simple, what could go wrong?",
    date: "Dec 2",
    image: "/images/omelette.png",
    author: "Ryu",
    article: [
      "Well, yeah, here it is, i start to cook again. Mom told me i was not busy enough so i cook, again. Missed the moments to be honest, reliving it feels great but surreal at the same time, in the end im proud of myself and i hope i can be more consistent soon. ",
      "Gotta start all over again cuz i barely cook, skills are gone, and ill get them back.",
      "Anyways here is the recipe (credit to cookpad):",
    ],
    recipes: [
      "1 bungkus mie instant",
      "2 butir telur",
      "1/4 sdt garam, sesuai selera",
      "1 sdt daun bawang kering, pengganti daun bawang segar",
      "1 buah tomat, potong kotak kecil", 
      "Keju cheddar, potong kotak kecil", 
      "Keju stracciatella, mirip ricotta atau philadelphia"
    ]
  }
];

export default cookings;
