import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/* Get all products model */
export const findAll = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        licence: true,
      },
    });
    return products;
  } catch (error) {
    return {
      error: true,
      message: 'Error found: ' + error,
    };
  }
};

/* Get product by parameter */
export const findOne = async (param) => {
  try {
    const product = await prisma.product.findUnique({
      where: param,
      include: {
        category: true,
        licence: true,
      },
    });
    return product;
  } catch (error) {
    return {
      error: true,
      message: 'Error found: ' + error,
    };
  }
};

/* Create a product model */
export const createOne = async (params) => {
  try {
    console.log(JSON.stringify(params))
    const product = await prisma.product.create({
      data: params,
    });
    return product;
  } catch (error) {
    console.log(error)
    return {
      error: true,
      message: 'Error found: ' + error,
    };
  }
};

/* Edit a product model */
export const editOne = async (params, id) => {
  try {
    const product = await prisma.product.update({
      where: id,
      data: params,
    });
    console.log("EDITING -----------------")
    console.log(JSON.stringify(product))
    console.log("---- FINISH EDITING -----")
    return product;
  } catch (error) {
    console.log("editOne: " + error)
    return {
      error: true,
      message: 'Error found: ' + error,
    };
  }
};

/* Delete product model */
export const deleteOne = async (params) => {
  try {
    const product = await prisma.product.delete({
      where: params,
    });
    return product;
  } catch (error) {
    return {
      error: true,
      message: 'Error found: ' + error,
    };
  }
};