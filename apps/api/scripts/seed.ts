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

const videos: Pick<CreateVideo, "title" | "description">[] = [
  {
    title: "Learn Rust",
    description: "Become great at writing Rust",
  },
  {
    title: "Learn TypeScript",
    description: "Become great at writing TypeScript",
  },
  {
    title: "Walk around the mountains",
    description: "Discover the beauties of Alpes",
  },
  {
    title: "Discover Thailand",
    description: "Let's do a road trip to Bangkok and Chiang Mai",
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
