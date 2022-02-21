const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      password: "secretPassword",
      otherField: "omitted field",
      profile: {
        create: {
          profileName: "Alice Profile",
          bio: "I like turtles",
          otherField: "omitted field",
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
