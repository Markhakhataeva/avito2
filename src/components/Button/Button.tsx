import React, {FC} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

interface ButtonProps {
    alt?: string | undefined,
    icon?: string | undefined,
    text?: string | number,
    color?: string,
    width?: string,
    handleSubmit?: () => void,
    padding?: string,
    fontSize?: string,
    onSubmit?: () => void
}

const ButtonStyled = styled.button`
    background-color: #011765;
    width: ${(props) => props.width};
    border-radius: 10px;
    padding: ${(props) => props.theme.padding || '10px'};
    align-items: center;
    text-align: ${(props) => props.align || "center"};
    border: none;
    color: ${(props) => props.color};
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: ${(props) => props.fontSize};

`


export const Button: FC<ButtonProps> = (props: ButtonProps): React.JSX.Element => {
    return (
        <ButtonStyled {...props} onClick={props.handleSubmit}>
            <img src={props.icon} alt={props.alt}/>
            <span className="text">{props.text}</span>
        </ButtonStyled>
    );
}


Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onSubmit: PropTypes.func
}