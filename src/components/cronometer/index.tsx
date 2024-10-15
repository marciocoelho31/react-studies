import Botao from "../buttons";
import Clock from "./clock";
import CronometerStyle from './cronometer.module.scss';

export default function Cronometer() {
    return (
        <div className={CronometerStyle.cronometro}>
            <p className={CronometerStyle.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={CronometerStyle.relogioWrapper}>
                <Clock />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}
