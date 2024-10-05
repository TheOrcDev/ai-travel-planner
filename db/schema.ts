import {
  date,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const plans = pgTable("plans", {
  id: uuid("id").primaryKey().defaultRandom(),
  text: text("text").notNull(),
  budget: integer("budget").notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  userId: text("user_id"),
  createdAt: timestamp("created_at").defaultNow(),
});
