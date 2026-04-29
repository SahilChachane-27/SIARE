'use server';

import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

async function checkAuth() {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
}

export async function getConferences() {
  return await prisma.conference.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function getConferenceById(id: number) {
  return await prisma.conference.findUnique({ where: { id } });
}

export async function createConference(data: any) {
  await checkAuth();
  return await prisma.conference.create({ data });
}

export async function updateConference(id: number, data: any) {
  await checkAuth();
  return await prisma.conference.update({
    where: { id },
    data
  });
}

export async function deleteConference(id: number) {
  await checkAuth();
  return await prisma.conference.delete({ where: { id } });
}
