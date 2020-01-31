import * as React from 'react';
export declare const useIsomorphicEffect: typeof React.useEffect;
declare type KeyHandlers = Record<KeyboardEvent['key'], () => void>;
export declare function runKeyHandler(e: KeyboardEvent | React.KeyboardEvent, keyHandlers: KeyHandlers): void;
export declare function useKeyDownHandler(active: boolean, keyHandlers: KeyHandlers): (e: React.KeyboardEvent<Element>) => void;
export declare function useGlobalKeyDown(active: boolean, keyHandlers: KeyHandlers): void;
export {};
