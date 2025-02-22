import type { ICoordinates3d } from "../Interfaces/ICoordinates.js";

/**
 * Project's constants
 */
export const generatedAttribute = "generated",
    mouseDownEvent = "pointerdown",
    mouseUpEvent = "pointerup",
    mouseLeaveEvent = "pointerleave",
    mouseOutEvent = "pointerout",
    mouseMoveEvent = "pointermove",
    touchStartEvent = "touchstart",
    touchEndEvent = "touchend",
    touchMoveEvent = "touchmove",
    touchCancelEvent = "touchcancel",
    resizeEvent = "resize",
    visibilityChangeEvent = "visibilitychange",
    errorPrefix = "tsParticles - Error",
    percentDenominator = 100,
    half = 0.5,
    millisecondsToSeconds = 1000,
    originPoint: ICoordinates3d = {
        x: 0,
        y: 0,
        z: 0,
    },
    defaultTransform = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
    },
    randomColorValue = "random",
    midColorValue = "mid",
    double = 2,
    doublePI = Math.PI * double,
    defaultFps = 60,
    defaultAlpha = 1,
    generatedTrue = "true",
    generatedFalse = "false",
    canvasTag = "canvas",
    defaultRetryCount = 0,
    squareExp = 2,
    qTreeCapacity = 4,
    defaultRemoveQuantity = 1,
    defaultRatio = 1,
    defaultReduceFactor = 1,
    subdivideCount = 4,
    inverseFactorNumerator = 1.0,
    rgbMax = 255,
    hMax = 360,
    sMax = 100,
    lMax = 100,
    hMin = 0,
    sMin = 0,
    hPhase = 60,
    empty = 0,
    quarter = 0.25,
    threeQuarter = half + quarter,
    minVelocity = 0,
    defaultTransformValue = 1,
    minimumSize = 0,
    minimumLength = 0,
    zIndexFactorOffset = 1,
    defaultOpacity = 1,
    clickRadius = 1,
    touchEndLengthOffset = 1,
    minCoordinate = 0,
    removeDeleteCount = 1,
    removeMinIndex = 0,
    defaultFpsLimit = 120,
    minFpsLimit = 0,
    canvasFirstIndex = 0,
    loadRandomFactor = 10000,
    loadMinIndex = 0,
    one = 1,
    none = 0,
    decayOffset = 1,
    tryCountIncrement = 1,
    minRetries = 0,
    rollFactor = 1,
    minZ = 0,
    defaultRadius = 0,
    posOffset = -quarter,
    sizeFactor = 1.5,
    minLimit = 0,
    countOffset = 1,
    minCount = 0,
    minIndex = 0,
    manualCount = 0,
    lengthOffset = 1,
    defaultDensityFactor = 1,
    deleteCount = 1,
    touchDelay = 500,
    manualDefaultPosition = 50,
    defaultAngle = 0,
    identity = 1,
    minStrokeWidth = 0,
    lFactor = 1,
    lMin = 0,
    rgbFactor = 255,
    triple = 3,
    sextuple = 6,
    sNormalizedOffset = 1,
    phaseNumerator = 1,
    defaultRgbMin = 0,
    defaultVelocity = 0,
    defaultLoops = 0,
    defaultTime = 0;
