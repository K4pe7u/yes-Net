import css from "./Promotion.module.css";
import React, { useEffect, useState, useRef } from "react";

function Promotion() {
  // const [days, setDays] = useState(null);
  // const [hours, setHours] = useState(null);
  // const [minutes, setMinutes] = useState(null);
  // const [seconds, setSeconds] = useState(null);

  // const days = document.querySelector("[data-days]");
  // const hours = document.querySelector("[data-hours]");
  // const minutes = document.querySelector("[data-minutes]");
  // const seconds = document.querySelector("[data-seconds]");

  const daysRef = useRef(null);
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);

  let timeLeft = 172800;

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    // console.log({ days, hours, minutes, seconds });

    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    if (value < 10) {
      return value.toString().padStart(2, "0");
    }
    return value;
  }

  function startCountDown() {
    // setDays(document.querySelector("[data-days]"));
    // setHours(document.querySelector("[data-hours]"));
    // setMinutes(document.querySelector("[data-minutes]"));
    // setSeconds(document.querySelector("[data-seconds]"));

    let value = convertMs(timeLeft);
    console.log(
      daysRef.current,
      hoursRef.current,
      minutesRef.current,
      secondsRef.current
    );
    daysRef.current.textContent = addLeadingZero(value.days);
    hoursRef.current.textContent = addLeadingZero(value.hours);
    minutesRef.current.textContent = addLeadingZero(value.minutes);
    secondsRef.current.textContent = addLeadingZero(value.seconds);

    let counter = setInterval(() => {
      timeLeft = timeLeft - 1000;
      value = convertMs(timeLeft);

      if (timeLeft <= 0) {
        window.alert("Done");
        return clearInterval(counter);
      }

      daysRef.current.textContent = addLeadingZero(value.days);
      hoursRef.current.textContent = addLeadingZero(value.hours);
      minutesRef.current.textContent = addLeadingZero(value.minutes);
      secondsRef.current.textContent = addLeadingZero(value.seconds);
    }, 1000);
  }

  useEffect(() => {
    startCountDown();
  }, []);
  return (
    <div className={css.container}>
      <section className={css.circles}></section>
      <section className={css.rectangles}>
        <div className={css.rectangleItem}></div>
        <div className={css.rectangleItem}></div>
        <div className={css.rectangleItem}></div>
        <div className={css.rectangleItem}>
          <button className={css.rectangleButton}>Zobacz Więcej</button>
          <article className={css.rectangleArticle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo
            blanditiis cum in quos beatae rem amet voluptatem error, fugit ea
            repellat quod veritatis reprehenderit quaerat ab eius quis
            similique?
          </article>
        </div>
        <div className={css.rectangleItem}>
          <p className={css.rectangleTitle}>Promocja</p>
          <div className={css.rectangleTimer}>
            <div className={css.field}>
              <span className={css.value} ref={daysRef}>
                00
              </span>
              <span className={css.label}>D</span>
            </div>
            <div className={css.field}>
              <span className={css.value} ref={hoursRef}>
                00
              </span>
              <span className={css.label}>H</span>
            </div>
            <div className={css.field}>
              <span className={css.value} ref={minutesRef}>
                00
              </span>
              <span className={css.label}>M</span>
            </div>
            <div className={css.field}>
              <span className={css.value} ref={secondsRef}>
                00
              </span>
              <span className={css.label}>S</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Promotion;


https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9