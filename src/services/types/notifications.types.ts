type InstanceDataResponse = {
    idInstance: number,
    wid: string,
    typeInstance: string
}

type MessageResponseBody = {
    typeWebhook: string,
    chatId: string,
    instanceData: InstanceDataResponse,
    timestamp: string,
    idMessage: string,
    status: string,
    sendByApi: boolean
}

export type MessageResponse = {
    receiptId: number,
    body: MessageResponseBody
}

export type DeleteNotificationResponse = {
    result: boolean
}


export type BaseArgs = {
    idInstance: string
    apiTokenInstance: string
}

export type GetMessagesArgs = BaseArgs & {
    receiveTimeout?: number
}

export type SendMessageArgs = BaseArgs & {
    phoneNumber: string
    message: string
    linkPreview?: boolean
    quotedMessageId?: string
}

export type DeleteNotificationArgs = BaseArgs & { receiptId: number }

//
// type InstanceDataResponse = {
//     idInstance: number,
//     wid: string,
//     typeInstance: string
// }
//
// type MessageDataResponse = {
//     typeMessage: string;
//     textMessageData: {
//         textMessage: string;
//     };
// }
//
// type SenderDataResponse = {
//     chatId: string;
//     chatName: string;
//     sender: string;
//     senderName: string;
//     senderContactName: string;
// }
//
// type MessageResponseBody = {
//     typeWebhook: string,
//     chatId: string,
//     instanceData: InstanceDataResponse,
//     messageData: MessageDataResponse
//     senderData: SenderDataResponse
//     timestamp: number;
// }