import Link from "next/link";
import { Button } from "../ui/button";
import { Plan as PlanType } from "../shared/types";

interface PlanProps {
  plan: PlanType;
}

export default function Plan({ plan }: PlanProps) {
  return (
    <div className="flex flex-col gap-10 p-24 w-full items-center justify-center">
      <h1 className="text-4xl font-bold">Your Trip Plan</h1>
      <div dangerouslySetInnerHTML={{ __html: plan.text }} />
      <Link href="/travel-planner">
        <Button>Create a new plan</Button>
      </Link>
    </div>
  );
}
