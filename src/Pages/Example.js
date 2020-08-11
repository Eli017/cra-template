import React, {useState} from "react";
import ExampleComponent from "../Components/ExampleComponent";

const Example = () => {
    const [count, setCount] = useState(0);

    return (
        <section>
            <h1>The Count is: {count}</h1>
            <ExampleComponent count={count} setCount={setCount} />
        </section>
    );
};

export default Example;