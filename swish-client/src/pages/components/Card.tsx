
import Image, { ImageProps } from "next/image";

export type CardProps = Omit<ImageProps,"width"|"height"> & {hidden?:boolean}

const DEF_HEIGHT = 200
const DEF_WIDTH = 50

export const Card = ({alt,hidden,...props}:CardProps) => {
const {src,...propsWithoutSrc} = props
if(hidden)
    return <Image width={DEF_WIDTH} height={DEF_HEIGHT} src={'/assets/cards/back.svg'} alt={alt||"Card"} {...propsWithoutSrc} />
    return <Image width={DEF_WIDTH} height={DEF_HEIGHT} alt={alt||"Card"} {...props} />
}