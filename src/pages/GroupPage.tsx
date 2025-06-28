import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface GroupInfo {
  qr_group_id: string;
  qr_group_name: string;
  qr_image_base64: string;
}

function GroupPage() {
  const { groupId } = useParams<{ groupId: string }>();
  const [groupInfo, setGroupInfo] = useState<GroupInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroupInfo = async () => {
      try {
        const response = await axios.get(`/qr/group-info`, {
          params: { groupId },
        });
        setGroupInfo(response.data);
      } catch (err: any) {
        console.error(err);
        setError("그룹 정보를 불러올 수 없습니다.");
      }
    };

    if (groupId) {
      fetchGroupInfo();
    }
  }, [groupId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!groupInfo) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-2xl font-serif">GROUP NAME: {groupInfo.qr_group_name}</h2>
        <button className="text-sm underline">edit</button>
      </div>
      <button className="bg-yellow px-4 py-2 w-full">우리 그룹 결과보기</button>
      <button className="bg-yellow px-4 py-2 w-full">내 감정 날씨 입력하기</button>
    </div>
  );
}

export default GroupPage;
