export default function initializeResizableLayout(layoutElement, asideElement) {
    if (!layoutElement || !asideElement) {
        throw new Error("Both layoutElement and asideElement are required.");
    }

    let isResizing = false;

    asideElement.addEventListener("mousedown", (e) => {
        if (e.offsetX > asideElement.offsetWidth - 5) {
            isResizing = true;
            document.body.style.cursor = "ew-resize";
            document.body.style.userSelect = "none"; // Disable text selection
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (isResizing) {
            const newWidth = e.clientX - asideElement.getBoundingClientRect().left;
            asideElement.style.width = `${Math.max(80, Math.min(newWidth, 500))}px`; // Min 80px, Max 500px
            layoutElement.style.setProperty("--aside-width", `${asideElement.offsetWidth}px`);
        }
    });

    document.addEventListener("mouseup", () => {
        if (isResizing) {
            isResizing = false;
        }
    });
}