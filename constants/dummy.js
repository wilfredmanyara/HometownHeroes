import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Brits Coffee Place",
    creator: "Putri Intan",
    price: 0.99,
    description:
      "Welcome to Brits Coffee Place, your cozy caffeine haven in the heart of town. With its charming British-inspired decor, this local gem offers a warm and inviting atmosphere. Sip on expertly brewed coffee while enjoying the friendly chatter and community spirit. ",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 1.00,
        image: assets.person02,
        date: "November 21, 2023 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 0.79,
        image: assets.person03,
        date: "November 27, 2023 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 2.10,
        image: assets.person04,
        date: "November 31, 2023 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Artisanal Bakeshop",
    creator: "Siti Nurhaliza",
    price: 2.49,
    description:
      "A local bakery known for its artisanal bread, pastries, and cakes made from high-quality ingredients, creating a delightful experience for customers.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 2.10,
        image: assets.person04,
        date: "November 12, 2023 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "Adventure Gear Outfitters",
    creator: "Elisabeth aho",
    price: 90.99,
    description:
      "A store catering to outdoor enthusiasts, offering a diverse range of gear and equipment for activities such as hiking, camping, and backpacking.",
    image: assets.nft03,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "November 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "November 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "NFT-04",
    name: "nft04nft",
    creator: "Putri Intan",
    price: 54.25,
    description:
      "A store specializing in art and craft supplies, offering a wide range of materials for hobbyists, artists, and DIY enthusiasts to unleash their creativity.",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "November 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-05",
    name: "Sew Elegant Boutique",
    creator: "David doe",
    price: 10.25,
    description:
      "A boutique offering expert clothing alterations and tailoring services, catering to individuals who seek custom-fitted and stylish attire.",
    image: assets.nft05,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-06",
    name: "FitZone Fitness Studio",
    creator: "Leo Messi",
    price: 20.25,
    description:
      "A community-focused fitness studio offering a range of classes, personal training, and wellness programs to help people achieve their health and fitness goals.",
    image: assets.nft06,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-07",
    name: "Book Haven",
    creator: "Victor de la Cruz",
    price: 18.25,
    description:
      "A cozy independent bookstore that specializes in a curated selection of books, hosting book clubs, and promoting a love for literature within the community.",
    image: assets.nft07,
    bids: [],
  },
];

export { NFTData };
