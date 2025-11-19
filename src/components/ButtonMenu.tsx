import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { useUI } from '../hooks/useUI';

export const ButtonMenu: React.FC = () => {

    const { onSetMenuVisibility } = useUI()

    return (
        <button onClick={() => onSetMenuVisibility(true)} className='button button--menu'>
            <IoMenuOutline size={20} />
        </button>
    )
}
