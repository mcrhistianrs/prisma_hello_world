import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso de Testes",
            description: "Muito bom",
            teacher: {
                connectOrCreate: {
                    where: {
                        name: 'Manguinhos',
                    },
                    create: {
                        name: 'Manguinhos',
                    },
                },
            },
        }
    });
}

main();