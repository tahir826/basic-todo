'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Trash } from 'lucide-react'
export default function todo() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<string[]>([])
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl my-5 font-bold text-gray-800">Todo Application</h1>
      <div className="flex flex-col justify-center items-center w-1/2 gap-x-2.5">
      <form className="flex justify-center items-center w-full  gap-x-2.5">
      <div className="flex justify-center items-center w-full  gap-x-2.5">
        <Input className="border-2 border-black" placeholder="Enter Your Todo" onChange={(e)=>{
          setTodo(e.target.value)
        }}
        value={todo}/>
        <Button onClick={(e)=>{
          e.preventDefault()
          setTodos([...todos, todo])
          setTodo("")
        }}>Add Todo</Button>
      </div>
      </form>
      <div className="self-start my-5 w-full">
        <h1 className="font-bold text-center text-3xl">My Todos</h1>
        <hr className="border-gray-800 my-5" />
        <ul className="flex flex-col justify -center items-center w-full gap-y-2.5 py-5 list-disc border border-gray-800">
            {todos.map((myTodo, index)=>{
              return(
                <li className='flex justify-between items-center w-full gap-x-2.5 list-disc border border--gray-800' key={index}>
                  <span>{index+1} - {myTodo}</span>
                  <Button><Trash /></Button>
                </li>
              )
            })}
        </ul>
      </div>
      </div>
    </main>
  )
}
