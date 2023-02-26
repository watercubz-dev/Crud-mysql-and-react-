import {Route, Routes} from 'react-router-dom'
import Taskspages from './pages/Taskspages'
import TasksForm from './pages/TasksForm'
import NotFount from './pages/NotFount'
import Navbar from './components/Navbar'

function App() {
     return (
      <>
      <Navbar />
       <Routes>
         <Route path='/' element={<Taskspages/>} />
         <Route path="/new" element={<TasksForm/>} />
         <Route path='*' element={<NotFount/>} />
       </Routes>    
      </>    
     )
}

export default App