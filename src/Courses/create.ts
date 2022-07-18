import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso de Node",
            description: "Muito bom",
            teacher: {
                connectOrCreate: {
                    where: {
                        name: 'Fulano',
                    },
                    create: {
                        name: 'Fulano',
                    },
                },
            },
        }
    });
}

main();