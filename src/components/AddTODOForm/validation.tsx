import { object, string } from "yup";

export const addTodoValidations = object().shape({
    todoName: string()
        .min(5, "It must be at least 5 characters")
        .required("This is a required field"),
});
