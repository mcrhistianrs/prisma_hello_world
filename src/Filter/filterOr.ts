import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: 'curso de Serverles',
                        mode: 'insensitive'
                    }
                }, {
                    name: 'bla'
                }
            ]
        }
    });
    console.log(result)
}

main()