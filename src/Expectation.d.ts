interface Expectation {
	// LINGUISTIC NO-OPS
	/** A linguistic no-op */
	readonly to: Expectation;

	/** A linguistic no-op */
	readonly be: Expectation;

	/** A linguistic no-op */
	readonly been: Expectation;

	/** A linguistic no-op */
	readonly have: Expectation;

	/** A linguistic no-op */
	readonly was: Expectation;

	/** A linguistic no-op */
	readonly at: Expectation;

	// LINGUISTIC OPS
	/** Applies a never operation to the expectation */
	readonly never: Expectation;

	// METHODS

	/**
	 * Assert that the expectation value is the given type.
	 * @param typeName The given type
	 * @returns If the assertion passes, returns reference to itself
	 */
	a: (typeName: string) => Expectation;

	/**
	 * Assert that the expectation value is the given type.
	 * @param typeName The given type
	 * @returns If the assertion passes, returns reference to itself
	 */
	an: (typeName: string) => Expectation;

	/**
	 * Assert that our expectation value is truthy
	 * @returns If the assertion passes, returns reference to itself
	 */
	ok: () => Expectation;

	/**
	 * Assert that our expectation value is equal to another value
	 * @param otherValue The other value
	 * @returns If the assertion passes, returns reference to itself
	 */
	equal: (otherValue: unknown) => Expectation;

	/**
	 * Assert that our expectation value is equal to another value within some
	 * inclusive limit.
	 * @param otherValue The other value
	 * @param limit The inclusive limit (defaults to 1e-7)
	 * @returns If the assertion passes, returns reference to itself
	 */
	near: (otherValue: unknown, limit?: number) => Expectation;

	/**
	 * Assert that our functoid expectation value throws an error when called
	 * @returns If the assertion passes, returns reference to itself
	 */
	throw: () => Expectation;
}

interface ExpectationConstructor {
	new (value: unknown): Expectation;
}

declare const Expectation: ExpectationConstructor;
export = Expectation;
