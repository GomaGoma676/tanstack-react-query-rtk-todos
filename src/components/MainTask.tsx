import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { TaskListMemo } from './TaskList'
import { TaskEditMemo } from './TaskEdit'

export const MainTask: FC = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  console.log('rendered MainTask')
  return (
    <>
      <input
        className="mb-3 border border-gray-300 px-3 py-2"
        placeholder="dummy text ?"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p className="mb-10 text-xl font-bold">Tasks</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskListMemo />
        <TaskEditMemo />
      </div>
      <ChevronDoubleRightIcon
        onClick={() => navigate('/tags')}
        className="mt-2 h-5 w-5 cursor-pointer text-blue-500"
      />
      <p>Tag page</p>
    </>
  )
}
