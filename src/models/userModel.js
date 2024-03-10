import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* const prisma = new PrismaClient({
  log: [{
    emit: 'event',
    level: 'query',
  }],
}); */

prisma.$on('query', (event) => {
  console.log('Query:', event.query);
  console.log('Duration:', event.duration);
  console.log('Bindings:', event.bindings);
});

export const findUser = async (email) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      }
    });
    return user;
  } catch (error) {
    return {
      error: true,
      message: 'Error found: ' + error,
    };
  }
};

export const createUser = async (params) => {
  console.log(params)
  try {
    const user = await prisma.user.create({
      data: {
        name: params.name,
        lastname: params.lastname,
        email: params.email,
        password: params.password,
      },
    });
    
    console.log(user)
    
    return user;

  } catch (error) {
    return {
      error: true,
      message: 'Error found: ' + error,
    };
  }
};