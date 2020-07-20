import TestPlan from "./TestPlan";
import Module from "./Module";

declare const TestPlanner: {
	createPlan: (specFunctions: Array<Module>, testNamePattern: string, extraEnvironment: object) => TestPlan;
};

export = TestPlanner;
