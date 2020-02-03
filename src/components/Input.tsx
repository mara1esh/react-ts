import React, { useState, useRef, useEffect } from 'react';

export const Input = () => {
    const [name, setName] = useState<string>('')
    const ref = useRef<HTMLInputElement | null>(null!) // ! -> read only

    useEffect(() => {
        ref.current?.focus()
    }, [])

    console.log('ref', ref.current?.value)

    return <input ref={ref} value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
}