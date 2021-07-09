const { PrismaClient } = require("@prisma/client");
const { products } = require("./query");
const prisma = new PrismaClient();

const Payment = {
  user: async (parent, args, ctx, info) => {
    const user = await prisma.user.findMany({
      where: {
        id: parent.id,
      },
    });
    return user;
  },
  products: async (parent, args, ctx, info) => {
    const products = await prisma.product.findMany({
      where: {
        id: parent.id,
      },
    });
    return products;
  },
};

module.exports = Payment;
