/// <reference types="@rbxts/types" />

import Expectation from "./src/Expectation";

declare global {
	/**
	 * This function creates a new describe block. These blocks correspond to the things that are being tested.
	 *
	 * Put it blocks inside of describe blocks to describe what behavior should be correct.
	 */
	function describe(phrase: string, callback: () => void): void;

	/**
	 * This function creates a new 'it' block.
	 * These blocks correspond to the behaviors that should be expected of the thing you're testing.
	 */
	function it(phrase: string, callback: () => void): void;

	/**
	 * These methods are special versions of it that automatically mark the it block as focused or skipped.
	 * They're necessary because FOCUS and SKIP can't be called inside it blocks!
	 */
	function itFOCUS(phrase: string, callback: () => void): void;

	/**
	 * These methods are special versions of it that automatically mark the it block as focused or skipped.
	 * They're necessary because FOCUS and SKIP can't be called inside it blocks!
	 */
	function itSKIP(phrase: string, callback: () => void): void;

	/**
	 * When called inside a describe block, FOCUS() marks that block as focused.
	 * If there are any focused blocks inside your test tree, only focused blocks will be executed,
	 * and all other tests will be skipped.
	 *
	 * When you're writing a new set of tests as part of a larger codebase,
	 * use FOCUS() while debugging them to reduce the amount of noise you need to scroll through.
	 */
	function FOCUS(): void;

	/**
	 * This function works similarly to FOCUS(), except instead of marking a block as focused,
	 * it will mark a block as skipped, which stops any of the test assertions in the block from being executed.
	 */
	function SKIP(): void;

	/**
	 * Creates a new Expectation, used for testing the properties of the given value.
	 */
	function expect(value: unknown): Expectation;
}
