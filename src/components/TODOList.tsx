import { deleteTODO } from "../api/backend";
import { Todo } from "../types/Todo";

type Props = {
    todos: Todo[];
    pullTodos: () => void;
};

function TODOList({ todos, pullTodos }: Props) {
    return (
        <div>
            <ul role="list" className="divide-y divide-gray-100">
                {todos.map((todo, i) => (
                    <li key={i} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {todo.name}
                                </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-red-500">
                                <button
                                    onClick={async () => {
                                        await deleteTODO(todo._id);
                                        pullTodos();
                                    }}
                                >
                                    Delete
                                </button>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TODOList;
