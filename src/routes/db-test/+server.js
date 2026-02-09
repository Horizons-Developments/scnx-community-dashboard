import { createDraft, getCommand, updateDraft, submitDraft } from "$lib/server/db/commands.js";

export async function GET() {
    // 1. Draft erstellen
    const id = await createDraft("test-user");
    console.log("Draft-ID:", id);

    // 2. Draft auslesen
    const draft = await getCommand(id);
    console.log("Draft:", draft);

    // 3. Draft updaten
    await updateDraft(id, { title: "Hallo Drizzle" });

    const updated = await getCommand(id);
    console.log("Updated:", updated);

    // 4. Draft einreichen
    await submitDraft(id);

    const submitted = await getCommand(id);
    console.log("Submitted:", submitted);

    return new Response(JSON.stringify({
        id,
        draft,
        updated,
        submitted
    }), {
        headers: { "Content-Type": "application/json" }
    });
}