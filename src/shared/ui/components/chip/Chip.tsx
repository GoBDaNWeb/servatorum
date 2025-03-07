import { FC } from 'react'
import s from './chip.module.scss'

interface IChip {
    name: string
}

export const Chip: FC<IChip> = ({name}) => {
    return <div className={s.chip}>
       
        <input type="radio" name={name} />
    </div>
}