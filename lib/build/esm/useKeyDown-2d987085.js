import { useRef, useCallback, useEffect, useLayoutEffect } from 'react';

var useIsomorphicEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.keyCode];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
}
function useKeyDownHandler(active, keyHandlers) {
  var keyHandlersRef = useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  return useCallback(function (e) {
    if (active) {
      runKeyHandler(e, keyHandlersRef.current);
    }
  }, [active]);
}
function useGlobalKeyDown(active, keyHandlers) {
  var keyHandlersRef = useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  useIsomorphicEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active]);
}

export { useKeyDownHandler as a, useIsomorphicEffect as b, useGlobalKeyDown as u };
//# sourceMappingURL=useKeyDown-2d987085.js.map
