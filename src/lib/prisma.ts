import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '../generated/prisma'

function createAdapter() {
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set')
  }

  const url = new URL(databaseUrl)

  return new PrismaMariaDb({
    host: url.hostname,
    port: url.port ? Number(url.port) : 3306,
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.replace(/^\//, ''),
  })
}

declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;

let prisma: PrismaClient

function getPrismaClient() {
  if (!prisma) {
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      throw new Error('DATABASE_URL is not set')
    }
    prisma = new PrismaClient({
      adapter: createAdapter(),
    })
    if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
  }
  return prisma
}

// Export a proxy that creates the client on first access
const prismaProxy = new Proxy({}, {
  get(target, prop) {
    const client = getPrismaClient()
    return client[prop as keyof PrismaClient]
  }
})

export default prismaProxy as PrismaClient
