# 런던치과 웹사이트 — 검색 등록 가이드

아래 작업을 순서대로 진행해 주세요. 각 단계에서 얻는 정보(인증 코드 등)를 Pierre에게 전달해 주시면 웹사이트에 반영하겠습니다.

---

## 1. 네이버 서치어드바이저 등록 (가장 중요!)

네이버 검색에 웹사이트가 노출되려면 반드시 등록해야 합니다.

### 단계별 안내

1. **네이버 서치어드바이저 접속**: https://searchadvisor.naver.com
2. **네이버 계정으로 로그인** (런던치과 네이버 계정 사용)
3. 상단 메뉴에서 **"웹마스터 도구"** 클릭
4. **"사이트 추가"** 버튼 클릭
5. URL 입력란에 `https://www.londondental.co.kr` 입력
6. **소유 확인 방법** 선택 → **"HTML 태그"** 방식 선택
7. 화면에 나오는 **인증 코드** (meta 태그 안의 content 값)를 Pierre에게 전달
   - 예시: `<meta name="naver-site-verification" content="abc123def456" />`
   - 여기서 `abc123def456` 부분만 보내주면 됩니다
8. Pierre가 코드를 웹사이트에 추가한 후 → **"소유 확인"** 버튼 클릭

### 등록 후 추가 작업

소유 확인이 완료되면:

1. 왼쪽 메뉴에서 **"요청" → "사이트맵 제출"** 클릭
2. 사이트맵 URL 입력: `https://www.londondental.co.kr/sitemap-index.xml`
3. **"확인"** 클릭
4. 왼쪽 메뉴에서 **"요청" → "웹 페이지 수집"** 클릭
5. 아래 URL들을 하나씩 입력하고 수집 요청:
   - `https://www.londondental.co.kr/ko/`
   - `https://www.londondental.co.kr/en/`
   - `https://www.londondental.co.kr/ko/about`
   - `https://www.londondental.co.kr/en/about`
   - `https://www.londondental.co.kr/ko/faq`
   - `https://www.londondental.co.kr/en/faq`

---

## 2. 구글 서치 콘솔 등록

구글 검색에 웹사이트가 잘 노출되려면 등록해야 합니다.

### 단계별 안내

1. **구글 서치 콘솔 접속**: https://search.google.com/search-console
2. **구글 계정으로 로그인** (런던치과 구글 계정: seoul.londondental@gmail.com)
3. **"속성 추가"** 클릭
4. **"URL 접두어"** 방식 선택
5. URL 입력: `https://www.londondental.co.kr`
6. 소유권 확인 → **"HTML 태그"** 방식은 이미 완료되어 있을 수 있음
   - 웹사이트에 이미 구글 인증 코드가 추가되어 있습니다
   - 만약 확인이 안 되면 Pierre에게 연락해 주세요

### 등록 후 추가 작업

소유권 확인이 완료되면:

1. 왼쪽 메뉴에서 **"Sitemaps" (사이트맵)** 클릭
2. 새 사이트맵 추가: `sitemap-index.xml` 입력 후 **"제출"**
3. 왼쪽 메뉴에서 **"URL 검사"** 클릭
4. 아래 URL을 하나씩 입력하고 **"색인 생성 요청"** 클릭:
   - `https://www.londondental.co.kr/en/`
   - `https://www.londondental.co.kr/ko/`
   - `https://www.londondental.co.kr/en/about`
   - `https://www.londondental.co.kr/en/faq`

---

## 3. 구글 비즈니스 프로필 등록/최적화

구글에서 "english speaking dentist seoul"을 검색하면 오른쪽에 나오는 비즈니스 카드입니다.
**이것이 있어야 구글 지도 검색과 "근처 치과" 검색에 노출됩니다.**

### 이미 등록되어 있는 경우

1. **구글 비즈니스 프로필 접속**: https://business.google.com
2. 런던치과 구글 계정으로 로그인
3. 이미 등록되어 있으면 정보를 아래와 같이 확인/수정

### 새로 등록해야 하는 경우

1. https://business.google.com 접속 → **"지금 관리하기"**
2. 비즈니스 이름: `London Dental Clinic` (영어로!)
3. 카테고리: `Dentist` (치과의사) — 기본 카테고리
4. 추가 카테고리: `Cosmetic Dentist`, `Dental Clinic`, `Dental Implants Provider`
5. 주소: 97 Jong-ro 5-gil, 2nd Floor, Jongno-gu, Seoul 03054
6. 전화번호: +82-2-732-1917
7. 웹사이트: `https://www.londondental.co.kr/en/`
8. 소유권 확인 (전화 또는 엽서)

### 반드시 최적화할 항목들

등록 후 아래 내용을 꼭 채워주세요:

- **비즈니스 설명** (영어로 작성!):
  > English-speaking dental clinic in Seoul run by Dr. Fiona Park, a UK and Korea dual-licensed dentist. Trained at Queen Mary University of London and Seoul National University. We offer cosmetic dentistry, dental implants, whitening, crowns, root canals, and general dental care. Bilingual (English/Korean) service. Korean health insurance accepted. 5-minute walk from Gwanghwamun Station.

- **진료시간**: 월~금 09:30-18:30, 토 09:30-14:00, 일 휴진
- **서비스 항목 추가**: Teeth Whitening, Dental Implants, Cosmetic Dentistry, Root Canal, Dental Crowns, Teeth Cleaning, Wisdom Tooth Extraction
- **언어**: English, Korean
- **사진 업로드** (최소 10장 권장):
  - 외관 사진
  - 내부 사진 (진료실, 대기실, 접수대)
  - 장비 사진 (현미경, CT)
  - 원장님 사진
- **속성 추가**: "Identifies as women-owned" (여성 운영), "LGBTQ+ friendly", "Transgender safe space", "Offers cosmetic dentistry"
- **휠체어 접근 불가**: 2층이고 엘리베이터 없음 → 휠체어 관련 항목은 "아니오"로 설정

---

## 4. 네이버 플레이스 최적화

이미 네이버 지도에 등록되어 있다고 하셨는데, 아래 사항을 확인해 주세요.

### 네이버 스마트플레이스 접속

1. https://smartplace.naver.com 접속
2. 런던치과 네이버 계정으로 로그인
3. 런던치과의원 선택

### 확인/수정할 항목들

- [ ] **업체명**: `런던치과의원` (한국어) — 이미 되어 있을 것
- [ ] **영문 업체명**: `London Dental Clinic` — 이것이 있는지 확인!
- [ ] **업종**: 치과의원
- [ ] **태그/키워드**: `영어치과`, `외국인치과`, `이중언어치과`, `English dentist`, `광화문치과`
- [ ] **소개글** (한국어):
  > 영국 런던대학교와 서울대학교에서 수련받은 박지연 원장이 직접 진료하는 이중언어(영어/한국어) 치과입니다. 과잉진료 없이 꼼꼼하고 정직한 치료를 약속드립니다. 외국인 환자 환영. 건강보험 적용.

- [ ] **영문 소개글**:
  > English-speaking dental clinic in Seoul. Dr. Fiona Park is UK-trained and dual-licensed. Cosmetic dentistry, implants, whitening & general care. Korean health insurance accepted.

- [ ] **영업시간**: 월~금 09:30-18:30, 토 09:30-14:00
- [ ] **편의시설**: 영어 가능, 건강보험, 예약 가능
- [ ] **사진**: 최소 10장 이상 업로드 (외관, 내부, 장비, 원장님)
- [ ] **메뉴/서비스 목록**: 진료 항목별로 추가
  - 임플란트
  - 치아미백
  - 심미치과 (라미네이트/비니어)
  - 크라운/브릿지
  - 스케일링
  - 충치치료
  - 신경치료
  - 사랑니 발치
- [ ] **네이버 예약 연동**: 이미 되어 있는지 확인 (https://booking.naver.com)

### 네이버 블로그 활용 (선택사항이지만 강력 추천)

네이버 검색 순위에 가장 큰 영향을 미치는 것 중 하나가 네이버 블로그입니다.

런던치과 네이버 블로그를 만들어서 아래와 같은 글을 정기적으로 올리면 좋습니다:
- "서울 영어 치과 추천 — 런던치과 이용 후기"
- "외국인 환자를 위한 한국 치과 이용 가이드"
- "광화문 치과 런던치과의원 — 영국/한국 복수 면허 원장"
- "서울에서 영어로 임플란트 상담받기"

### 인스타그램 해시태그

인스타그램(@london_dental) 게시물에 아래 해시태그를 꼭 포함해 주세요:
- `#englishspeakingdentistseoul` (가장 중요! 외국인들이 검색하는 키워드)
- `#seouldentist`
- `#seouldental`
- `#englishdentistseoul`
- `#expatseoul`
- `#광화문치과`
- `#종로치과`
- `#런던치과`
- `#서울영어치과`

---

## 5. 구글 리뷰 수집

현재 네이버 리뷰는 5.0으로 훌륭하지만, 구글 리뷰도 더 많이 필요합니다.
구글 리뷰가 많을수록 "english speaking dentist seoul" 검색에서 상위에 노출됩니다.

### 구글 리뷰 링크 (이미 생성됨!)

아래 링크를 환자에게 공유하면 바로 리뷰 작성 화면이 열립니다:

**링크**: https://g.page/r/CbWBvSAK8zgcEBM/review

**QR 코드**도 다운로드되어 있습니다 — 접수대나 진료실에 출력해서 비치해 주세요.

### 리뷰 요청 방법

1. **외국인 환자**에게 진료 후 위 링크를 카카오톡/문자/이메일로 전송
2. 영어 메시지 예시: "If you enjoyed your visit, a Google review would really help other English speakers find us!" + 링크
3. 한국인 환자에게는: "네이버 리뷰도 감사하지만, 구글 리뷰도 남겨주시면 외국인 환자분들에게 큰 도움이 됩니다!" + 링크
4. **절대 리뷰 대가로 할인이나 보상을 제공하지 마세요** — 구글 정책 위반이며 리뷰가 삭제됩니다

### 목표
- 단기: 구글 리뷰 10개 이상
- 중기: 구글 리뷰 30개 이상 (경쟁 치과들의 평균 수준)

---

## 6. 원장님께 확인할 사항 (구글 비즈니스 프로필용)

구글 비즈니스 프로필에 정확한 정보를 넣기 위해 아래 사항을 확인해 주세요:

### 진료 관련 질문

1. **소아 치과 전문인가요?** 아이들도 진료하시는 건 알지만, 소아 치과를 **전문 분야**로 내세우시나요? (예: 소아 전문 장비, 소아 전문 교육 이수 등)
   - 예 → 구글에 "소아 치과" 카테고리 유지
   - 아니오 (누구나 진료하지만 전문은 아님) → 카테고리에서 제거

2. **응급 진료를 받으시나요?** 예약 없이 갑자기 통증이 있는 환자가 오면 당일 진료가 가능한가요?
   - 예 → "응급 진료 가능" 표시
   - 아니오 → 표시 안 함

3. **진정(세데이션) 치료를 하시나요?** (웃음 가스, IV 진정 등)
   - 예 → "진정 치료 가능" 표시
   - 아니오 → 표시 안 함

4. **화장실이 남녀 공용(1인실)인가요?**
   - 예 → "성별 구분 없는 화장실" 표시
   - 아니오 → 표시 안 함

### 답변을 Pierre에게 전달해 주세요!

---

## 완료 후 Pierre에게 전달할 정보

아래 정보를 Pierre에게 보내주세요:

1. **네이버 서치어드바이저 인증 코드** (예: `abc123def456`)
2. **구글 서치 콘솔 등록 완료 여부** (예/아니오)
3. **구글 비즈니스 프로필 등록 완료 여부** (예/아니오)
4. **네이버 스마트플레이스 영문 업체명 추가 여부** (예/아니오)
5. **구글 리뷰 링크 URL** (생성했다면)
6. **위 6번 질문 답변** (소아 전문 여부, 응급 진료, 진정 치료)

---

*이 문서는 2026년 4월 6일에 작성되었습니다.*
