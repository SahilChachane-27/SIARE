'use server';

import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

// Middleware-like check for server actions
async function checkAuth() {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
}

export async function getJournals() {
  return await prisma.journal.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function getJournalById(id: number) {
  return await prisma.journal.findUnique({ where: { id } });
}

export async function createJournal(data: any) {
  await checkAuth();
  return await prisma.journal.create({ data });
}

export async function updateJournal(id: number, data: any) {
  await checkAuth();
  return await prisma.journal.update({
    where: { id },
    data
  });
}

export async function deleteJournal(id: number) {
  await checkAuth();
  return await prisma.journal.delete({ where: { id } });
}
