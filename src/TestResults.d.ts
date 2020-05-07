import { TestPlan } from "TestPlan";
import { PlanNode } from "PlanNode";
import { ResultNode } from "ResultNode";

/**
 * Represents a tree of test results.
 *
 * Each node in the tree corresponds directly to a node in a corresponding
 * TestPlan, accessible via the 'planNode' field.
 *
 * TestResults objects are produced by TestRunner using TestSession as state.
 */
export class TestResults {
	/** Create a new TestResults tree that's linked to the given TestPlan. */
	public constructor(plan: TestPlan);

	/** Create a new result node that can be inserted into a TestResult tree. */
	public static createNode(self: void, planNode: PlanNode): ResultNode;

	/** Visit all test result nodes, depth-first. */
	public visitAllNodes(callback: (resultNode: ResultNode) => void, root: ResultNode): void;

	/** Creates a debug visualization of the test results. */
	public visualize(root: ResultNode, level: number): string;
}
