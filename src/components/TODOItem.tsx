import { deleteTODO } from "../api/backend";
import { Todo } from "../types/Todo";

type Props = {
    todo: Todo;
    pullTodos: () => void;
};

function TODOItem({ todo, pullTodos }: Props) {
    return (
        <li key={todo._id} className="flex justify-between gap-x-6 py-5">
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
    );
}

export default TODOItem;
