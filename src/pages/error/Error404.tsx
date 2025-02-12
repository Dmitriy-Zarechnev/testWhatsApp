import imageWebp from '@/shared/assets/errorImg.webp'
import imagePng from '@/shared/assets/errorImg.png'

import s from './Error404.module.scss'
import {Button, PATH, Typography} from '@/shared'
import {Link} from 'react-router-dom'

export const Error404 = () => {
    return (
        <div className={s.error}>
            <picture>
                <source srcSet={imageWebp} type={'image/webp'}/>
                <img alt={'404 image'} src={imagePng}/>
            </picture>
            <Typography variant={'h2'}>Oooops😬 Страница не найдена!</Typography>
            <Button as={Link} to={PATH.ADD_INSTANCES}>Вернуться на главную</Button>
        </div>
    )
}
