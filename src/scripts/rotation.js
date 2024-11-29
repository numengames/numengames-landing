export function setupRotation(contentCount, rotationInterval, onContentChange) {
    let timeoutId;
    let activeIndex = 0;
    let nextRotationTime = Date.now() + rotationInterval;

    function getNextIndex(currentIndex, count) {
        return (currentIndex + 1) % count;
    }

    function rotateContent() {
        activeIndex = getNextIndex(activeIndex, contentCount);
        onContentChange(activeIndex);
        scheduleNextRotation();
    }

    function scheduleNextRotation() {
        nextRotationTime = Date.now() + rotationInterval;
        const delay = rotationInterval;
        timeoutId = setTimeout(rotateContent, delay);
    }

    function handleButtonClick(index) {
        activeIndex = index;
        clearTimeout(timeoutId);
        onContentChange(activeIndex);
        scheduleNextRotation();
    }

    function handleVisibilityChange() {
        if (document.visibilityState === "visible") {
            const now = Date.now();
            const remaining = nextRotationTime - now;
            if (remaining <= 0) {
                rotateContent();
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(rotateContent, remaining);
            }
        }
    }

    function start() {
        scheduleNextRotation();
        document.addEventListener("visibilitychange", handleVisibilityChange);
    }

    function stop() {
        clearTimeout(timeoutId);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
    }

    return { start, stop, handleButtonClick };
}