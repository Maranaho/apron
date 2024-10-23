import { FC } from 'react'

/**
 * TextInput Component
 *
 * A reusable input field with an optional label.
 *
 * Props:
 * - `id` (string): Unique identifier for the input element.
 * - `label` (string?): Optional label text.
 * - `onBlur` (function): Callback triggered when the input loses focus.
 *
 * Usage:
 * <TextInput id="name" label="Name" onBlur={handleBlur} />
 */
interface TextInputProps {
    id: string;
    label?: string;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void; 
  }


const TextInput:FC<TextInputProps> = ({
    id,
    label,
    onBlur
}) => {

    return (
        <div>
            {label&&<label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type="text"
                onBlur={onBlur}
            />
        </div>
    )
}

export default TextInput