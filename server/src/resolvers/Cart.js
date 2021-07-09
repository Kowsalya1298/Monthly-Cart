const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Cart={
    products:async(parent,args,ctx,info)=>{
        const products=await prisma.product.findMany({
            where:{
                id:parent.id
            }
        })
        return products
    },
    user:async(parent,args,ctx,info)=>{
        const user=await prisma.user.findMany({
            where:{
                id:parent.id
            }
        })
        return user
    }
}

module.exports=Cart