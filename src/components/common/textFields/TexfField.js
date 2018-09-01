import React from 'react';
// import PropTypes from 'prop-types';

const TextField = (props) => {
    const {
        className,
        label,
        required,
        // errorMessages,
        name,
        onBlur,
        placeholder,
        validators,
        value,
        onChange,
    } = props;

    return (
        <div className="row">
            <div className="col-xs-12">
                <input
                    id="name-simple"
                    {...{ label }}
                    {...{ required }}
                    {...{ className }}
                    {...{ onChange }}
                    {...{ onBlur }}
                    {...{ name }}
                    {...{ placeholder }}
                    {...{ value }}
                    {...{ validators }}
                    // {...{ errorMessages }}
                />
            </div>
        </div>
    );
};

// TextField.propTypes = {
//     className: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     validators: PropTypes.arrayOf(PropTypes.string),
//     value: PropTypes.string,
//     required: PropTypes.bool.isRequired,
//     onChange: PropTypes.func,
//     onBlur: PropTypes.func,
//     errorMessages: PropTypes.string.isRequired,
// };

// TextField.defaultProps = {
//     value: '',
//     validators: [''],
//     onChange: () => {},
//     onBlur: () => {},
// };

export default TextField;
