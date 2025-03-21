import { NextRequest, NextResponse } from "next/server";
import { updateRegularPrompt } from "@/lib/ai/prompts";
import { changeSystemPromptInChat } from "@/lib/db/queries";

export async function POST(request: NextRequest) {
    const body = await request.json();

    console.log(body['chatId']);
    if (!body['chatId']) {
        await updateRegularPrompt(body['newPrompt']);
        return NextResponse.json({});
    }

    await changeSystemPromptInChat({
        chatId: body['chatId'],
        newSystemPrompt: body['newPrompt']
    });

    return NextResponse.json({});
}
