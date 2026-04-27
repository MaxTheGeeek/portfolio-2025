import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const client = await clientPromise;
    const db = client.db('portfolio');
    if (id) {
      const project = await db.collection('likes').findOne({ projectId: id });
      return NextResponse.json({ likes: project?.likes || 0 });
    }
    const allLikes = await db.collection('likes').find({}).toArray();
    return NextResponse.json(allLikes);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;
    if (!id) return NextResponse.json({ error: 'Missing projectId' }, { status: 400 });

    const client = await clientPromise;
    const db = client.db('portfolio');
    
    // We use updateOne since findOneAndUpdate API sometimes complains about returnDocument in older/newer types
    await db.collection('likes').updateOne(
      { projectId: id },
      { $inc: { likes: 1 } },
      { upsert: true }
    );
    const doc = await db.collection('likes').findOne({ projectId: id });
    return NextResponse.json({ likes: doc?.likes || 1 });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to update likes' }, { status: 500 });
  }
}
