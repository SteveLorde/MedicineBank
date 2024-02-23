import axios from "axios"

export async function CallBot(question : string) {
    return await axios.post<string>("lol", question).then(res => res.data)
}