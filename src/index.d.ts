import { RunResults } from "./RunResults";
import { Reporter } from "./Reporters/Reporter";

export function run(testRoot: Instance, callback: (runResults: RunResults) => void): void;

export * from "./Expectation";
export { TestBootstrap } from "./TestBootstrap";
export { TestEnum } from "./TestEnum";
export { TestPlan } from "./TestPlan";
export { TestPlanBuilder } from "./TestPlanBuilder";
export { TestPlanner } from "./TestPlanner";
export { TestResults } from "./TestResults";
export { TestRunner } from "./TestRunner";
export { TestSession } from "./TestSession";

export declare const Reporters: {
	TextReporter: Reporter;
	TextReporterQuiet: Reporter;
	TeamCityReporter: Reporter;
};
