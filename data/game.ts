export default [
  {
    name: "Action",
    games: [
      {
        name: "Game 1",
        background_image:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        parent_platforms: [
          { platform: { name: "Platform 1", slug: "platform-1" } },
        ],
        metacritic: 90,
        genres: [],
      },
      {
        name: "Game 2",
        background_image:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        parent_platforms: [
          { platform: { name: "Platform 2", slug: "platform-2" } },
        ],
        metacritic: 85,
        genres: [],
      },
    ],
  },

  {
    name: "Adventure",
    games: [
      {
        name: "Game 3",
        background_image:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        parent_platforms: [
          { platform: { name: "Platform 3", slug: "platform-3" } },
        ],
        metacritic: 95,
        genres: [],
      },
      {
        name: "Game 4",
        background_image:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        parent_platforms: [
          { platform: { name: "Platform 4", slug: "platform-4" } },
        ],
        metacritic: 88,
        genres: [],
      },
    ],
  },
];
