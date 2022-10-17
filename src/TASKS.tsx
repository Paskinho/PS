import React from "react";

type TasksPropsType = {
    title: string,
    tasks: Array<ObjectType>
}

    type ObjectType = {
        taskId: number,
        title: string,
        isDone: boolean
}

