import { NextRequest, NextResponse } from "next/server";
import { updateRegularPrompt } from "@/lib/ai/prompts";
import { changeSystemPromptInChat } from "@/lib/db/queries";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log("Body:", body);

        if (!body['chatId']) {
            await updateRegularPrompt(body['newPrompt']);
            return NextResponse.json({ success: true });
        }

        await changeSystemPromptInChat({
            chatId: body['chatId'],
            newSystemPrompt: body['newPrompt']
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
