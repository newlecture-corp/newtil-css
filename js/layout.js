export default function () {
    const layout = document.querySelector(".n-layout");
    const aside = document.querySelector(".n-layout>.n-aside");
    let isResizing = false;

    aside.addEventListener("mousedown", (e) => {
        if (e.offsetX > aside.offsetWidth - 5) {
            isResizing = true;
            document.body.style.cursor = "ew-resize";
            document.body.style.userSelect = "none"; // Disable text selection
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (isResizing) {
            const newWidth = e.clientX - aside.getBoundingClientRect().left;
            aside.style.width = `${Math.max(80, Math.min(newWidth, 500))}px`; // Min 80px, Max 500px
            layout.style.setProperty("--aside-width", `${aside.offsetWidth}px`);
        }
    });

    document.addEventListener("mouseup", () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = "default";
            document.body.style.userSelect = ""; // Re-enable text selection
        }
    });
}