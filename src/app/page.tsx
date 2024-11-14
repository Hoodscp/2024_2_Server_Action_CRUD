import { getAllTopics } from '@/actions/topicAction'
import TopicsList from '@/components/Topiclist'

export default async function Home() {
  const { topics } = await getAllTopics()
  return (
    <div>
      <h1 className="ml-2 text-3xl font-bold">Server_Action CRUD</h1>
      <p className="mb-4 ml-2">
        이 웹사이트는 세종글꽃체를 사용하여 작성되었습니다.
      </p>
      <TopicsList topics={topics} />
    </div>
  )
}
