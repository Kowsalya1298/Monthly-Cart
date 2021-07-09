const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Mutation={
    AddUser:async(parent,args,ctx,info)=>{
        const {name,userName,password} = args;
        await prisma.user.findMany({
            where:{
                userName:userName
            }
        }).then(data=>{if(data.length!==0)console.log("Username exists!")}).catch(err=>console.log(err.message))
        const newUser=await prisma.user.create({
            data:{
                userName,
                password,
                name
            }
        })
        return newUser
    },
    AddToCart:async(parent,args,ctx,info)=>{},
    DeleteFromCart:async(parent,args,ctx,info)=>{},
    MakePayment:async(parent,args,ctx,info)=>{}
}

module.exports=Mutation