import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  const [link, setLink] = useState('');

  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <h1 className="text-3xl font-serif">Emotion Weather</h1>
      <div className="w-64 h-24 bg-sky flex items-center justify-center">서비스 설명 영역</div>
      <button className="bg-yellow px-4 py-2" onClick={() => navigate('/session/new')}>새로운 그룹 생성하기</button>
      <div className="flex flex-col items-center">
        <input className="border p-2" placeholder="URL" value={link} onChange={(e) => setLink(e.target.value)} />
        <button className="bg-yellow px-4 py-2 mt-2" onClick={() => navigate(link)}>기존 그룹 참여하기</button>
      </div>
    </div>
  );
}

export default MainPage;