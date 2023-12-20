import { object, string } from "yup";

export const addTodoValidations = object().shape({
    todoName: string().required("This is a required field"),
});