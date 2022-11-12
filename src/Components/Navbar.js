import React from 'react'

export default function Navbar({ children }) {
    return (
    <nav className="py-4 px-6 text-base">
        <ul className="flex space-x-3">
            {children}
        </ul>
    </nav>
    )
}