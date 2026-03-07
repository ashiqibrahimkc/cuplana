import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

const COLLECTION_NAME = 'restaurants';

// GET - Fetch all restaurants
export async function GET() {
  try {
    const restaurantsRef = adminDb.collection(COLLECTION_NAME);
    const querySnapshot = await restaurantsRef.orderBy('createdAt', 'desc').get();

    const restaurants = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ restaurants });
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return NextResponse.json(
      { error: 'Failed to fetch restaurants' },
      { status: 500 }
    );
  }
}

// POST - Create a new restaurant
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, location, image } = body;

    if (!name || !location || !image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const restaurantsRef = adminDb.collection(COLLECTION_NAME);
    const docRef = await restaurantsRef.add({
      name,
      location,
      image,
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({
      id: docRef.id,
      name,
      location,
      image,
    });
  } catch (error) {
    console.error('Error creating restaurant:', error);
    return NextResponse.json(
      { error: 'Failed to create restaurant' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a restaurant
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Restaurant ID is required' },
        { status: 400 }
      );
    }

    await adminDb.collection(COLLECTION_NAME).doc(id).delete();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting restaurant:', error);
    return NextResponse.json(
      { error: 'Failed to delete restaurant' },
      { status: 500 }
    );
  }
}
