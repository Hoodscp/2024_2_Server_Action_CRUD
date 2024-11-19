'use client'
import { updateTopic } from '@/actions/topicActions'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface EditTopicFormProps {
  id: string
  initialTitle: string
  initailDescription: string
}

export default function EditTopicForm({
  id,
  initialTitle,
  initailDescription,
}: EditTopicFormProps) {
  const [title, setNewTitle] = useState(initialTitle)
  const [description, setNewDescription] = useState(initailDescription)
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await updateTopic(id, title, description)
      router.push('/')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <h1 className="text-2xl">Edit Topic</h1>
      <input
        type="text"
        className="border border-sky-800 p-4"
        placeholder="Topic Title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTitle(e.target.value)
        }
        value={title}
      />
      <textarea
        className="border border-sky-800 p-4 h-32"
        placeholder="Topic Description"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setNewDescription(e.target.value)
        }
        value={description}
      />
      <button
        className="bg-sky-700 text-sky-400 font-bold px-6 py-3 w-fit rounded-md hover:bg-sky-900"
        type="submit"
      >
        Edit Topic
      </button>
    </form>
  )
}
