const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const User={
    cart:async(parent,args,ctx,info)=>{
        const cart=await prisma.cart.findMany({
            where:{
                id:parent.id
            }
        })
        return cart
    },
    payment:async(parent,args,ctx,info)=>{
        const payments=await prisma.payment.findMany({
            where:{
                id:parent.id
            }
        })
        return payments
    }
}

module.exports=User