import { Prisma, PrismaClient, Modules } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.$queryRaw<Modules[]>(
        Prisma.sql`select * from modules`
    )
    result.map(item => console.log(item.name))
}

main();