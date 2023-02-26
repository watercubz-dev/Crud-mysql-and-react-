import { useEffect, useState } from "react"
import { getTaskRequest } from "../api/tasks.api"
import TasksCard  from "../pages/TasksCard"

function Taskspages() {

  const [tasks, setTasks] = useState([]) 
 
  useEffect(() => {

   async function loadTasks() {
     const response = await getTaskRequest()
     setTasks(response.data);
   }
   loadTasks()
  }, [])

  return (
    <div>
      <h1>
         Tasks
        </h1>
        {
          tasks.map(task => (
           <TasksCard task={task} key={task.id} />
          ))
        }

    </div>
  )
}

export default Taskspages