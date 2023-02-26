import { pool } from "../db.js";

export const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM list_tareas ORDER BY createAt  ASC"
          );
          res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
};

export const  getTaks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
    try {
        const { title, description } = req.body;
        const [result] = await pool.query(
          "INSERT INTO list_tareas(title, description) VALUES (?, ?)",
          [title, description]
        );
        res.json({
          id: result.insertId,
          title,
          description,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
};
export const updateTasks = async (req, res) => {
   try {
    const result = await pool.query("UPDATE list_tareas SET ? WHERE id = ?", [
        req.body,
        req.params.id,
      ]);
      res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
   }
export const delateTasks = async (req, res) => {
   try {
    const [result] = await pool.query("DELETE * FROM  list_tareas WHERE id = 2 ", [
        req.params.id,
      ]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "tasks not found" });
      }
      return res.status(204);
   }  catch (error) {
    return res.status(500).json({ message: error.message})
}
};
