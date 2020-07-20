import TestPlan from "./TestPlan";
import PlanNode from "./PlanNode";
import TestEnum from "./TestEnum";

/**
 * Represents the ephermal state used for building a TestPlan from some other
 * representation.
 *
 * TestPlanBuilder keeps track of a stack of nodes that represents the current
 * position in the hierarchy, allowing the consumer to move up and down the
 * tree as new nodes are discovered.
 */
interface TestPlanBuilder {
	/** Verify that the TestPlanBuilder's state is valid and get a TestPlan from it. */
	finalize(): TestPlan;

	/** Grab the current node being worked on by the TestPlanBuilder. */
	getCurrentNode(): PlanNode | TestPlan;

	/** Creates and pushes a node onto the navigation stack. */
	pushNode(phrase: string, nodeType: TestEnum.NodeType, nodeModifier: TestEnum.NodeModifier): PlanNode;

	/** Pops a node off of the node navigation stack. */
	popNode(): PlanNode;
}

interface TestPlanBuilderConstructor {
	new (): TestPlanBuilder;
}

declare const TestPlanBuilder: TestPlanBuilderConstructor;
export = TestPlanBuilder;
