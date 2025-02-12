import imageWebp from '@/shared/assets/avatarImg.webp'
import imagePng from '@/shared/assets/avatarImg.jpg'

import {DefaultMessage} from '../defaultMessage/DefaultMessage'

import {ImgComponent} from '@/shared'

import s from './FriendMessage.module.scss'

type Props = {
    avatar?: string
    message: string
}

export const FriendMessage = ({avatar, message}: Props) => {
    return (
        <div className={s.wrapper}>
            <ImgComponent alt={'User Avatar'} pngSrc={avatar || imagePng} webpSrcSet={imageWebp} className={s.img}/>
            <DefaultMessage message={message}/>
        </div>
    )
}
