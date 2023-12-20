import Header from "./components/Header";
import Form from "./components/AddTODOForm/Form";
import { useEffect, useState } from "react";
import TODOList from "./components/TODOList";
import { getTODOs } from "./api/backend";
import { Todo } from "./types/Todo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        pullTodos();
    }, []);

    const pullTodos = async () => {
        try {
            const asd = await getTODOs();
            setTodos([...asd.todos]);
            setLoading(false);
        } catch (error) {
            console.log("");
        }
    };

    return (
        <>
            <Header />
            <div className="mx-auto max-w-2xl">
                <Form todos={todos} setTodos={setTodos} pullTodos={pullTodos} />
                <TODOList todos={todos} pullTodos={pullTodos} loading={loading}/>
            </div>
        </>
    );
}

export default App;
