import { PrismaClient} from '@prisma/client'


declare global {

    var prisma: PrismaClient
}


let prisma: PrismaClient

if(process.env.NEXTAUTH_URL === 'production'){
    prisma = new PrismaClient()
}else {
    if(!global.prisma){
    global.prisma = new PrismaClient()
    }

    prisma = global.prisma
}

export default prisma

