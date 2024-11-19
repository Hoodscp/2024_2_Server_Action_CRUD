import { getTopic } from '@/actions/topicActions'
import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

export default async function EditTopic({
  params,
}: {
  params: { id: string }
}) {
  const { topic } = await getTopic(params.id)
  return (
    <EditTopicForm
      id={topic._id}
      initialTitle={topic.title}
      initialDescription={topic.description}
    />
  )
}
