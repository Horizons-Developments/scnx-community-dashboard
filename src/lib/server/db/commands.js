import { db } from "./index.js";
import { commands } from "./schema.js";
import { eq } from "drizzle-orm";

export async function createDraft(userId) {
    const result = await db.insert(commands)
        .values({ user_id: userId, status: "draft" });

    return result.lastInsertRowid;
}

export async function updateDraft(id, data) {
    await db.update(commands)
        .set(data)
        .where(eq(commands.id, id));
}

export async function submitDraft(id) {
    await db.update(commands)
        .set({ status: "submitted" })
        .where(eq(commands.id, id));
}

export async function getCommand(id) {
    const result = await db.select()
        .from(commands)
        .where(eq(commands.id, id));

    return result[0] ?? null;
}

export async function getCommandsFromUser(userId) {
    return await db.select()
        .from(commands)
        .where(eq(commands.user_id, userId));
}

export async function getSubmittedCommands() {
    return await db.select()
        .from(commands)
        .where(eq(commands.status, "submitted"));
}