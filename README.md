# PROJECT BAGETTT 소개
GETTT(https://www.gettt.com/)는 패션, 생활용품, 가구 등을 판매하고 장, 단기 렌탈 서비스를 제공하는 비즈니스이다. BAGETTT라는 프로젝트명으로 전국의 유명한 베이커리의 빵을 담은 패키지를 구성하여 주 1회 정기배송하는 빵구독 서비스로 기획하였다. 프로젝트 예정기간은 총 2주로 잡았으며 첫 프로젝트인 만큼 여러 많은 기능 구현들이나 css의 요소보다 로그인,회원가입, 제품리스트페이지, 상세페이지,장바구니,주문완료 페이지 기능 구현을 목표로 잡았다. 팀원의 경우에는 총 5명으로 프론트엔드 3명 백엔드 2명으로 구성돼있다.

---

## 개발 인원 및 기간
개발 기간 : 2021/11/29 - 2021/12/10
프론트엔드 : 강인웅, 김재호, 원소연
백엔드 : 김은혜, 이재문

## 구현 기능
#### 1. 회원가입 / 로그인 (김재호/이재문)
- Crypt를 이용한 암호화
- 정규표현식을 이용한 이메일, 패스워드 유효성 검사
- 로그인 시 jwt 토큰 발급


#### 2. 제품 리스트 (강인웅/김은혜)
- 제품리스트 컴포넌트화 하여 나열
- 리스트 페이지 필터링 기능 구현
  1. 브랜드별 정렬, 가격순 정렬 , 중복정렬
  2. 정렬 항목들을 쿼리 형식으로 만들어 백엔드와 통신
  3. 초기화 시 모든 정렬 항목 체크 해제 및 기본 정렬


#### 3. 제품 상세 (원소연/김은혜)
- 제품 소개 페이지를 컴포넌트화 하여 빵 패키지 마다 다른 소개


#### 4. 장바구니 (강인웅/김은혜/이재문)
- 제품 수량 증감, 삭제시 백엔드에 실시간 POST, DELETE하며 통신
- 전체 체크박스, 부분체크 박스를 만들어 품목들 핸들링
  1. 체크된 항목 개별,부분,전체 (삭제/결제) 기능 구현
  2. 체크된 항목 Total Price 계산

https://user-images.githubusercontent.com/73282508/145710175-68a6bedf-2189-4636-a54f-a0b347d54d03.mov

- 결제 시 useNavigate 훅과 useLoaction 훅을 이용해 통신 결과값 전달


https://user-images.githubusercontent.com/73282508/145710208-067d2950-f1e0-422e-b111-0161ddc1336b.mov




#### 5. 주문 상세 (원소연/이재문)
- 주문 완료된 제품 및 배송정보 출력
- (장바구니와 완료 제품 사이의 ACID 수행을 위한 transaction 사용)
--- 

## 프로젝트 구현 화면 ↓ Click ↓
[![Video Label](https://img.youtube.com/vi/1S_MNySYXB8/0.jpg)](https://youtu.be/1S_MNySYXB8)

---
## 사용된 기술
---
### 1. FRONT_END
React
SASS
Prettier
ESlint

### 2. BACK_END
Python
Django frame work

### 3. COMMON
Notion
Trello
Slack
Git, Github

## 협업 툴
---
1. GitHub
2. Notion
3. Trello
4. Slack


