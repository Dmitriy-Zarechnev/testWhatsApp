import imageWebp from '@/shared/assets/errorImg.webp'
import imagePng from '@/shared/assets/errorImg.png'

import {Button, ImgComponent, PATH, Typography} from '@/shared'
import {Link} from 'react-router-dom'

import s from './Error404.module.scss'

export const Error404 = () => {
    return (
        <div className={s.error}>
            <ImgComponent pngSrc={imagePng} webpSrcSet={imageWebp} alt={'404 image'}/>
            <Typography variant={'h2'}>Oooops😬 Страница не найдена!</Typography>
            <Button as={Link} to={PATH.ADD_INSTANCES}>Вернуться на главную</Button>
        </div>
    )
}
