import PlanNode from "./PlanNode";
import ResultNode from "./ResultNode";
import TestResults from "./TestResults";

/**
 * Represents the state relevant while executing a test plan.
 *
 * Used by TestRunner to produce a TestResults object.
 *
 * Uses the same tree building structure as TestPlanBuilder; TestSession keeps
 * track of a stack of nodes that represent the current path through the tree.
 */
interface TestSession {
	/**
	 * Calculate success, failure, and skipped test counts in the tree at the
	 * current point in the execution.
	 */
	calculateTotals(): void;

	/**
	 * Gathers all of the errors reported by tests and puts them at the top level
	 * of the TestResults object.
	 */
	gatherErrors(): void;

	/** Calculates test totals, verifies the tree is valid, and returns results. */
	finalize(): TestResults;

	/** Create a new test result node and push it onto the navigation stack. */
	pushNode(planNode: PlanNode): ResultNode;

	/** Pops a node off of the navigation stack. */
	popNode(): ResultNode;

	/** Tells whether the current test we're in should be skipped. */
	shouldSkip(): boolean;
}

interface TestSessionConstructor {
	/**
	 * Create a TestSession related to the given TestPlan.
	 *
	 * The resulting TestResults object will be linked to this TestPlan.
	 */
	new (): TestSession;
}

declare const TestSession: TestSessionConstructor;
export = TestSession;
