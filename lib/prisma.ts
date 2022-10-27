import { Prisma, PrismaClient } from '@prisma/client'

// See https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/instantiate-prisma-client
declare global {
  // the global namespace requires use of var
  // eslint-disable-next-line no-var
  var globalPrisma: PrismaClient
}

const isProd = process.env.NODE_ENV === 'production'
let prisma: PrismaClient

if (isProd) {
  prisma = new PrismaClient()
} else {
  if (!global.globalPrisma) {
    const optionsArg: Prisma.PrismaClientOptions = {}
    
    // uncomment to enable prisma logging
    // optionsArg.log = ['query', 'info', `warn`, `error`]

    global.globalPrisma = new PrismaClient(optionsArg)
  }

  prisma = global.globalPrisma
}

export default prisma
