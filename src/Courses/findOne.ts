import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
    const result = await prisma.courses.findFirst();
    console.log(result);

}

main();