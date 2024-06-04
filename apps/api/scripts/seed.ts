import type { CreateUser } from "../src/database/schemas";

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
  await fetch("http://localhost:8787/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
