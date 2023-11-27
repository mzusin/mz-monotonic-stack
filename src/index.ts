import { aaa } from './core/main';

const api = {
    ...aaa
};

declare global {
    interface Window {
        mzHeap: typeof api,
    }
}

window.mzHeap = window.mzHeap || api;

export * from './core/main';