import { useParams, useNavigate } from 'react-router-dom';

function QRPage() {
  const { sessionId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <h2 className="text-2xl font-serif">Scan this QR</h2>
      <div className="w-64 h-64 bg-gray-300" />
      <div className="flex items-center space-x-2">
        <input className="border p-2 w-64" value={`https://www.emotionWeather.com/session/${sessionId}`} readOnly />
        <button className="bg-gray-200 px-2">복사</button>
      </div>
      <button className="bg-yellow-300 px-4 py-2" onClick={() => navigate(`/group/${sessionId}`)}>내 감정 날씨 입력하기</button>
    </div>
  );
}

export default QRPage;