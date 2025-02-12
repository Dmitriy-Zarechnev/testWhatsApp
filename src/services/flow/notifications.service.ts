import {bestTestApi} from '../api/bestTestApi'
import {GetNotificationsArgs} from '@/services'

const notificationsService = bestTestApi.injectEndpoints({
    endpoints: builder => {
        return {
            getNotifications: builder.query<void, GetNotificationsArgs>({
                query: ({idInstance, apiTokenInstance}) => ({
                    method: 'GET',
                    url: `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
                })
            })
        }
    }
})

export const {useGetNotificationsQuery} = notificationsService