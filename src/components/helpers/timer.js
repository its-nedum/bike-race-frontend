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

            const months = '00';
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
                {/* <div>
                    <span className=""></span>
                    <h2>Countdown Timer</h2>
                    <p>it is working..</p>
                </div> */}
                <div>
                    <section>
                        <p>{timerMonths}</p>
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
