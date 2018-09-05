import React from 'react';
// import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        content,
        onClick,
        className,
        disabled,
    } = props;

    return (
        <button
            {...{ disabled }}
            {...{ onClick }}
            {...{ className }}
        >
            {content}
        </button>
    );
};

// ContainedButtons.propTypes = {
//     content: PropTypes.element.isRequired,
//     variant: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     route: PropTypes.string,
//     onClick: PropTypes.func,
//     type: PropTypes.string,
// };

// ContainedButtons.defaultProps = {
//     route: '',
//     type: '',
//     onClick: () => {},
// };

export default Button;
