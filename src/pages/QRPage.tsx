import { useLocation, useNavigate } from "react-router-dom";

function QRPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { sessionUrl, qrImage, groupId } = location.state || {};

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sessionUrl);
    alert("url 복사 완료");
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <h2 className="text-2xl font-serif">Scan this QR</h2>
      <div className="w-64 h-64">
        <img src={`data:image/png;base64, ${qrImage}`} alt="QR" />
      </div>
      <div className="flex items-center">
        <input className="border p-2 w-64" value={sessionUrl} readOnly />
        <button className="bg-gray-300 p-2" onClick={handleCopy}>
          URL 복사
        </button>
      </div>
      <button className="bg-yellow px-4 py-2 w-64" onClick={() => navigate(`/group/${groupId}`)}>
        내 감정 날씨 입력하기
      </button>
    </div>
  );
}

export default QRPage;
