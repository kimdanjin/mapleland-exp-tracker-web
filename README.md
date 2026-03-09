# 🍁 메이플랜드 경험치 측정기 (Notion 연동 Ver.)

[![Website - Live](https://img.shields.io/badge/Website-Live-2ea44f?style=flat&logo=githubpages)](https://myungwoo.github.io/mapleland-exp-tracker-web/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deploy](https://github.com/myungwoo/mapleland-exp-tracker-web/actions/workflows/gh-pages.yml/badge.svg)](.github/workflows/gh-pages.yml)

**본 프로젝트는 [myungwoo/mapleland-exp-tracker-web](https://github.com/myungwoo/mapleland-exp-tracker-web)을 포크하여**
사냥 기록을 노션(Notion) 데이터베이스에 자동으로 기록하는 기능을 추가한 개선판입니다.

---
### 🚀 노션 연동 가이드 (Setup)
데이터를 정상적으로 전송하기 위해 아래 순서대로 세팅을 진행해주세요.

#### 1. 데이터베이스 준비
1. 아래 링크의 페이지를 본인의 워크스페이스로 **'복제(Duplicate)'** 합니다.
   - [**노션 데이터베이스 템플릿**](https://kimdanjin.notion.site/DB-31a11d61cef280a683fef872b2871649)
   - [**노션 플레이로그 템플릿**](https://kimdanjin.notion.site/4ff3ace44930496bba8e28219834a6ec)

#### 2. API 키 발급 및 권한 부여
1. [Notion Developers](https://www.notion.so/profile/integrations/internal)에서 새 통합을 생성하고 **API Key(Token)**를 복사합니다.
2. 복제한 노션 페이지 우측 상단 `...` -> `연결 추가`에서 방금 만든 통합 이름을 검색하여 **연결**합니다.

#### 3. ID 확인 및 트래커 설정
1. [Notion ID Finder](https://kimdanjin.github.io/notion-id-finder/)에 접속하여 본인의 **API Key**를 입력합니다.
2. 조회된 결과에서 `Play Days`와 `Play Sessions`의 **32자리 ID**를 각각 확인합니다.
3. 트래커 웹사이트의 **[설정]** 메뉴에서 아래 3가지 항목을 입력하면 모든 준비가 완료됩니다.
   - **Key:** 노션 API Key
   - **Days:** Play Days DB ID
   - **Sessions:** Play Sessions DB ID
---

## 🧰 기술 스택 및 크레딧
- 원본 프로젝트 [myungwoo/mapleland-exp-tracker-web](https://github.com/myungwoo/mapleland-exp-tracker-web)
- Next.js 15 (App Router, 정적 Export)
- React 18 + TypeScript
- Tailwind CSS
- Tesseract.js (Web Worker OCR)
- Zustand / LocalStorage(설정 저장) / IndexedDB(기록 저장)
- OCR: [Tesseract.js](https://github.com/naptha/tesseract.js)
---

## 📝 라이선스
이 프로젝트는 MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참고하세요.
