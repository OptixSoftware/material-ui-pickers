"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
exports.useIsomorphicEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
function runKeyHandler(e, keyHandlers) {
    var handler = keyHandlers[e.keyCode];
    if (handler) {
        handler();
        // if event was handled prevent other side effects (e.g. page scroll)
        e.preventDefault();
    }
}
exports.runKeyHandler = runKeyHandler;
function useKeyDownHandler(active, keyHandlers) {
    var keyHandlersRef = React.useRef(keyHandlers);
    keyHandlersRef.current = keyHandlers;
    return React.useCallback(function (e) {
        if (active) {
            runKeyHandler(e, keyHandlersRef.current);
        }
    }, [active]);
}
exports.useKeyDownHandler = useKeyDownHandler;
function useGlobalKeyDown(active, keyHandlers) {
    var keyHandlersRef = React.useRef(keyHandlers);
    keyHandlersRef.current = keyHandlers;
    exports.useIsomorphicEffect(function () {
        if (active) {
            var handleKeyDown_1 = function (event) {
                runKeyHandler(event, keyHandlersRef.current);
            };
            window.addEventListener('keydown', handleKeyDown_1);
            return function () {
                window.removeEventListener('keydown', handleKeyDown_1);
            };
        }
    }, [active]);
}
exports.useGlobalKeyDown = useGlobalKeyDown;
