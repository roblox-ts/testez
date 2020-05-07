import { RunResults } from "RunResults";

export declare const TestBootstrap: {
	/**
	 * Find all the ModuleScripts in this tree that are tests.
	 * @param root The root of the tree
	 * @returns An array of ModuleScripts
	 */
	getModules(root: Instance): ReadonlyArray<ModuleScript>;

	/**
     * Runs all test and reports the results using the given test reporter.
     * If no reporter is specified, a reasonable default is provided.

     * This function demonstrates the expected workflow with this testing system:
     * 1. Locate test modules
     * 2. Generate test plan
     * 3. Run test plan
     * 4. Report test results

     * This means we could hypothetically present a GUI to the developer that shows
     * the test plan before we execute it, allowing them to toggle specific tests
     * before they're run, but after they've been identified!
     * 
     * @returns The run results
     */
	run(): RunResults;
};
