import { Router} from "express";
import {
    getTasks,
    getTaks,
    createTasks,
    updateTasks,
    delateTasks
} from "../controllers/task.controllers.js"

const router = Router();

router.get('/tasks', getTasks)

router.get('/tasks/:id', getTaks)

router.post('/tasks', createTasks)

router.put('/tasks/:id', updateTasks)

router.delete('/tasks/:id', delateTasks   )

export default router;