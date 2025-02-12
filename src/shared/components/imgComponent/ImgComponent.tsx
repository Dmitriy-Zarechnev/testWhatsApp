type Props = {
    webpSrcSet: string
    pngSrc: string
    alt: string
    className?: string
}

export const ImgComponent = ({webpSrcSet, className, pngSrc, alt}: Props) => {
    return (
        <picture >
            <source srcSet={webpSrcSet} type={'image/webp'}/>
            <img alt={alt} src={pngSrc} className={className}/>
        </picture>
    )
}

