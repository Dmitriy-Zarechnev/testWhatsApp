import {ImgComponent, Typography} from '@/shared'
import imageWebp from '@/shared/assets/avatarImg.webp'
import imagePng from '@/shared/assets/avatarImg.jpg'
import {useParams} from 'react-router-dom'

import s from './UserHeader.module.scss'

export const UserHeader = () => {
    const { phoneNumber } = useParams()

    return (
        <div className={s.wrapper}>
            <ImgComponent alt={'User Avatar'} pngSrc={imagePng} webpSrcSet={imageWebp} className={s.img}/>
            <Typography variant={'h3'} className={s.text}>{phoneNumber}</Typography>
        </div>
    )
}

