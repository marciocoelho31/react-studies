import React from "react";
import BotaoStyle from './Button.module.scss';

class Botao extends React.Component<{children: React.ReactNode}> {
    render() {
        return (
            <button className={BotaoStyle.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Botao;