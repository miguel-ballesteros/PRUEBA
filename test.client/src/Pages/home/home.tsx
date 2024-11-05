import { useEffect } from "react";
import {TaskRequest} from "./usuariosRequest"

export default function Home(){
    useEffect(() => {
        TaskRequest.InfoTask({}
        )
        .then((resp) => {
            console.log(resp)
        })
    }, []);
    return (
        <div>holii</div>
    )
}