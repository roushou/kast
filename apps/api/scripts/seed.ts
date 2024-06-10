import type { CreateUser, CreateVideo } from "../src/database/schemas";

const apiBaseUrl = "http://localhost:8787";

const users: CreateUser[] = [
  {
    address: "0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9",
    username: "Yukisaki",
    description: `塊魂RTAします。耳も振ります。それ以外もします。Please Call me "Haru" I'm Katamari Speedrunnya! Tell your friends about me! ※Please don't eat my ears!! 連絡先 Contact➡ HarutomoRTA(at)gmail.com`,
  },
];

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  console.log(`Creating user ${user.username}`);
  await fetch(`${apiBaseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

const videos: Pick<
  CreateVideo,
  "title" | "description" | "views" | "categories"
>[] = [
  {
    title: "Learn Rust",
    description: "Become great at writing Rust",
    views: 1100,
    categories: ["programming"],
  },
  {
    title: "Learn TypeScript",
    description: "Become great at writing TypeScript",
    views: 500,
    categories: ["programming"],
  },
  {
    title: "Walk around the mountains",
    description: "Discover the beauties of Alpes",
    views: 1200,
    categories: ["travel"],
  },
  {
    title: "Discover Thailand",
    description: "Let's do a road trip to Bangkok and Chiang Mai",
    views: 700,
    categories: ["travel"],
  },
  {
    title: "Full Body Workout",
    description: "Train your whole body",
    views: 122,
    categories: ["gym"],
  },
  {
    title: "Leg Day",
    description: "Let's do some squat, press and running",
    views: 150,
    categories: ["gym"],
  },
  {
    title: "3AM Lofi Mix",
    description: "Playlist of relaxing Lofi musics",
    views: 12000,
    categories: ["music"],
  },
  {
    title: "LoL Gameplay",
    description: "Learn to play league of legends",
    views: 5000,
    categories: ["gaming"],
  },
];

for (let i = 0; i < videos.length; i++) {
  const video = videos[i];
  console.log(`Creating video ${video.title}`);
  await fetch(`${apiBaseUrl}/videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
}
