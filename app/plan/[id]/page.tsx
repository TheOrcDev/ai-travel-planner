import Plan from "@/components/features/plan";
import { getPlan } from "@/server/plans";

export default async function PlanPage({ params }: { params: { id: string } }) {
  const plan = await getPlan(params.id);
  return <Plan plan={plan} />;
}
