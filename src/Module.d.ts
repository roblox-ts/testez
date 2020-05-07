import { PlanNode } from "PlanNode";

export interface Module {
	method: () => void;
	path: Array<PlanNode>;
}
