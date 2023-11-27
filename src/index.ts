import { monotonicIncreasingStack, monotonicDecreasingStack } from './core/main';

const api = {
    monotonicIncreasingStack,
    monotonicDecreasingStack,
};

declare global {
    interface Window {
        mzHeap: typeof api,
    }
}

window.mzHeap = window.mzHeap || api;

export * from './core/main';