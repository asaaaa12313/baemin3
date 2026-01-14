**위즈더플래닝(Wiz The Planning) 웹 구축 통합 PRD (v1.0)**
작성자: Sales-Driven UX Architect | 문서 등급: High-Fidelity

---

## 1. 프로젝트 개요 (Project Overview)

### 1.1. 기획 의도

단순한 회사 소개 페이지가 아닙니다. 배달 앱 매출 부진으로 고통받는 자영업자에게 **'매출 상승의 확신'**을 심어주고, **'앱 최적화(Hook)'**로 유입시켜 **'월 통합 관리(Lock-in)'**로 전환시키는 세일즈 퍼널(Sales Funnel) 구축을 목표로 합니다.

### 1.2. 핵심 타겟 (Persona)

* **Persona:** "음식 맛은 자신 있는데, 배달 앱 주문은 왜 안 들어오는지 모르겠어."
* **Pain Point:** 깃발 광고비만 나가고 효율이 없음, 리뷰 관리나 메뉴 사진 찍을 시간이 없음.
* **Needs:** 알아서 다 해주는 전문가, 눈에 보이는 매출 변화.

### 1.3. 핵심 가치 제안 (USP)

1. **Dual Solution:** 단순 디자인 변경(Visual) + 경쟁사 분석 컨설팅(Strategy).
2. **Risk Free:** 단건 상품 결제 후 정기 관리 전환 시, 기지불 금액 전액 차감(사실상의 무료 체험).

---

## 2. 디자인 전략 (Design Concept)

* **Look & Feel:** `Professional` & `Appetizing`
* 신뢰감을 주는 **Deep Navy (#1A2B3C)**를 베이스로, 식욕과 행동을 자극하는 **Vivid Orange (#FF5722)**를 포인트 컬러로 사용.


* **Typography:** `Pretendard` (가독성과 모던함을 위해 단일 폰트 사용, Weight로 위계 조절)
* **Imagery:**
* 추상적인 일러스트 배제.
* 고해상도 음식 사진(Sizzling), 배달 앱 UI 목업, 실제 상승한 매출 그래프 등 **'직관적 증거'** 위주 사용.



---

## 3. 정보 구조 (IA & Sitemap)

구조를 단순화하여 사용자의 고민 시간을 줄입니다.

* **Header (GNB):** 로고 | 서비스 소개 | 성공 사례(Portfolio) | 가격(Pricing) | **무료 진단 신청 (CTA Button)**
* **Main Flow:** [Hero: 문제 제기] -> [Problem: 진단] -> [Solution: 단건 상품] -> [Upsell: 정기 관리 & 환급 혜택] -> [Add-on: 옵션] -> [Proof: 후기] -> [Footer: 문의]

---

## 4. 상세 설계 및 와이어프레임 (Detailed Wireframe)

각 섹션은 디자이너가 즉시 시안 작업이 가능하도록 **[레이아웃 - 카피 - 기능]**을 정의합니다.

### Section 1: Hero (The Hook)

* **Layout:** Full Screen Video Background (어둡게 처리된, 바쁘게 돌아가는 활기찬 주방 영상). 중앙 정렬 텍스트.
* **Design Intent:** 방문자의 '불안(매출 저조)'을 건드리고 '희망'을 제시.

> **[Wireframe Visualization]**
> **(Background: 바쁜 주방 영상 + Dark Overlay)**
> [Center Text / H1]
> **"맛은 기본입니다. 그런데 왜 주문은 옆 가게로 갈까요?"**
> [Center Text / Sub]
> 배민/쿠팡/요기요 깃발만 꽂는다고 주문이 들어오지 않습니다.
> 클릭을 주문으로 바꾸는 위즈더플래닝의 **앱 최적화 솔루션**.
> [Button / Primary Color]
> **내 가게 문제점 무료 진단받기 >**

---

### Section 2: Problem Awareness (진단)

* **Layout:** 2-Column Split (모바일 1-Column). [Left: 텍스트] vs [Right: 비교 이미지 슬라이더].
* **Design Intent:** 시각적 대비(Before & After)를 통해 문제의 심각성 인지.

> **[Wireframe Visualization]**
> **[Left: Text Group]**
> **H2: 고객은 3초 만에 결정합니다.**
> Body:
> * 식욕을 떨어뜨리는 흐릿한 메뉴 사진
> * 눈에 띄지 않는 텍스트형 리뷰 배너
> * 우리 동네 맛집 랭킹에 없는 가게
> *이 사소한 차이가 월 매출 300만 원의 차이를 만듭니다.*
> 
> 
> **[Right: Image Comparison]**
> (드래그 핸들바가 있는 이미지)
> [BEFORE: 정리 안 된 메뉴판] <---> [AFTER: 위즈더플래닝 최적화]

---

### Section 3: Solution 1 (단건 상품 - Entry)

* **Layout:** 2개의 카드형 Pricing Table. 오른쪽(프리미엄)을 강조.
* **Design Intent:** 명확한 비교를 통해 객단가가 높은 199,000원 상품으로 유도.

> **[Wireframe Visualization]**
> **H2: 시작이 부담스럽다면, 최적화부터 경험해보세요.**
> **[Card 1: Basic / 119,000원]**
> * (Check) 앱 최적화 (배민/쿠팡/요기요/땡겨요)
> * 리뷰배너 디자인
> * 메뉴 카테고리 & 메뉴명 수정
> * 주문 글 수정
> 
> 
> **[Card 2: Premium / 199,000원]** *(Box Shadow & Best Badge)*
> * **(Check) Basic 상품 전체 포함**
> * **(Plus) 전문 컨설팅 포함**
> : 가게 문제점 파악
> : 주변 경쟁 업체 분석
> : 개선점 제안 레포트
> 
> 
> [Button] 신청하기

---

### Section 4: Upsell & Refund Logic (핵심 - Lock-in)

* **Layout:** Horizontal Process Flow (가로형 프로세스).
* **Design Intent:** 이 PRD의 핵심 전략. **'비용 차감'** 혜택을 시각적으로 가장 크게 강조.

> **[Wireframe Visualization]**
> **H2: "잠깐! 단건 이용 후, 1개월 내 정기 관리 전환 시..."**
> **H2 (Accent): "이미 내신 비용을 100% 돌려드립니다."**
> **[Process Diagram]**
> [Step 1] 앱 최적화/컨설팅 이용 (19.9만원 결제)
> ⬇ (화살표: 만족하셨다면?)
> [Step 2] 1개월 내 통합 관리 전환
> ⬇ (화살표: 혜택 적용)
> [Step 3] **첫 달 결제 금액 199,000원 즉시 차감**
> **[Pricing Table: 통합 관리]**
> | 기간 | 정상가 | 1회성 이용 고객 할인가 (최대 혜택) |
> | --- | --- | --- |
> | **3개월** | 990,000원 | **791,000원** (월 26만원 대) |
> | **6개월** | 1,320,000원 | **1,121,000원** (월 18만원 대) |
> | **12개월** | 1,980,000원 | **1,781,000원** (월 14만원 대) |
> 
> 
> *Caption: 1년 계약 시, 알바비 하루치도 안 되는 비용으로 전문 마케터를 고용하세요.*

---

### Section 5: Add-ons (부가 서비스)

* **Layout:** Accordion (아코디언) 또는 Tab 방식. 스크롤이 너무 길어지지 않게 처리.
* **Design Intent:** 필요한 사람만 펼쳐보도록 설계하여 정보 과부하 방지.

> **[Wireframe Visualization]**
> **H3: 필요한 것만 골라 담으세요 (Option)**
> **[+] 메뉴 수정/관리**
> * 30개 이하: 30,000원 / 50개 이하: 50,000원
> * 플랫폼 추가(대구로, 먹깨비): 별도 문의
> 
> 
> **[+] 리뷰 이벤트 배너**
> * 1단: 10,000원 / 2단: 20,000원 / 3단: 30,000원 (1개월 내 3회 수정 무료)
> 
> 
> **[+] 음식 사진 촬영**
> * 10컷 / 30컷 / 50컷 (지역별 출장비 상이 - 상담 필요)
> 
> 
> **[+] 원포인트 컨설팅**
> * 최적화 없이 진단만 진행: 100,000원
> 
> 

---

### Section 6: Evidence (신뢰 구축)

* **Layout:** Grid Layout (Review Cards).
* **Design Intent:** '나와 같은 상황의 사장님'들의 성공 사례를 보여줌.

> **[Wireframe Visualization]**
> **H2: 사장님들의 매출 그래프가 증명합니다.**
> [Review Card 1]
> (카카오톡 캡처 이미지: "팀장님, 오늘 점심 주문 터졌어요!")
> **OO떡볶이 사장님** "리뷰 배너만 바꿨는데 클릭율이 달라지네요."
> [Review Card 2]
> (배민 사장님 광장 주문 수 그래프 상승 캡처)
> **OO족발 사장님** "컨설팅대로 깃발 위치 옮기고 매출 2배 뛰었습니다."

---

### Section 7: Footer (Action)

* **Layout:** 하단 고정 바 (Mobile Sticky Bar).
* **Design Intent:** 언제든 상담을 신청할 수 있도록 접근성 확보.

> **[Wireframe Visualization]**
> (Left) **고민하는 시간에도 경쟁 업체는 앞서갑니다.**
> (Right Button) **[상담 신청하기]** **[카카오톡 문의]**
> (Footer Bottom Info)
> 위즈더플래닝 | 사업자 정보 | 이용약관 | 개인정보처리방침

---

## 5. 기능 요구사항 (Functional Requirements)

1. **DB 수집 폼 (상담 신청):**
* 입력 항목: 상호명, 담당자명, 연락처, 지역, 현재 이용 중인 앱(다중 선택), 관심 서비스(최적화/통합관리/촬영 등).
* *Validation:* 연락처 형식 검증 필수.


2. **Admin (관리자):**
* 신청 고객 리스트 뷰 (엑셀 다운로드 기능).
* 상담 상태 값 변경 (신규접수 -> 상담중 -> 계약완료 -> 취소).


3. **반응형 동작:**
* 모바일에서는 Pricing Table이 가로 스크롤(Swipe) 형태로 변환.
* 이미지 비교 슬라이더는 터치 친화적으로 동작.


4. **외부 링크 연동:**
* 카카오톡 채널 채팅 바로가기 연동.



---

## 6. 개발 및 디자인 가이드 (Development Guide)

* **Image Asset:** 모든 음식 이미지는 고해상도(2x)로 준비하되, WebP 포맷으로 변환하여 로딩 속도 최적화.
* **Interaction:**
* Pricing Section의 '정기 관리' 선택 시, '할인 금액'에 카운팅 애니메이션 적용 (예: 990,000 -> 791,000 숫자가르르륵 바뀌는 효과).
* CTA 버튼 호버 시 미세한 Scale Up 및 그림자 강화.


* **SEO:**
* Title: 위즈더플래닝 - 배달앱 매출 최적화 & 컨설팅 전문
* Description: 배민, 쿠팡이츠, 요기요 앱 최적화부터 메뉴 사진 촬영까지. 1개월 내 전환 시 비용 전액 환급.



---

