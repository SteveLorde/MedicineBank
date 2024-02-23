import {useState} from "react";

export default function InputBar() {

    const [question, setQuestion] = useState<string>("")

    let InputQuestion = (e : any) => {
        setQuestion(e.target.value)
    }

    return <>
        <input className={"m-2 p-4 rounded-3xl"} type={"text"} onChange={InputQuestion} />
    </>

}