import { db } from "@/db/drizzle";
import { plans } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function getPlan(id: string) {
  try {
    const [plan] = await db.select().from(plans).where(eq(plans.id, id));
    return plan;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPlansByUser() {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found");
    }

    return await db.select().from(plans).where(eq(plans.userId, user.id));
  } catch (error) {
    console.error(error);
    throw error;
  }
}
