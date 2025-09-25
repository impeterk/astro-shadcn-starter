import { PrismaClient, Prisma } from "@db/generated/prisma/client.js";
import crypto from "crypto";

const prisma = new PrismaClient();

const userData: Array<Prisma.UserCreateInput & { password: string }> = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    password: "password", // Plain for demo; hash in production!
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    password: "password",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
];

export async function main() {
  // Clear existing data for dev/demo
  await prisma.account.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.verification.deleteMany({});

  for (const u of userData) {
    const { password, ...user } = u;
    const createdUser = await prisma.user.create({ data: user });

    // Create Account for sign-in
    await prisma.account.create({
      data: {
        id: crypto.randomUUID(), // <-- Add this line
        accountId: createdUser.id,
        providerId: "credentials", // or your auth provider
        userId: createdUser.id,
        password, // Store plain for demo; hash in production!
      },
    });
  }
  await prisma.$disconnect();
}

main();
