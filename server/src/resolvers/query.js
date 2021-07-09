const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Query = {
  users: async (parent, args, ctx, info) => {
    const user = args.id
      ? await prisma.user.findMany({
          where: {
            id: +args.id,
          },
        })
      : await prisma.user.findMany();
    return user;
  },
  products: async (parent, args, ctx, info) => {
    const product = args.id
      ? await prisma.product.findMany({
          where: {
            id: +args.id,
          },
        })
      : await prisma.product.findMany();
    return product;
  },
  carts: async (parent, args, ctx, info) => {
    const cart = args.id
      ? await prisma.cart.findMany({
          where: {
            id: +args.id,
          },
        })
      : await prisma.cart.findMany();
    return cart;
  },
  payments: async (parent, args, ctx, info) => {
    const payment = args.id
      ? await prisma.payment.findMany({
          where: {
            id: +args.id,
          },
        })
      : await prisma.payment.findMany();
    return payment;
  },
};

module.exports = Query;
