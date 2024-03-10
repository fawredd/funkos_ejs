import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const licences = async () => {
  try {
    const licences = await prisma.licence.findMany();
    return licences;
  } catch (error) {
    return {
      error: true,
      message: 'Error found: ' + error,
    };
  }
};