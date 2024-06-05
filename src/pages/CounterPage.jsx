import { useSelector, useDispatch } from "react-redux";

import { incrementCounter, decrementCounter } from "../store/counterSlice";

const CounterPage = () => {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="w-full flex flex-col justify-center gap-3">
            <span className="text-2xl col-span-full">Счетчик</span>
            <div className="w-full flex justify-center items-center gap-4">
                <button
                    className="w-8 bg-slate-300 px-2 py-1 rounded-md"
                    onClick={() => dispatch(decrementCounter())}
                >
                    -
                </button>
                <span>{counter}</span>
                <button
                    className="w-8 bg-slate-300 px-2 py-1 rounded-md"
                    onClick={() => dispatch(incrementCounter())}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CounterPage;
