import {toast} from 'react-toastify'

import {
    BaseQueryApi,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryReturnValue
} from '@reduxjs/toolkit/query'

export const handleError = (
    api: BaseQueryApi,
    result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
) => {
    if (result.error) {
        switch (result.error.status) {
            case 'FETCH_ERROR':
            case 'PARSING_ERROR':
            case 'CUSTOM_ERROR':
                toast.error(result.error.error)
                return api

            case 403:
                toast.error('403 Forbidden Error. Check API-KEY')
                break

            case 400:
            case 500:
                toast.error(JSON.stringify(result.error.data))
                break

            default:
                toast.error(JSON.stringify(result.error))
                break
        }

    }
}




