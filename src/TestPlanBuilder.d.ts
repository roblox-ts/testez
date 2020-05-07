import { TestPlan } from "TestPlan";
import { PlanNode } from "PlanNode";
import { TestEnum } from "index";

/**
 * Represents the ephermal state used for building a TestPlan from some other
 * representation.
 *
 * TestPlanBuilder keeps track of a stack of nodes that represents the current
 * position in the hierarchy, allowing the consumer to move up and down the
 * tree as new nodes are discovered.
 */
export declare class TestPlanBuilder {
	/** Create a new TestPlanBuilder, used for creating a TestPlan. */
	public constructor();

	/** Verify that the TestPlanBuilder's state is valid and get a TestPlan from it. */
	public finalize(): TestPlan;

	/** Grab the current node being worked on by the TestPlanBuilder. */
	public getCurrentNode(): PlanNode | TestPlan;

	/** Creates and pushes a node onto the navigation stack. */
	public pushNode(phrase: string, nodeType: TestEnum.NodeType, nodeModifier: TestEnum.NodeModifier): PlanNode;

	/** Pops a node off of the node navigation stack. */
	public popNode(): PlanNode;
}
