const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Mutation={
    AddToCart:async(parent,args,ctx,info)=>{},
    DeleteFromCart:async(parent,args,ctx,info)=>{},
    MakePayment:async(parent,args,ctx,info)=>{}
}

module.exports=Mutation