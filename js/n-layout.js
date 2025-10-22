/**
 * NewTil Layout - Aside Resizable 기능
 * Mouse와 Touch 이벤트를 모두 지원하는 세련된 resize 기능
 */

class NLayoutResizer {
	constructor() {
		this.isResizing = false;
		this.startX = 0;
		this.startWidth = 0;
		this.currentAside = null;
		this.minWidth = 200; // 최소 너비
		this.maxWidth = 600; // 최대 너비

		this.init();
	}

	init() {
		// DOM이 로드된 후 초기화
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", () => this.bindEvents());
		} else {
			this.bindEvents();
		}
	}

	bindEvents() {
		// Mouse 이벤트
		document.addEventListener("mousedown", this.handleMouseDown.bind(this));
		document.addEventListener("mousemove", this.handleMouseMove.bind(this));
		document.addEventListener("mouseup", this.handleMouseUp.bind(this));

		// Touch 이벤트 (모바일 지원)
		document.addEventListener("touchstart", this.handleTouchStart.bind(this));
		document.addEventListener("touchmove", this.handleTouchMove.bind(this));
		document.addEventListener("touchend", this.handleTouchEnd.bind(this));

		// ESC 키로 resize 중단
		document.addEventListener("keydown", this.handleKeyDown.bind(this));

		// 마우스 hover 시 커서 변경
		document.addEventListener("mousemove", this.handleHover.bind(this));
	}

	handleMouseDown(e) {
		const aside = this.findResizableAside(e.target);
		if (aside && this.isInResizeArea(e, aside)) {
			this.startResize(e.clientX, aside);
		}
	}

	handleMouseMove(e) {
		if (this.isResizing) {
			this.updateResize(e.clientX);
		}
	}

	handleHover(e) {
		// 리사이징 중이 아닐 때만 커서 변경
		if (this.isResizing) return;

		const aside = this.findResizableAside(e.target);
		if (aside && this.isInResizeArea(e, aside)) {
			document.body.style.cursor = "ew-resize";
		} else {
			// 그립퍼 영역이 아니면 기본 커서로 복원
			if (document.body.style.cursor === "ew-resize") {
				document.body.style.cursor = "";
			}
		}
	}

	handleMouseUp() {
		this.stopResize();
	}

	handleTouchStart(e) {
		const aside = this.findResizableAside(e.target);
		if (aside && this.isInResizeArea(e.touches[0], aside)) {
			e.preventDefault();
			this.startResize(e.touches[0].clientX, aside);
		}
	}

	handleTouchMove(e) {
		if (this.isResizing) {
			e.preventDefault();
			this.updateResize(e.touches[0].clientX);
		}
	}

	handleTouchEnd() {
		this.stopResize();
	}

	handleKeyDown(e) {
		if (e.key === "Escape" && this.isResizing) {
			this.stopResize();
		}
	}

	findResizableAside(target) {
		// 클릭된 요소가 aside 내부인지 확인
		const aside = target.closest("aside, .n-aside");
		if (!aside) return null;

		// 부모가 resizable 클래스를 가진 n-layout인지 확인
		const layout = aside.closest(".n-layout");
		if (!layout || !layout.classList.contains("layout-aside-width:resizable")) {
			return null;
		}

		// responsive 모드와 resizable 모드가 동시에 적용된 경우 resizable 우선
		if (layout.classList.contains("layout-aside-width:responsive")) {
			// resizable이 우선되므로 responsive 클래스 제거
			layout.classList.remove("layout-aside-width:responsive");
		}

		return aside;
	}

	isInResizeArea(event, aside) {
		// aside의 위치와 크기 정보 가져오기
		const rect = aside.getBoundingClientRect();
		const layout = aside.closest(".n-layout");
		const isRightSide = layout && layout.classList.contains("layout-aside-pos:right");
		
		// 그립퍼 영역의 너비 (::after의 width와 동일하게)
		const gripperWidth = 4;
		const clickTolerance = 8; // 클릭 허용 범위를 조금 넓게 (사용성 향상)
		
		if (isRightSide) {
			// 오른쪽에 있을 때: 왼쪽 경계선 영역 체크
			const distanceFromLeft = event.clientX - rect.left;
			return distanceFromLeft <= clickTolerance;
		} else {
			// 왼쪽에 있을 때: 오른쪽 경계선 영역 체크
			const distanceFromRight = rect.right - event.clientX;
			return distanceFromRight <= clickTolerance;
		}
	}

	startResize(clientX, aside) {
		this.isResizing = true;
		this.currentAside = aside;
		this.startX = clientX;
		this.startWidth = aside.offsetWidth;

		// 드래그 중임을 표시
		aside.classList.add("resizing");

		// 커서 스타일 변경
		document.body.style.cursor = "ew-resize";
		document.body.style.userSelect = "none";
	}

	updateResize(clientX) {
		if (!this.isResizing || !this.currentAside) return;

		const deltaX = clientX - this.startX;
		let newWidth = this.startWidth + deltaX;

		// aside가 오른쪽에 있는지 확인
		const layout = this.currentAside.closest(".n-layout");
		const isRightSide = layout && layout.classList.contains("layout-aside-pos:right");

		// 오른쪽에 있을 때는 반대 방향으로 조정
		if (isRightSide) {
			newWidth = this.startWidth - deltaX;
		}

		// 최소/최대 너비 제한
		newWidth = Math.max(this.minWidth, Math.min(this.maxWidth, newWidth));

		// aside 너비 업데이트
		this.currentAside.style.width = `${newWidth}px`;

		// CSS 변수로 너비 저장 (다른 곳에서 참조 가능)
		// grid-template-columns가 .n-layout에서 --aside-width를 참조하므로 layout에 설정		
		if (layout) {
			layout.style.setProperty("--aside-width", `${newWidth}px`);
		}

		// 가로 스크롤바 방지를 위한 레이아웃 너비 조정
		this.preventHorizontalScroll();
	}

	preventHorizontalScroll() {
		// 레이아웃이 viewport를 벗어나지 않도록 조정
		const layout = this.currentAside?.closest(".n-layout");
		if (layout) {
			const viewportWidth = window.innerWidth;
			const layoutWidth = layout.scrollWidth;

			if (layoutWidth > viewportWidth) {
				// 레이아웃이 viewport를 벗어나면 aside 너비 조정
				const maxAllowedWidth = viewportWidth - 100; // 여유 공간 확보
				if (this.currentAside.offsetWidth > maxAllowedWidth) {
					this.currentAside.style.width = `${maxAllowedWidth}px`;
				}
			}
		}
	}

	stopResize() {
		if (!this.isResizing) return;

		// 드래그 중 표시 제거
		if (this.currentAside) {
			this.currentAside.classList.remove("resizing");
		}

		// 상태 초기화
		this.isResizing = false;
		this.currentAside = null;
		this.startX = 0;
		this.startWidth = 0;

		// 커서 스타일 복원
		document.body.style.cursor = "";
		document.body.style.userSelect = "";
	}
}

// 인스턴스 생성 및 초기화
const nLayoutResizer = new NLayoutResizer();

// 전역으로 노출 (필요시 다른 스크립트에서 접근 가능)
window.NLayoutResizer = NLayoutResizer;
