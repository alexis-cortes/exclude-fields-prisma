const { PrismaClient } = require("@prisma/client");
const { exclude } = require("./helper/exclude-prisma");

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.user.findMany({
    select: {
      ...exclude("user", ["password", "otherField"]),
      profile: {
        select: {
          ...exclude("profile", ["bio", "otherField"]),
        },
      },
    },
  });
  console.log(data);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
