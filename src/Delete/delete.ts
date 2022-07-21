import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModel.delete({
        where: {
            id: '70a6705e-ffe9-46b7-95d6-6693a46989ad'
        }
    })
    console.log(result)
}

main();