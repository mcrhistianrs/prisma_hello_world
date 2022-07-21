import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.books.create({
        data: {
            name: 'Arquitetura Limpa',
            author: {
                create: {
                    name: 'Tio Bob'
                }
            }
        }
    })
}

main()