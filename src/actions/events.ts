'use server';

import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

async function checkAuth() {
  const session = await getSession();
  if (!session?.user) {
    throw new Error('Unauthorized');
  }
}

export async function getEvents(type?: string) {
  return await prisma.event.findMany({
    where: type ? { type } : undefined,
    orderBy: { order: 'asc' }
  });
}

export async function getEventById(id: number) {
  return await prisma.event.findUnique({ where: { id } });
}

export async function createEvent(data: any) {
  await checkAuth();
  return await prisma.event.create({
    data: {
      type: String(data.type || 'workshop'),
      title: String(data.title || ''),
      description: data.description || null,
      speaker: data.speaker || null,
      instructor: data.instructor || null,
      location: data.location || null,
      link: data.link || null,
      status: data.status || null,
      color: data.color || null,
      date: data.date || null,
      time: data.time || null,
      isFeatured: Boolean(data.isFeatured),
      order: Number(data.order) || 0,
      imageUrl: data.imageUrl || null,
    }
  });
}

export async function updateEvent(id: number, data: any) {
  await checkAuth();
  return await prisma.event.update({
    where: { id },
    data: {
      title: data.title ? String(data.title) : undefined,
      description: data.description || null,
      speaker: data.speaker || null,
      instructor: data.instructor || null,
      location: data.location || null,
      link: data.link || null,
      status: data.status || null,
      color: data.color || null,
      date: data.date || null,
      time: data.time || null,
      isFeatured: Boolean(data.isFeatured),
      order: Number(data.order) || 0,
      imageUrl: data.imageUrl || null,
      type: data.type ? String(data.type) : undefined,
    }
  });
}

export async function deleteEvent(id: number) {
  await checkAuth();
  return await prisma.event.delete({ where: { id } });
}
