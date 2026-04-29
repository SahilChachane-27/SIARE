'use server';

import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

async function checkAuth() {
  const session = await getSession();
  if (!session?.user) {
    throw new Error('Unauthorized');
  }
}

export async function getMembershipTiers() {
  return await prisma.membershipTier.findMany({
    orderBy: { order: 'asc' }
  });
}

export async function getMembershipTierById(id: number) {
  return await prisma.membershipTier.findUnique({ where: { id } });
}

export async function createMembershipTier(data: any) {
  await checkAuth();
  return await prisma.membershipTier.create({
    data: {
      name: String(data.name || ''),
      icon: data.icon || null,
      priceINR: String(data.priceINR || ''),
      priceUSD: String(data.priceUSD || ''),
      description: data.description || null,
      benefits: Array.isArray(data.benefits) ? data.benefits : [],
      order: Number(data.order) || 0,
    }
  });
}

export async function updateMembershipTier(id: number, data: any) {
  await checkAuth();
  return await prisma.membershipTier.update({
    where: { id },
    data: {
      name: data.name ? String(data.name) : undefined,
      icon: data.icon || null,
      priceINR: data.priceINR ? String(data.priceINR) : undefined,
      priceUSD: data.priceUSD ? String(data.priceUSD) : undefined,
      description: data.description || null,
      benefits: Array.isArray(data.benefits) ? data.benefits : [],
      order: Number(data.order) || 0,
    }
  });
}

export async function deleteMembershipTier(id: number) {
  await checkAuth();
  return await prisma.membershipTier.delete({ where: { id } });
}
