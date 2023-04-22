"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  // on mount, get todos from localStorage or set to empty array it no todos
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localTodos = localStorage.getItem("todos")
      setTodos(localTodos ? JSON.parse(localTodos) : [])
    }
  }, [])

  // on todos change, save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    document.getElementById("todo-input").focus()
  }, [todos])

  // add new todo - spread existing todos and add new object
  function addTodo(e) {
    e.preventDefault()
    if (!input) return
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: input,
          completed: false,
        },
      ]
    })
    setInput("")
  }

  // delete todo - filter out the todo with the id
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id)
    })
  }

  // toggle completed - map over todos and update the one with the id
  function toggleCompleted(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  return (
    <>
      <h1>Todos</h1>
      <p>
        This uses localStorage to keep your todos. No data is being passed
        anywhere. it's just on your phone or computer.
      </p>
      <form onSubmit={addTodo}>
        <input
          type="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="todo-input"
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos?.length === 0 && <li>No todos yet</li>}
        {todos?.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => {
                toggleCompleted(todo.id, e.target.checked)
              }}
            />
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
