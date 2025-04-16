export default function layout() {
	const layout = window.document.querySelector(".n-layout");
	const aside = layout.querySelector(".n-aside"); // Updated selector

	// Check if the layout and aside elements exist
	if (!layout || !aside) {
		return;
	}

	// ==== n-layout Toggle 유효상태 안내 기능 ==================================================
	{
		const toggleButton = layout.querySelectorAll(".n-header .n-aside-toggle");
		const asideSection = window.document.querySelector(".n-layout .n-aside"); // Updated selector
		toggleButton.oninput = function () {
			if (
				[...asideSection.classList].some(
					(cls) => cls.startsWith("w:") || cls.startsWith("width:")
				)
			) {
				alert(
					".n-aside 에 너비를 고정해서 올바르게 동작하지 않을 수 있습니다."
				);
			}
		};
	}

	// ==== n-aside 우측 경계선 드래그 기능 ==================================================
	{
		// Ensure the aside element is resizable
		if (aside.classList.contains("resizable") === false) return; // Check if aside is resizable

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
				aside.style.width = `${Math.max(45, Math.min(newWidth, 500))}px`; // Min 45px, Max 500px
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
}

// Automatically invoke the function if not in a module-based environment
if (typeof window !== "undefined" && !window.module) {
	window.addEventListener("DOMContentLoaded", layout);
}
