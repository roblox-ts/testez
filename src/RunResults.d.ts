export type RunResults = {
	errors: ReadonlyArray<string>;
	failureCount: number;
	skippedCount: number;
	successCount: number;
};
