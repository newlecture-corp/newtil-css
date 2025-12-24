# 아이콘 (Icon)

`m3-icon` 컴포넌트는 Google Material Icons를 사용하여 프로젝트 전역에서 일관된 아이콘 UI를 제공합니다. 아래 예제들은 `test/icon.html` 데모 페이지와 동일한 구성요소를 문서화한 것입니다.

## 기본 사용법

아이콘을 사용하려면 `m3-icon` 클래스와 함께 아이콘 이름을 지정하세요:

<div class="vp-doc">
  <div class="d:flex gap:4 wrap">
    <span class="m3-icon icon:home"></span>
    <span class="m3-icon icon:menu"></span>
    <span class="m3-icon icon:close"></span>
    <span class="m3-icon icon:arrow_back"></span>
    <span class="m3-icon icon:arrow_forward"></span>
    <span class="m3-icon icon:expand_more"></span>
    <span class="m3-icon icon:expand_less"></span>
    <span class="m3-icon icon:chevron_left"></span>
    <span class="m3-icon icon:chevron_right"></span>
    <span class="m3-icon icon:more_vert"></span>
  </div>
</div>

```html
<span class="m3-icon icon:home"></span>
<span class="m3-icon icon:menu"></span>
<span class="m3-icon icon:close"></span>
```

## 아이콘 스타일

`icon-style:*` 클래스를 사용하여 아이콘의 스타일을 변경할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 align-items:center">
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-style:outlined"></span>
      <code>icon-style:outlined</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-style:rounded"></span>
      <code>icon-style:rounded</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-style:sharp"></span>
      <code>icon-style:sharp</code>
    </div>
  </div>
</div>

```html
<span class="m3-icon icon:home icon-style:outlined"></span>
<span class="m3-icon icon:home icon-style:rounded"></span>
<span class="m3-icon icon:home icon-style:sharp"></span>
```

## 아이콘 채우기

`icon-filled:*` 클래스를 사용하여 아이콘을 채울지 여부를 결정할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 align-items:center">
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-filled:0"></span>
      <code>icon-filled:0</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-filled:1"></span>
      <code>icon-filled:1</code>
    </div>
  </div>
</div>

```html
<span class="m3-icon icon:home icon-filled:0"></span>
<span class="m3-icon icon:home icon-filled:1"></span>
```

## 아이콘 두께

`icon-weight:*` 클래스를 사용하여 아이콘의 두께를 조절할 수 있습니다. 값이 클수록 더 두꺼워집니다.

<div class="vp-doc">
  <div class="d:flex gap:4 align-items:center">
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-weight:100"></span>
      <code>icon-weight:100</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-weight:200"></span>
      <code>icon-weight:200</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-weight:300"></span>
      <code>icon-weight:300</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-weight:400"></span>
      <code>icon-weight:400</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-weight:500"></span>
      <code>icon-weight:500</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-weight:600"></span>
      <code>icon-weight:600</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-weight:700"></span>
      <code>icon-weight:700</code>
    </div>
  </div>
</div>

```html
<span class="m3-icon icon:home icon-weight:100"></span>
<span class="m3-icon icon:home icon-weight:400"></span>
<span class="m3-icon icon:home icon-weight:700"></span>
```

## 아이콘 그라데이션

`icon-grade:*` 클래스를 사용하여 아이콘의 그라데이션을 조절할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 align-items:center">
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-grade:-25"></span>
      <code>icon-grade:-25</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-grade:0"></span>
      <code>icon-grade:0</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-grade:200"></span>
      <code>icon-grade:200</code>
    </div>
  </div>
</div>

```html
<span class="m3-icon icon:home icon-grade:-25"></span>
<span class="m3-icon icon:home icon-grade:0"></span>
<span class="m3-icon icon:home icon-grade:200"></span>
```

## 아이콘 광학 크기

`icon-optical-size:*` 클래스를 사용하여 아이콘의 광학 크기를 조절할 수 있습니다. 이는 폰트의 가변 폰트 기능을 활용합니다.

<div class="vp-doc">
  <div class="d:flex gap:4 align-items:center">
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-optical-size:20"></span>
      <code>icon-optical-size:20</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-optical-size:24"></span>
      <code>icon-optical-size:24</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-optical-size:40"></span>
      <code>icon-optical-size:40</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-optical-size:48"></span>
      <code>icon-optical-size:48</code>
    </div>
  </div>
</div>

```html
<span class="m3-icon icon:home icon-optical-size:20"></span>
<span class="m3-icon icon:home icon-optical-size:24"></span>
<span class="m3-icon icon:home icon-optical-size:40"></span>
<span class="m3-icon icon:home icon-optical-size:48"></span>
```

## 아이콘 색상

`icon-color:*` 클래스를 사용하여 프로젝트에서 정의한 색상 팔레트를 사용할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap">
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:main-1"></span>
      <code>icon-color:main-1</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:main-2"></span>
      <code>icon-color:main-2</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:main-3"></span>
      <code>icon-color:main-3</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:sub-1"></span>
      <code>icon-color:sub-1</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:sub-2"></span>
      <code>icon-color:sub-2</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:sub-3"></span>
      <code>icon-color:sub-3</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:accent-1"></span>
      <code>icon-color:accent-1</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:accent-2"></span>
      <code>icon-color:accent-2</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:accent-3"></span>
      <code>icon-color:accent-3</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:base-1"></span>
      <code>icon-color:base-1</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:base-5"></span>
      <code>icon-color:base-5</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-color:base-9"></span>
      <code>icon-color:base-9</code>
    </div>
  </div>
</div>

```html
<span class="m3-icon icon:home icon-color:main-1"></span>
<span class="m3-icon icon:home icon-color:sub-1"></span>
<span class="m3-icon icon:home icon-color:accent-1"></span>
<span class="m3-icon icon:home icon-color:base-9"></span>
```

## 아이콘 크기

`icon-size:*` 클래스를 사용하여 아이콘의 크기를 조절할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 align-items:center">
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-size:20"></span>
      <code>icon-size:20</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-size:24"></span>
      <code>icon-size:24</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-size:40"></span>
      <code>icon-size:40</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-size:48"></span>
      <code>icon-size:48</code>
    </div>
  </div>
</div>

```html
<span class="m3-icon icon:home icon-size:20"></span>
<span class="m3-icon icon:home icon-size:24"></span>
<span class="m3-icon icon:home icon-size:40"></span>
<span class="m3-icon icon:home icon-size:48"></span>
```

## 버튼과 함께 사용하기

아이콘은 버튼과 함께 사용할 수 있습니다. 버튼 클래스에 아이콘 클래스를 추가하면 됩니다.

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <button class="m3-btn icon:home">홈</button>
    <button class="m3-btn icon:menu">메뉴</button>
    <button class="m3-btn icon:search">검색</button>
    <button class="m3-btn icon:settings">설정</button>
  </div>
</div>

```html
<button class="m3-btn icon:home">홈</button>
<button class="m3-btn icon:menu">메뉴</button>
<button class="m3-btn icon:search">검색</button>
```

## 사용 가능한 아이콘

Newtil CSS는 Google Material Icons의 Essential 버전을 제공합니다. 총 60개의 핵심 아이콘을 포함하고 있습니다.

### 네비게이션 (15개)

<div class="vp-doc">
  <div class="d:flex flex-direction:column gap:2">
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:home"></span> <code>icon:home</code> - 홈</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:menu"></span> <code>icon:menu</code> - 메뉴</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:close"></span> <code>icon:close</code> - 닫기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:arrow_back"></span> <code>icon:arrow_back</code> - 뒤로 가기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:arrow_forward"></span> <code>icon:arrow_forward</code> - 앞으로 가기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:expand_more"></span> <code>icon:expand_more</code> - 더 보기 (아래)</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:expand_less"></span> <code>icon:expand_less</code> - 더 보기 (위)</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:chevron_left"></span> <code>icon:chevron_left</code> - 왼쪽 화살표</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:chevron_right"></span> <code>icon:chevron_right</code> - 오른쪽 화살표</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:more_vert"></span> <code>icon:more_vert</code> - 더보기 (세로)</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:more_horiz"></span> <code>icon:more_horiz</code> - 더보기 (가로)</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:refresh"></span> <code>icon:refresh</code> - 새로고침</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:settings"></span> <code>icon:settings</code> - 설정</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:apps"></span> <code>icon:apps</code> - 앱</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:launch"></span> <code>icon:launch</code> - 실행</div>
  </div>
</div>

### 액션 (20개)

<div class="vp-doc">
  <div class="d:flex flex-direction:column gap:2">
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:add"></span> <code>icon:add</code> - 추가</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:remove"></span> <code>icon:remove</code> - 제거</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:edit"></span> <code>icon:edit</code> - 편집</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:delete"></span> <code>icon:delete</code> - 삭제</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:save"></span> <code>icon:save</code> - 저장</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:check"></span> <code>icon:check</code> - 확인</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:clear"></span> <code>icon:clear</code> - 지우기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:cancel"></span> <code>icon:cancel</code> - 취소</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:done"></span> <code>icon:done</code> - 완료</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:search"></span> <code>icon:search</code> - 검색</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:share"></span> <code>icon:share</code> - 공유</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:download"></span> <code>icon:download</code> - 다운로드</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:upload"></span> <code>icon:upload</code> - 업로드</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:copy"></span> <code>icon:copy</code> - 복사</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:visibility"></span> <code>icon:visibility</code> - 보기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:visibility_off"></span> <code>icon:visibility_off</code> - 숨기기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:lock"></span> <code>icon:lock</code> - 잠금</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:lock_open"></span> <code>icon:lock_open</code> - 잠금 해제</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:sync"></span> <code>icon:sync</code> - 동기화</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:info"></span> <code>icon:info</code> - 정보</div>
  </div>
</div>

### 커뮤니케이션 (8개)

<div class="vp-doc">
  <div class="d:flex flex-direction:column gap:2">
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:email"></span> <code>icon:email</code> - 이메일</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:phone"></span> <code>icon:phone</code> - 전화</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:chat"></span> <code>icon:chat</code> - 채팅</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:notifications"></span> <code>icon:notifications</code> - 알림</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:send"></span> <code>icon:send</code> - 보내기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:reply"></span> <code>icon:reply</code> - 답장</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:help"></span> <code>icon:help</code> - 도움말</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:feedback"></span> <code>icon:feedback</code> - 피드백</div>
  </div>
</div>

### 미디어 (7개)

<div class="vp-doc">
  <div class="d:flex flex-direction:column gap:2">
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:play_arrow"></span> <code>icon:play_arrow</code> - 재생</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:pause"></span> <code>icon:pause</code> - 일시정지</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:stop"></span> <code>icon:stop</code> - 정지</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:volume_up"></span> <code>icon:volume_up</code> - 볼륨 높이기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:volume_off"></span> <code>icon:volume_off</code> - 볼륨 끄기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:mic"></span> <code>icon:mic</code> - 마이크</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:mic_off"></span> <code>icon:mic_off</code> - 마이크 끄기</div>
  </div>
</div>

### 파일 (5개)

<div class="vp-doc">
  <div class="d:flex flex-direction:column gap:2">
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:folder"></span> <code>icon:folder</code> - 폴더</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:folder_open"></span> <code>icon:folder_open</code> - 열린 폴더</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:attach_file"></span> <code>icon:attach_file</code> - 파일 첨부</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:cloud"></span> <code>icon:cloud</code> - 클라우드</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:description"></span> <code>icon:description</code> - 문서</div>
  </div>
</div>

### 소셜 (5개)

<div class="vp-doc">
  <div class="d:flex flex-direction:column gap:2">
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:person"></span> <code>icon:person</code> - 사람</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:people"></span> <code>icon:people</code> - 사람들</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:favorite"></span> <code>icon:favorite</code> - 즐겨찾기</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:star"></span> <code>icon:star</code> - 별</div>
    <div class="d:flex align-items:center gap:2"><span class="m3-icon icon:thumb_up"></span> <code>icon:thumb_up</code> - 좋아요</div>
  </div>
</div>

## 커스텀 아이콘 사용하기

Newtil CSS는 기본적으로 약 10개 내외의 핵심 아이콘만 제공합니다. 프로젝트에서 필요한 추가 아이콘은 프로젝트 내 CSS 파일에 직접 추가할 수 있습니다.

[Google Material Icons](https://fonts.google.com/icons)에서 원하는 아이콘을 찾아 유니코드 값을 가져온 후, 다음과 같이 스타일을 추가하면 됩니다:

```css
.icon\:your_icon_name::before {
	content: "\e88a";
}
```

예를 들어, `icon-essential.css` 파일에 다음과 같이 추가할 수 있습니다:

```css
/* === NAVIGATION === */
.icon\:home::before {
	content: "\e88a";
}
```

### 아이콘 유니코드 찾는 방법

1. [Google Material Icons](https://fonts.google.com/icons) 사이트에 접속합니다.
2. 원하는 아이콘을 검색하거나 카테고리에서 선택합니다.
3. 아이콘을 클릭하면 상세 정보가 표시됩니다.
4. "Font" 탭에서 유니코드 값을 확인할 수 있습니다 (예: `\e88a`).
5. 해당 유니코드 값을 `content` 속성에 추가합니다.

### 예제

프로젝트의 CSS 파일에 다음과 같이 추가하면 새로운 아이콘을 사용할 수 있습니다:

```css
/* 커스텀 아이콘 추가 */
.icon\:favorite_border::before {
	content: "\e87e";
}

.icon\:shopping_cart::before {
	content: "\e8cc";
}
```

그리고 HTML에서 다음과 같이 사용합니다:

```html
<span class="m3-icon icon:favorite_border"></span>
<span class="m3-icon icon:shopping_cart"></span>
```

## 옵션 조합 예제

여러 옵션을 조합하여 사용할 수 있습니다:

<div class="vp-doc">
  <div class="d:flex gap:4 align-items:center">
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-size:40 icon-color:main-1 icon-filled:1"></span>
      <code>크기 + 색상 + 채우기</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-size:48 icon-weight:700 icon-color:accent-1"></span>
      <code>크기 + 두께 + 색상</code>
    </div>
    <div class="d:flex flex-direction:column align-items:center gap:2">
      <span class="m3-icon icon:home icon-style:rounded icon-filled:1 icon-color:main-2"></span>
      <code>스타일 + 채우기 + 색상</code>
    </div>
  </div>
</div>

```html
<!-- 크기, 색상, 채우기 조합 -->
<span class="m3-icon icon:home icon-size:40 icon-color:main-1 icon-filled:1"></span>

<!-- 크기, 두께, 색상 조합 -->
<span class="m3-icon icon:home icon-size:48 icon-weight:700 icon-color:accent-1"></span>

<!-- 스타일, 채우기, 색상 조합 -->
<span class="m3-icon icon:home icon-style:rounded icon-filled:1 icon-color:main-2"></span>
```
