"use server";

import { db } from "@/db/drizzle";
import { plans } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import { formSchema } from "./schemas";

export async function generateTripPlan(formData: z.infer<typeof formSchema>) {
  const { startDate, endDate, budget, activities, destination } = formData;

  let prompt = `
    I am planning a trip from ${startDate} to ${endDate} with a budget of ${budget}$. 
    
    I want to do the following activities: ${activities.join(", ")}.

    The result should be an HTML list of days with the activities for each day. Please format the result as HTML.
  `;

  if (destination) {
    prompt += `I want to go to ${destination}.`;
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    }),
  });

  const data = await response.json();

  const user = await currentUser();

  const [plan] = await db
    .insert(plans)
    .values({
      text: data.choices[0].message.content,
      userId: user?.id,
      budget,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    })
    .returning();

  return plan.id;
}
