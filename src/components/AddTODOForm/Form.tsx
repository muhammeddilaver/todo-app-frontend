import { useFormik } from "formik";
import { addTodoValidations } from "./validation";
import { addTODO } from "../../api/backend";
import { Todo } from "../../types/Todo";

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    pullTodos: () => void;
};

function Form({ todos, setTodos, pullTodos }: Props) {
    const formik = useFormik({
        initialValues: {
            todoName: "",
        },
        onSubmit: async (values) => {
            try {
                await addTODO(values.todoName);
                setTodos([...todos, values.todoName]);
                pullTodos();
                formik.resetForm();
            } catch (error) {
                console.error("Error adding TODO:", error);
                formik.setErrors({
                    todoName: "An error occurred while adding TODO",
                });
            } finally {
                formik.setSubmitting(false);
            }
        },
        validationSchema: addTodoValidations,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-3">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                New TODO
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name={`todoName`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.todoName}
                                    /* isValid={
                                        formik.touched.todoName && !formik.errors.todoName
                                    }
                                    isInvalid={
                                        formik.touched.todoName && formik.errors.todoName
                                    } */
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-8 flex items-center gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                className="text-sm font-semibold leading-6 text-gray-900"
                                onClick={() => formik.resetForm()}
                            >
                                Clean
                            </button>
                        </div>
                    </div>
                    {formik.touched.todoName && formik.errors.todoName && (
                        <label className="text-red-500">
                            {formik.errors.todoName}
                        </label>
                    )}
                </div>
            </div>
        </form>
    );
}

export default Form;
