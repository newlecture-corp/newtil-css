{
    const data = '{"totalCount":12,"totalPages":2,"hasPreviousPage":false,"hasNextPage":true,"menus":[{"id":1651,"korName":"치즈 샌드위치","engName":"cheese sandwich","price":5000,"regDate":"2024-09-29T01:55:06Z","categoryId":3,"regMemberId":1,"images":[{"id":"5","isDefault":true,"src":"sandwich1.png"}]},{"id":1649,"korName":"베이컨 샌드위치","engName":"bacon sandwich","price":5000,"regDate":"2024-09-29T01:54:36Z","categoryId":3,"regMemberId":1,"images":[{"id":"7","isDefault":true,"src":"sandwich3.png"}]},{"id":1650,"korName":"바게트 샌드위치","engName":"baguette sandwich","price":7000,"regDate":"2024-09-29T01:54:29Z","categoryId":3,"regMemberId":1,"images":[{"id":"6","isDefault":true,"src":"sandwich2.png"}]},{"id":9,"korName":"카라멜 마끼아또","engName":"Caramel Macchiato","price":4500,"regDate":"2024-02-19T11:16:28Z","categoryId":1,"regMemberId":1,"images":[]},{"id":8,"korName":"디카페인아메리카노","engName":"decafamericano","price":5500,"regDate":"2024-02-19T11:15:27Z","categoryId":1,"regMemberId":1,"images":[]},{"id":7,"korName":"딸기 피지오","engName":"Strawberry Fizzio","price":3000,"regDate":"2024-02-19T11:15:12Z","categoryId":2,"regMemberId":1,"images":[]}],"pages":[1,2,3,4,5]}';

    // 1. data를 파싱하여 parsedMenus에 대입하세요.

    // 2. parsedMenus에서 menus를 추출하여 만들어진 배열을 기존 변수 menus에 참조하세요.

    // 3. 메뉴의 가격이 6000원 이상인 메뉴만 필터링하여 새로운 배열을 만들고 만들어진 배열을 기존 변수인 menus에 참조하세요.

    // 4. 메뉴의 가격이 작은것부터 큰 순으로 정렬하고 그 결과를 기존 변수인 menus에 참조하세요.

    // 5. menus의 각 요소를 다음과 같은 형식으로 변환하여 새로운 배열을 만들고 기존 변수인 menus에 참조하세요.
    // 단. menu의 images의 0번째 이미지를 img 속성에 대입하며 개수가 0인 경우 'default.png'를 대입하세요.
    // { id: 1651, Name: '치즈 샌드위치', price: 5000, img: 'sandwich1.png' }

    // 6. menus를 출력하세요.
}


// ==================================

const data = '{"totalCount":12,"totalPages":2,"hasPreviousPage":false,"hasNextPage":true,"menus":[{"id":1651,"korName":"치즈 샌드위치","engName":"cheese sandwich","price":5000,"regDate":"2024-09-29T01:55:06Z","categoryId":3,"regMemberId":1,"images":[{"id":"5","isDefault":true,"src":"sandwich1.png"}]},{"id":1649,"korName":"베이컨 샌드위치","engName":"bacon sandwich","price":5000,"regDate":"2024-09-29T01:54:36Z","categoryId":3,"regMemberId":1,"images":[{"id":"7","isDefault":true,"src":"sandwich3.png"}]},{"id":1650,"korName":"바게트 샌드위치","engName":"baguette sandwich","price":7000,"regDate":"2024-09-29T01:54:29Z","categoryId":3,"regMemberId":1,"images":[{"id":"6","isDefault":true,"src":"sandwich2.png"}]},{"id":9,"korName":"카라멜 마끼아또","engName":"Caramel Macchiato","price":4500,"regDate":"2024-02-19T11:16:28Z","categoryId":1,"regMemberId":1,"images":[]},{"id":8,"korName":"디카페인아메리카노","engName":"decafamericano","price":5500,"regDate":"2024-02-19T11:15:27Z","categoryId":1,"regMemberId":1,"images":[]},{"id":7,"korName":"딸기 피지오","engName":"Strawberry Fizzio","price":3000,"regDate":"2024-02-19T11:15:12Z","categoryId":2,"regMemberId":1,"images":[]}],"pages":[1,2,3,4,5]}';

// 1. data를 파싱하여 parsedMenus에 대입하세요.
const parsedMenus = JSON.parse(data);

// 2. parsedMenus에서 menus를 추출하여 새로운 변수 menus에 대입하세요.
let { menus } = parsedMenus;

// 3. 메뉴의 가격이 6000원 이상인 메뉴만 필터링하여 새로운 배열을 만들고
menus = menus.filter((menu) => menu.price < 6000);

// 4. 메뉴의 가격이 작은것부터 큰 순으로 정렬하고
menus = menus.sort((a, b) => a.price - b.price);

// 5. menus의 각 요소를 다음과 같은 형식으로 변환하여 새로운 배열을 만들고
// 단. menu의 images의 0번째 이미지를 img 속성에 대입하며 개수가 0인 경우 'default.png'를 대입하세요.
// { id: 1651, Name: '치즈 샌드위치', price: 5000, img: 'sandwich1.png' }
menus = menus.map((menu) => {
    return {
        id: menu.id,
        Name: menu.korName,
        price: menu.price,
        img: menu.images[0] || menu.images[0].src || 'default.png',
    };
});

// 6. menuList를 출력하세요.
menus.forEach(menu => {
    console.log(menu);
});
