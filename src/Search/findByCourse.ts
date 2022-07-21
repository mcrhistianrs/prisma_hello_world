import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: "1c897357-7fa8-46bd-b56e-7041aac95175"
        },
        include: {
            modules: true
        }
    });
    console.log(JSON.stringify(result))
}

main();