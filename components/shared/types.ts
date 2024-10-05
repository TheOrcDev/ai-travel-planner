export interface Plan {
  id: string;
  text: string;
  budget: number;
  startDate: string;
  endDate: string;
  createdAt: Date | null;
}
