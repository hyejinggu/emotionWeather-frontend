import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_DOMAIN } from "../constants";

function MainPage() {
  const navigate = useNavigate();
  const [link, setLink] = useState("");

  const isValidLink = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.origin == BASE_DOMAIN;
    } catch (error) {
      return false;
    }
  };

  const isButtonDisabled = !isValidLink(link);

  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <h1 className="text-3xl font-serif">Emotion Weather</h1>
      <div className="w-64 h-24 bg-sky flex items-center justify-center">서비스 설명 영역</div>
      <button className="bg-yellow px-4 py-2 w-64" onClick={() => navigate("/session/new")}>
        새로운 그룹 생성하기
      </button>
      <div className="flex flex-col items-center">
        <button 
          className={`bg-yellow px-4 py-2 w-64 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => navigate(link)}
          disabled={isButtonDisabled}
        >
          기존 그룹 참여하기
        </button>
        <input className="border p-2 w-64" placeholder="URL을 입력하세요." value={link} onChange={(e) => setLink(e.target.value)} />
      </div>
    </div>
  );
}

export default MainPage;
