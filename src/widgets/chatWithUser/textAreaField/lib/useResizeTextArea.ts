import {useEffect, useRef} from 'react'
import {INITIAL_TEXT_FIELD_HEIGHT, MAX_TEXT_FIELD_HEIGHT} from '@/shared'


export const useResizeTextArea = (
    messageField: string
) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const adjustHeight = () => {
        const textarea = textAreaRef.current

        if (textarea) {
            textarea.style.height = `${INITIAL_TEXT_FIELD_HEIGHT}px`
            const newHeight = Math.min(textarea.scrollHeight, MAX_TEXT_FIELD_HEIGHT)

            textarea.style.height = `${newHeight}px`
        }
    }

    useEffect(() => {
        adjustHeight()
        window.addEventListener('resize', adjustHeight)

        return () => window.removeEventListener('resize', adjustHeight)

    }, [messageField])

    return {adjustHeight, textAreaRef}
}
