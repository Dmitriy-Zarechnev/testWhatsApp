import {bestTestApi} from '../api/bestTestApi'
import {GetMessagesArgs, MessageResponse, SendMessageArgs} from '@/services'

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
            })
        }
    }
})

export const {useSendMessageMutation, useGetMessagesQuery, useLazyGetMessagesQuery} = notificationsService
