import ClockStyle from './clock.module.scss';

export default function Clock() {
    return (
        <>
            <span className={ClockStyle.relogioNumero}>0</span>
            <span className={ClockStyle.relogioNumero}>0</span>
            <span className={ClockStyle.relogioDivisao}>:</span>
            <span className={ClockStyle.relogioNumero}>0</span>
            <span className={ClockStyle.relogioNumero}>0</span>
        </>
    )
}