import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core';

export default function Input({ name }) {

    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error, ...rest } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <div>
            <input ref={inputRef} />

            {error && <span class="msg-error" style={{ color: '#f00' }}>{error}</span>}
        </div>
    )
}





