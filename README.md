# Emotion Weather Frontend ☀️🌧️

**Emotion Weather Frontend** is the user-facing React application of the Emotion Weather project.  
It allows users to enter their emotional state via emojis, view collective emotional feedback, and interact through a shared QR link.

사용자는 공유된 QR 링크를 통해 입장하고,  
현재 또는 미래의 감정을 이모지로 입력할 수 있습니다.  
감정 데이터를 시각적으로 표현하고, AI 분석 결과를 따뜻하고 직관적인 UI로 제공합니다.

---

## 🌟 Features

- 선택 화면: QR 생성 or 링크 입장
- 감정 입력: 현재 감정 / 미래 감정 상태 이모지 입력
- 결과 확인: 그룹 감정 데이터 시각화 및 AI 피드백 표시
- 반응형 UI: 모바일과 데스크탑 모두 대응
- OpenAI 피드백 기반 감정 날씨 뷰

---

## 🛠 Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context / useState
- **Deployment (Planned)**: Vercel / S3 + CloudFront

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/hyejinggu/emotion-weather-frontend.git
cd emotion-weather-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

> 기본 접속 URL: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
emotion-weather-frontend/
├── public/              # 정적 파일 (favicon 등)
├── src/
│   ├── components/      # 공통 UI 컴포넌트
│   ├── pages/           # 페이지 단위 구성 (입력, 결과 등)
│   ├── routes/          # React Router 설정
│   ├── hooks/           # 커스텀 훅 (선택 사항)
│   ├── App.jsx          # 루트 컴포넌트
│   ├── main.jsx         # 앱 진입점
├── index.html
├── tailwind.config.js
├── package.json
```

---

## 🗓️ Roadmap / TODO

- [ ] 이모지 기반 감정 입력 UI 구현
- [ ] QR 코드에 따른 사용자 세션 흐름 분기
- [ ] 결과 페이지: 감정 통계 및 피드백 표시
- [ ] 모바일 중심 반응형 스타일링 적용
- [ ] AI 응답과 시각화 컴포넌트 연결
- [ ] 배포 환경 구성 및 도메인 연동

---

## 🙋‍♀️ About

This is the frontend of a personal passion project  
to experiment with emotional UX and AI interaction.  
The goal is to make collective feelings visible and empathetic.
