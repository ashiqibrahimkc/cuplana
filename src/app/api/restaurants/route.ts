import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';

const COLLECTION_NAME = 'restaurants';

// GET - Fetch all restaurants
export async function GET() {
  try {
    const restaurantsRef = collection(db, COLLECTION_NAME);
    const q = query(restaurantsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    const restaurants = querySnapshot.docs.map((doc: any) => ({
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

    const restaurantsRef = collection(db, COLLECTION_NAME);
    const docRef = await addDoc(restaurantsRef, {
      name,
      location,
      image,
      createdAt: serverTimestamp(),
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

    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting restaurant:', error);
    return NextResponse.json(
      { error: 'Failed to delete restaurant' },
      { status: 500 }
    );
  }
}
