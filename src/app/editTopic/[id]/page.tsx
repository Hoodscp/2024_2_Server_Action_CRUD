import { getTopic } from '@/actions/topicActions'
import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

export default async function EditTopic({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  const { topic } = await getTopic(params.id)
  const { title, description } = topic
  return <EditTopicForm id={id} title={title} description={description} />
}
