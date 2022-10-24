# pos-system

카페 포스기 사이트 - 리액트 리팩토링 <br/>
https://github.com/pangkyu/cafe-casher-site (기존 html 프로젝트) 

## 프로젝트 개발 이유👀
 
  카페 알바 중 나도 포스기 화면과 기능을 구현할 수 있을까?라는 생각이 들어 도전하게 되었으며, 
  <br/>정적인 페이지를 완성한 뒤 DB를 연결한 동적인 기능까지 구현하고 싶어 리팩토링하게되었음 
 
## 개발스택🛠️

<div align = center>
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <br/>
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
 <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white">
 <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
 
</div>

## 실행방법🖥️ 
  <details>
 <summary>자세히</summary><br/><br/>
  터미널에서 pos-system-main -> pos디렉토리로 이동한 뒤, npm start 
  </details>

## UI🧾
<details>
 <summary>메인화면</summary><br/>
 
 ![image](https://user-images.githubusercontent.com/75983289/197516147-045236a0-fd9f-417f-855d-7e2b23d4df7e.png)
</details>

<details>
 <summary>Takeout</summary><br/>
 
 ![image](https://user-images.githubusercontent.com/75983289/197516787-c5055fd8-e078-4789-aa52-35941609e361.png)
 - 카테고리 메뉴를 클릭하면 메뉴목록이 바뀐다. 
 - 메뉴를 클릭하면 메뉴가 추가된다. 
 - 전체취소, 라인취소, +, -로 결제목록을 관리할 수 있다. 
 - 현금/카드 버튼을 누르면 결제가 완료된다. 
 - 전체 서비스 버튼을 누르면 가격이 0원으로 변경되어 결제된다. 
 - 단가변경을 통해 메뉴의 단가를 변경하여 결제할 수 있다. 
 - 영수증관리를 누르면 orderlist 페이지로 이동한다. 
</details>

<details>
 <summary>sales</summary><br/>
 
 ![image](https://user-images.githubusercontent.com/75983289/197516947-139c87a5-f778-425b-bc3c-08bb06af23a7.png)
 - 날짜별 매출액을 확인할 수 있다. 
</details>

<details>
 <summary>Orderlist</summary><br/>
 
 ![image](https://user-images.githubusercontent.com/75983289/197517182-f4bdf0c2-6e07-449d-bb31-6bd9bdfedaab.png)
 - 주문목록을 조회할 수 있다. 
 - 반품버튼을 눌러서 주문목록을 반품처리 시킬 수 있다.
 - 위 컴포넌트에있는 영수증을 누르면 아래 컴포넌트에 세부적인 정보가 출력된다. 
</details>

<details>
 <summary>staff</summary><br/>
 
 ![image](https://user-images.githubusercontent.com/75983289/197517473-1da664d6-c2a3-458c-9fba-22ab40112fa1.png)
 - 추가, 삭제 버튼을 통해서 근무자 정보를 변경할 수 있다. 

</details>
