const { PrismaClient } = require("@prisma/client");

// Singleton PrismaClient - jangan bikin instance baru di tiap file/controller
const prisma = new PrismaClient();

module.exports = prisma;
