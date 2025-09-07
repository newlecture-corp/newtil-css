<script setup></script>

<template>
  <!-- https://vitepress.dev/reference/runtime-api#clientonly -->
  <ClientOnly>
    <section class="example-section n-item box-shadow:5">
      <h1 class="n-font:title text-align:center font-weight:3">
        순수 CSS로 만들어진 컴포넌트와 유틸리티 클래스
      </h1>
      <div class="text-align:center color:base-7 mt:1">
        컴포넌트와 유틸리티 클래스로 테마를 더 쉽게 만들어보세요
      </div>
      <div class="n-container mt:8">
        <div
          class="n-list n-card-list n-list-item:outline n-list-item-border-rd:4"
        >
          <section class="n-panel p:6 box-shadow:5">
            <div>
              <img
                src="/schoolbag.jpg"
                width="320"
                height="210"
                alt="카드 이미지"
                class="h:auto w:100p"
              />
            </div>
            <h1 class="mt:6 n-heading:3">가방</h1>
            <div class="mt:1 n-heading:2">₩89,000</div>
            <div class="mt:6">
              <button class="n-btn n-btn-size:3 w:100p">
                <span
                  class="deco deco-pos:right deco-size:3 deco-color:base-1 icon:shopping_cart_simple_fill"
                >
                  장바구니에 담기
                </span>
              </button>
            </div>
          </section>

          <section class="n-form p:6 h:fit-content box-shadow:5">
            <h1 class="n-font:h1 font-weight:3">회원가입</h1>
            <div class="mt:1 font-size:2">
              회원가입을 위해 이메일과 비밀번호를 입력해주세요
            </div>

            <div>
              <label>
                <span>이메일</span>
                <input type="text" placeholder="email@example.com" />
              </label>
            </div>
            <div>
              <label>
                <span>비밀번호</span>
                <input type="password" />
              </label>
            </div>
            <div class="pb:0">
              <button class="n-btn n-btn-color:base">회원가입</button>
            </div>
          </section>

          <section class="n-item p:6 h:fit-content box-shadow:5">
            <h1 class="n-font:h2 font-weight:3">알림 설정</h1>
            <div class="mt:1 font-size:2">
              서비스에서 제공하는 이벤트 정보를 빠르게 알려드려요
            </div>
            <div class="mt:8 d:flex fl-dir:column gap:4">
              <label class="w:100p jc:space-between">
                이메일
                <input type="checkbox" class="n-toggle" />
              </label>

              <label class="w:100p jc:space-between">
                문자 메세지
                <input type="checkbox" class="n-toggle" />
              </label>

              <label class="w:100p jc:space-between">
                앱 푸시
                <input type="checkbox" checked class="n-toggle" />
              </label>
            </div>

            <div class="mt:6">
              <button class="n-btn n-btn:outline w:100p">저장</button>
            </div>
          </section>

          <section class="n-item box-shadow:5 d:flex h:fit-content">
            <div class="d:flex ai:center mr:4">
              <span
                class="w:1 h:1 bg-color:base-2 bd-radius:full icon icon-size:5 icon:download_simple"
              >
                이미지
              </span>
            </div>
            <div class="fl-grow:1">
              <h1 class="font-size:3">다운로드 중</h1>
              <div class="font-size:2 mt:1 color:base-7">1,524kb</div>
              <div class="n-progress mt:4" role="progressbar">
                <div style="width: 50%"></div>
              </div>
              <div class="d:flex jc:flex-end mt:4">
                <button class="n-btn n-btn:outline">취소</button>
              </div>
            </div>
          </section>

          <section class="n-item box-shadow:5 p:6 pos:relative">
            <div class="pos:absolute font-size:2" style="right: 16px">
              3시간 전
            </div>
            <h1 class="font-weight:3">새 메일</h1>
            <h2 class="font-size:1 font-weight:3 mt:1">
              Re: 문의에 답변 보내드립니다
            </h2>
            <p class="font-size:2 line-clamp:2 mt:2">
              보내주신 의견 정말 감사드립니다. 긍정적으로 검토하여 빠른 시일
              내에 다시 답변드리도록 하겠습니다.
            </p>
            <div class="mt:3">
              <button class="n-btn n-btn:outline n-btn-size:1 px:2">
                <span
                  class="icon icon:bookmark_simple icon-size:3 icon-color:base-7"
                >
                  북마크
                </span>
              </button>
              <button class="ml:2 n-btn n-btn:outline n-btn-size:1 px:2">
                <span class="icon icon:trash icon-size:3 icon-color:base-7">
                  삭제
                </span>
              </button>
            </div>
          </section>
        </div>

        <div class="mt:6">
          <table class="n-table n-bbs-table n-table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Last Login</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Tom</td>
                <td>male</td>
                <td>2020-11-01</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Olivia</td>
                <td>female</td>
                <td>2021-03-01</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jerry</td>
                <td>male</td>
                <td>2021-03-01</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Kenneth</td>
                <td>female</td>
                <td>2021-03-02</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Robert</td>
                <td>male</td>
                <td>2021-02-04</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Anthony</td>
                <td>female</td>
                <td>2020-12-30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="d:flex jc:center mt:4">
        <a
          href="/newtil-css/guide/getting-started"
          class="n-btn n-btn-size:3 bd-radius:full"
        >
          시작하기
        </a>
      </div>
    </section>
  </ClientOnly>
</template>

<style scoped>
.example-section {
  max-width: 1152px;
  padding: 48px 48px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 128px;
}

@media (min-width: 640px) {
  .example-section {
    padding: 48px 64px;
  }
}

@media (min-width: 960px) {
  .example-section {
    padding: 48px 82px;
  }
}
</style>
