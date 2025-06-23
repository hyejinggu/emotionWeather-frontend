import { useParams } from 'react-router-dom';

function GroupPage() {
  const { groupId } = useParams();

  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-2xl font-serif">GROUP NAME</h2>
        <button className="text-sm underline">edit</button>
      </div>
      <button className="bg-yellow-300 px-4 py-2 w-full">우리 그룹 결과보기</button>
      <button className="bg-yellow-300 px-4 py-2 w-full">내 감정 날씨 입력하기</button>
    </div>
  );
}

export default GroupPage;