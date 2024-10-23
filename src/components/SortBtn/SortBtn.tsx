import { FC } from 'react'
import { SortButton } from '../../types/userTypes'

interface SortKeyProps { sortKey: SortButton }

const SortBtn:FC<SortKeyProps> = ({ sortKey }) => {
    return (
        <button>
            <span>{sortKey}</span>
        </button>
    )
}
 
export default SortBtn