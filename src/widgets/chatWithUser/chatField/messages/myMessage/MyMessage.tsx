import {DefaultMessage} from '../defaultMessage/DefaultMessage'

type Props = {
    isRead?: boolean
    message: string
}

export const MyMessage = ({isRead, message}: Props) => {
    return (
        <DefaultMessage
            isMine
            isRead={isRead}
            message={message}
            style={{marginBottom: '24px'}}
        />
    )
}
