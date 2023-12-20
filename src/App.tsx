import Header from "./components/Header";
import Form from "./components/AddTODOForm/Form";
import { useEffect, useState } from "react";
import TODOList from "./components/TODOList";
import { getTODOs } from "./api/backend";

function App() {
    const [todos, setTodos] = useState<string[]>([]);
    useEffect(() => {
        pullTodos();
    }, []);

    const pullTodos = async () => {
        try {
            const asd = await getTODOs();
            setTodos([...asd.todos]);
        } catch (error) {
            console.log("");
        }
    };

    return (
        <>
            <Header />
            <div className="mx-auto max-w-2xl">
                <Form todos={todos} setTodos={setTodos} pullTodos={pullTodos} />
                <TODOList todos={todos} pullTodos={pullTodos}/>
            </div>
        </>
    );
}

export default App;
