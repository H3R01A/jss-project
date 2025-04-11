import { JigsawStack } from 'jigsawstack';
import { NextResponse } from 'next/server';

const jigsawstack = JigsawStack();

export async function POST(req: Request) {
  const request = await req.json();

  const { searchTerm } = request;

  try {
    const response = await jigsawstack.web.search({
      query: searchTerm,
    });

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Please check backend' },
      { status: 500 }
    );
  }
}
