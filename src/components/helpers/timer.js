import React, {useRef, useState, useEffect} from 'react'
import '../../styles/timer.css'

const Timer = () => {
    const [timerMonths, setTimerMonths] = useState('00')
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('April 1, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            // const days = Math.round(distance / (1000 * 60 * 60 * 24));
            // const hours = Math.round(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            // const minutes = Math.round((distance % (1000 * 60 * 60)) /(1000 * 60));
            // const seconds = Math.round((distance % (1000 * 60)) / 1000);
            // const months = Math.round(days / 30.458);
            

            let seconds = Math.floor(distance / 1000) 
            let minutes = Math.floor(seconds / 60)
            let hours = Math.floor(minutes / 60)
            const totalDays = Math.floor(hours / 24)
            const months = Math.floor(totalDays / 30.458);
            hours %= 24
            minutes %= 60
            seconds %= 60

            const date = new Date();
            const time = new Date(date.getTime());
            time.setMonth(date.getMonth() + 1);
            time.setDate(0);
            const days =time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;

            if (distance < 0){
                // stop our timer
                clearInterval(interval.current)
            } else {
                // update timer
                setTimerMonths(months)
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds)
            }
        }, 1000);
    }

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            // eslint-disable-next-line
            clearInterval(interval.current)
        }
    });

    return (
        <section className="timer-container">
            <section className="timer">
                <div>
                    <section>
                        <p className="count">{timerMonths}</p>
                        <p><small>Months</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Timer
