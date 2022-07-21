import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //It will create a existing course and model
    const result = await prisma.coursesModel.create({
        data: {
            fk_id_course: '42eedcea-3784-44af-94e4-ad3a35a5d02d',
            fk_id_module: '1a60a2a6-e489-4b90-90cf-1a388d8d8ad4'
        }
    });
}

main();