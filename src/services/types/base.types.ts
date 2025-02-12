export type InstanceInfo = {
    idInstance: string
    apiTokenInstance: string
}

export  type Message = {
    message: string
}

export type MessagesState = {
    sendMessage: Array<Message & {
        isMine: boolean
    }>
    responseMessage: Array<Message>
}
