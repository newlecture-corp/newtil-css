export default function () {
    const layout = window.document.querySelector(".n-layout");
    const aside = window.document.querySelector(".n-layout>.n-aside");
    let isResizing = false;

    aside.addEventListener("mousedown", (e) => {
        if (e.offsetX > aside.offsetWidth - 5) {
            isResizing = true;
            window.document.body.style.cursor = "ew-resize";
            window.document.body.style.userSelect = "none"; // Disable text selection
        }
    });

    window.document.addEventListener("mousemove", (e) => {
        if (isResizing) {
            const newWidth = e.clientX - aside.getBoundingClientRect().left;
            aside.style.width = `${Math.max(80, Math.min(newWidth, 500))}px`; // Min 80px, Max 500px
            layout.style.setProperty("--aside-width", `${aside.offsetWidth}px`);
        }
    });

    window.document.addEventListener("mouseup", () => {
        if (isResizing) {
            isResizing = false;
            window.document.body.style.cursor = "default";
            window.document.body.style.userSelect = ""; // Re-enable text selection
        }
    });
}