import {useState} from "react";

function App() {
    const [num, setNum] = useState(0)
    return <div>
        <button onClick={() => setNum(num + 1)}>+1</button>
        <button onClick={() => setNum(num - 1)}>-1</button>
        <hr/>
        {num}
    </div>
}

export {App}