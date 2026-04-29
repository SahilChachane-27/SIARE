'use server';

import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

async function checkAuth() {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
}

export async function getMembers() {
  return await prisma.member.findMany({
    orderBy: { joinedAt: 'desc' }
  });
}

export async function getMemberById(id: number) {
  return await prisma.member.findUnique({ where: { id } });
}

export async function createMember(data: any) {
  await checkAuth();
  return await prisma.member.create({ data });
}

export async function updateMember(id: number, data: any) {
  await checkAuth();
  return await prisma.member.update({
    where: { id },
    data
  });
}

export async function deleteMember(id: number) {
  await checkAuth();
  return await prisma.member.delete({ where: { id } });
}
