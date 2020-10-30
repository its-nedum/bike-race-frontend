import React from 'react'
import '../../styles/timer.css'
import Countdown from 'react-countdown'

const Timer = () => {
    // This component will render when the countdown is completed
    const Completion = () => <h3 className="completed">The wait is over, let the tour begin!</h3>

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        // calculate the number of months using total days remaining
        const months = Math.floor(days / 30)

        // calculate the remaining number of days
        days = days % 30
        
        // if the countdown is completed render the completion component
        if (completed) {
            return <Completion />
        }else{
            // if the countdown is not completed render the remaining months, days, hours, minutes and seconds
            return(
                <section className="timer-container">
                    <section className="timer">
                        <div>
                            <section>
                                <p className="count">{months}</p>
                                <p><small>Months</small></p>
                            </section>
                            <span>:</span>
                            <section>
                                <p>{days}</p>
                                <p><small>Days</small></p>
                            </section>
                            <span>:</span>
                            <section>
                                <p>{hours}</p>
                                <p><small>Hours</small></p>
                            </section>
                            <span>:</span>
                            <section>
                                <p>{minutes}</p>
                                <p><small>Minutes</small></p>
                            </section>
                            <span>:</span>
                            <section>
                                <p>{seconds}</p>
                                <p><small>Seconds</small></p>
                            </section>
                        </div>
                    </section>
                </section>
            )
        }
    }

    // return the Countdown component passing the future date and the renderer method as props
    return( <Countdown date={new Date('April 1, 2021 00:00:00')} renderer={renderer} /> )
}

export default Timer
