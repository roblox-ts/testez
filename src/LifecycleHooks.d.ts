import { PlanNode } from "PlanNode";

export declare class LifecycleHooks {
	public constructor();

	/** Returns an array of `beforeEach` hooks in FIFO order */
	public getBeforeEachHooks(): Array<() => void>;

	/** Returns an array of `afterEach` hooks in FILO order */
	public getAfterEachHooks(): Array<() => void>;

	/** Pushes uncalled beforeAll and afterAll hooks back up the stack */
	public popHooks(): void;

	public pushHooksFrom(planNode: PlanNode): void;

	public getPendingBeforeAllHooks(): Array<() => void>;

	public getAfterAllHooks(): Array<() => void>;
}
