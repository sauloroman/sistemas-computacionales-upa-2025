import React, { useEffect } from 'react'
import { useUI } from '../hooks/useUI'

export const Alert: React.FC = () => {
    const { alert, onCloseAlert } = useUI()

    if (!alert) return null

    useEffect(() => {
        if (alert.isVisible) {
            const timer = setTimeout(() => {
                onCloseAlert()
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [alert.isVisible])

    return (
        <div
            className={`
                alert
                alert--${alert.type}
                ${alert.isVisible ? 'alert--visible' : ''}
            `}
        >
            <p className="alert__message">{alert.message}</p>
        </div>
    )
}
