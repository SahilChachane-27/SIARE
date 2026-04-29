'use server';

import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

async function checkAuth() {
  const session = await getSession();
  if (!session?.user) {
    throw new Error('Unauthorized');
  }
}

export async function getPricingPlans() {
  return await prisma.pricingPlan.findMany({
    orderBy: { order: 'asc' }
  });
}

export async function getPricingPlanById(id: number) {
  return await prisma.pricingPlan.findUnique({ where: { id } });
}

export async function createPricingPlan(data: any) {
  await checkAuth();
  return await prisma.pricingPlan.create({
    data: {
      name: String(data.name || ''),
      priceINR: String(data.priceINR || ''),
      priceUSD: String(data.priceUSD || ''),
      description: data.description || null,
      features: Array.isArray(data.features) ? data.features : [],
      cta: data.cta || null,
      highlight: Boolean(data.highlight),
      tag: data.tag || null,
      order: Number(data.order) || 0,
    }
  });
}

export async function updatePricingPlan(id: number, data: any) {
  await checkAuth();
  return await prisma.pricingPlan.update({
    where: { id },
    data: {
      name: data.name ? String(data.name) : undefined,
      priceINR: data.priceINR ? String(data.priceINR) : undefined,
      priceUSD: data.priceUSD ? String(data.priceUSD) : undefined,
      description: data.description || null,
      features: Array.isArray(data.features) ? data.features : [],
      cta: data.cta || null,
      highlight: Boolean(data.highlight),
      tag: data.tag || null,
      order: Number(data.order) || 0,
    }
  });
}

export async function deletePricingPlan(id: number) {
  await checkAuth();
  return await prisma.pricingPlan.delete({ where: { id } });
}
