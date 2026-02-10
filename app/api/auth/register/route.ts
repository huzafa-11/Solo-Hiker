import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/Validators/register";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = registerSchema.parse(body);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.errors ?? "Invalid input",
      },
      { status: 400 }
    );
  }
}
