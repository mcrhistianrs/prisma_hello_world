import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.authors.create({
        data: {
            name: 'Yoda',
            books: {
                createMany: {
                    data: [
                        { name: 'Como dominar a força' },
                        { name: 'Meditações com Yoda' }
                    ]
                }
            }
        }
    })
}

main()