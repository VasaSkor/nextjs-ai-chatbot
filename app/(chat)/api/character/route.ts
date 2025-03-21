import { NextRequest, NextResponse } from "next/server";
import { updateRegularPrompt } from "@/lib/ai/prompts";
import { changeSystemPromptInChat } from "@/lib/db/queries";

export async function GET() {
    return NextResponse.json({ message: "API is working" });
}
