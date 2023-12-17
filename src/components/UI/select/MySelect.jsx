import styles from './MySelect.module.css';
import { nanoid } from "nanoid/non-secure";

export function MySelect({options, defaultValue, value, onChange}) {
    return(
        <div >
            <select
                className={styles.select}
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled={true} value="">
                    {defaultValue}
                </option>
                {options.map(option =>
                    <option key={nanoid()} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    )
}