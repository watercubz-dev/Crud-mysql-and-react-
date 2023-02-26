import { Form, Formik } from "formik";
import { createTasksRequest } from "../api/tasks.api";

function TasksForm() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit= { async (values, actions) => {
           console.log(values);
          try {
              const response = await createTasksRequest(values);
              console.log(response);
              actions.resetForm()
          } catch {
            console.log(error);
          }
        }}
      >
     {({handleChange, handleSubmit, values, isSubmitting}) =>  (
       <Form onSubmit={handleSubmit}>
          <label>title</label>
          <input 
            type="text" 
            name="title" 
            placeholder="write a title"
            onChange={handleChange}
            value={values.title}
          />

          <label>description</label>
          <textarea
             name="description"
             row="3"
             placeholder="write a description"
             onChange={handleChange}
             value={values.description} 
        >
        </textarea>
        <button type="onSubmit" disabled={isSubmitting}>
          {isSubmitting ? "Saving... " : "Save"}
        </button>
        </Form>
     )}
      </Formik>
    </div>
  )
}

export default TasksForm