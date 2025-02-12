import imageWebp from '@/shared/assets/errorImg.webp'
import imagePng from '@/shared/assets/errorImg.png'

import s from './Error404.module.scss'

export const Error404 = () => {
    return (
        <div className={s.error}>
            <picture>
                <source srcSet={imageWebp} type={'image/webp'}/>
                <img alt={'404 image'} src={imagePng}/>
            </picture>
        </div>
    )
}
