import PlansList from "@/components/features/plans-list";
import { getPlansByUser } from "@/server/plans";

export default async function MyPlansPage() {
  const plans = await getPlansByUser();

  return (
    <main className="flex flex-col items-center justify-center p-24">
      <PlansList plans={plans} />
    </main>
  );
}
