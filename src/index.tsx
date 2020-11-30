import React from 'react';

export interface Props {
    /**
     * test
     */
    label?: string;
    type?: 'string' | 'number';
    value: string | number;
    required?: boolean;
    onChange: (val: string | number) => void;
}

export default class MyInput extends React.Component<Props> {
    static defaultProps = {
        type: 'string',
    };

    onChange = (e) => {
        const {
            type,
            onChange,
        } = this.props;

        onChange(type === 'string' ? e.target.value : +e.target.value);
    };

    render() {
        const {
            label,
            value,
        } = this.props;

        return (
            <div>
                {label ? (<label>{label}</label>) : null}
                <input type="text" value={value}
                       onChange={this.onChange}/>
            </div>
        );
    }
}
