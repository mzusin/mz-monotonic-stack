/**
 * It is a stack in which the elements are in increasing order from the bottom to the top of the stack.
 * This implementation assumes that all elements in the input array are distinct.
 * Example: 1, 3, 10, 15, 17
 * Time Complexity: O(N)
 * Auxiliary Space: O(N)
 */
export const monotonicIncreasingStack = (data: number[]) => {
    const stack: number[] = [];

    for(const item of data) {
        while(stack.length > 0 && stack[stack.length - 1] > item) {
            stack.pop();
        }

        stack.push(item);
    }

    return stack;
};

/**
 * A stack is monotonically decreasing if It’s elements are in decreasing order from the bottom to the top of the stack.
 * This implementation assumes that all elements in the input array are distinct.
 * Example: 17, 14, 10, 5, 1
 * Time Complexity: O(N)
 * Auxiliary Space: O(N)
 */
export const monotonicDecreasingStack = (data: number[]) => {
    const stack: number[] = [];

    for(const item of data) {

        while(stack.length > 0 && stack[stack.length - 1] < item) {
            stack.pop();
        }

        stack.push(item);
    }

    return stack;
};