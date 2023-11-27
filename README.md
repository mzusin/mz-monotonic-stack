# Monotonic Stack

Typescript implementation of monotonic stack.

- A stack is called a **monotonic stack** if all the elements starting from the bottom of the stack is either in increasing or in decreasing order.
- The monotonic stack problem is mainly the previous/next smaller/larger problem.


## Usage

```ts
export const monotonicIncreasingStack: (data: number[]) => number[];
export const monotonicDecreasingStack: (data: number[]) => number[];
```

## Applications

- **Next Greater Element (NGE):** Find the first value on the right that is greater than the element.
- **Next Smaller Element**
- **Previous Greater Element**
- **Previous Smaller Element**
- Get the greatest or smallest array or string by the given conditions (remaining size k / no duplicate).