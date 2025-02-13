import {bestTestApi} from '../api/bestTestApi'
import {DeleteNotificationArgs, DeleteNotificationResponse, GetMessagesArgs, MessageResponse, SendMessageArgs} from '@/services'

const notificationsService = bestTestApi.injectEndpoints({
    endpoints: builder => {
        return {
            getMessages: builder.query<MessageResponse, GetMessagesArgs>({
                query: ({idInstance, apiTokenInstance, receiveTimeout}) => ({
                    method: 'GET',
                    params: {receiveTimeout},
                    url: `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
                })
            }),
            sendMessage: builder.mutation<void, SendMessageArgs>({
                query: ({message, phoneNumber, apiTokenInstance, idInstance}) => ({
                    method: 'POST',
                    body: {chatId: `${phoneNumber}@c.us`, message},
                    url: `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`
                })
            }),
            deleteNotification: builder.mutation<DeleteNotificationResponse, DeleteNotificationArgs>({
                query: ({receiptId, apiTokenInstance, idInstance}) => ({
                    method: 'DELETE',
                    url: `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`
                })
            })
        }
    }
})

export const {useSendMessageMutation, useDeleteNotificationMutation, useLazyGetMessagesQuery} = notificationsService
