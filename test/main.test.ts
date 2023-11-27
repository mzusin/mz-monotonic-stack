import { monotonicIncreasingStack, monotonicDecreasingStack } from '../src/core/main';

describe('Monotonic Increasing Stack', () => {
    it('1, 4, 5, 3, 12, 10', () => {
        const stack = monotonicIncreasingStack([1, 4, 5, 3, 12, 10]);
        expect(stack).toEqual([1, 3, 10]);
    });
});

describe('Monotonic Decreasing Stack', () => {
    it('15, 17, 12, 13, 14, 10', () => {
        const stack = monotonicDecreasingStack([15, 17, 12, 13, 14, 10]);
        expect(stack).toEqual([17, 14, 10]);
    });
});