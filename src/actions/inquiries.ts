'use server';

import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

async function checkAuth() {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
}

export async function getInquiries() {
  await checkAuth();
  return await prisma.inquiry.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function createInquiry(data: any) {
  // Public action, no auth required
  const inquiryData: any = {
    name: String(data.name || ''),
    email: String(data.email || ''),
    phone: data.phone ? String(data.phone) : null,
    institution: data.institution ? String(data.institution) : null,
    subject: data.subject ? String(data.subject) : null,
    purpose: data.purpose ? String(data.purpose) : null,
    tier: data.tier ? String(data.tier) : null,
    message: String(data.message || ''),
    aboutDetails: data.aboutDetails ? String(data.aboutDetails) : null,
    status: data.status ? String(data.status) : 'pending',
  };

  try {
    return await prisma.inquiry.create({
      data: inquiryData
    });
  } catch (error: any) {
    const message = String(error?.message || '');
    const tierMismatch =
      message.includes('Unknown argument `tier`') ||
      message.includes("Unknown field 'tier'") ||
      message.includes('Unknown column') ||
      message.includes('tier');

    if (!tierMismatch) {
      throw error;
    }

    const fallbackData: any = {
      ...inquiryData,
      aboutDetails: inquiryData.aboutDetails || (inquiryData.tier ? `Applied tier: ${inquiryData.tier}` : null),
    };

    delete fallbackData.tier;

    return await prisma.inquiry.create({
      data: fallbackData
    });
  }
}

export async function updateInquiryStatus(id: number, status: string) {
  await checkAuth();
  return await prisma.inquiry.update({
    where: { id },
    data: { status }
  });
}

export async function deleteInquiry(id: number) {
  await checkAuth();
  return await prisma.inquiry.delete({ where: { id } });
}
