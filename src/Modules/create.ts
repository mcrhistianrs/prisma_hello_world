import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //It will create a new module and connect a existing course
    const result = await prisma.modules.create({
        data: {
            description: 'Aprendendo typescript',
            name: 'Aprendendo typescript',
            courses: {
                create: {
                    course: {
                        connect: {
                            id: "42eedcea-3784-44af-94e4-ad3a35a5d02d"
                        }
                    }
                }
            }
        }
    });
}

main();