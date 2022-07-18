import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: '77b8f918-1acb-4963-82d1-cfb62dc25f70'
        },
        data: {
            duration: 300
        }
    });
    console.log(result);
}

main();