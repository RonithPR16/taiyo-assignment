import React from 'react'

type Props = {
    label: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void
    type?: 'text'|'number'
}

function CustomInput({ label, placeholder, value,type='text', onChange }: Props) {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label.toLowerCase()}>
                    {label}
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={label.toLowerCase()} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
            </div>
        </>
    )
}

export default CustomInput