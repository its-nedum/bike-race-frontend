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
        // Set the start date we're counting down to
        const futureDate = new Date('April 1, 2021 00:00:00').getTime();

        // Update the count down every one second
        interval = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();
            // Get the time difference between now and the future date
            const timeDifference = futureDate - now;

            // Time calculations for months, hours, minutes and seconds
            const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const months = Math.floor(totalDays / 30.458);
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            
            // Calculating the remaining number of days in the current month
            const date = new Date();
            const time = new Date(date.getTime());
            time.setMonth(date.getMonth() + 1);
            time.setDate(0);
            const days = time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
            
            // If the count down is completed clear interval else update the timer
            if (timeDifference < 0){
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
