import { Todo } from "../types/Todo";
import TODOItem from "./TODOItem";

type Props = {
    todos: Todo[];
    pullTodos: () => void;
    loading: boolean;
};

function TODOList({ todos, pullTodos, loading }: Props) {
    return (
        <div>
            <ul role="list" className="divide-y divide-gray-100">
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <TODOItem todo={todo} pullTodos={pullTodos} />
                    ))
                ) : loading ? (
                    <li>Loading...</li>
                ) : (
                    <li>No todos found</li>
                )}
            </ul>
        </div>
    );
}

export default TODOList;
