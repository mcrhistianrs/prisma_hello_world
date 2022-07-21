import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //It will create a new  course and model
    const result = await prisma.coursesModel.create({
        data: {
            course: {
                create: {
                    name: "Curso de Serverless",
                    duration: 100,
                    description: 'bacana',
                    teacher: {
                        create: {
                            name: "Jurandir"
                        }
                    }
                }
            },
            module: {
                create: {
                    name: 'Conceitos',
                    description: 'Como funciona a internet'
                }
            }
        }
    });
}

main();