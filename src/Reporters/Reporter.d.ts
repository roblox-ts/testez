import { RunResults } from "RunResults";

export interface Reporter {
	report: (runResults: RunResults) => void;
}
