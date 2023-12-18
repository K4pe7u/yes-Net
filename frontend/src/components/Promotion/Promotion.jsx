import css from "./Promotion.module.css";
import React, { useEffect, useRef } from "react";

function Promotion() {
  const daysRef = useRef(null);
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);

  const startDate = new Date();
  const endDate = new Date(2024, 1, 1);

  let timeLeft = endDate - startDate;

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    if (value < 10) {
      return value.toString().padStart(2, "0");
    }
    return value;
  }

  function startCountDown() {
    let value = convertMs(timeLeft);

    daysRef.current.textContent = addLeadingZero(value.days);
    hoursRef.current.textContent = addLeadingZero(value.hours);
    minutesRef.current.textContent = addLeadingZero(value.minutes);
    secondsRef.current.textContent = addLeadingZero(value.seconds);

    let counter = setInterval(() => {
      timeLeft = timeLeft - 1000;
      value = convertMs(timeLeft);

      if (timeLeft <= 0) {
        console.log("Potato");
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
    <section className={css.allIn}>
      <div className={css.bGcontainer}>
        <div className={css.streetLamps}>
          <div className={css.streetLamp}></div>
          <div className={css.streetLamp}></div>
          <div className={css.streetLamp}></div>
          <div className={css.streetLamp}></div>
          <div className={css.streetLamp}></div>
        </div>

        <div className={css.carsIncoming}>
          <div className={css.car}></div>
          <div className={css.car}></div>
          <div className={css.car}></div>
          <span className={css.reflect}></span>
          <span className={css.reflect}></span>
          <span className={css.reflect}></span>
        </div>

        <div className={css.carsGoing}>
          <div className={css.car}></div>
          <span className={css.reflect}></span>
        </div>

        <div className={css.carsGoingFlash}>
          <div className={css.car}></div>
          <span className={css.reflect}></span>
        </div>

        <div className={css.cityLights}>
          <div className={css.light}></div>
          <div className={css.light}></div>
          <div className={css.light}></div>
          <div className={css.light}></div>
          <div className={css.light}></div>
        </div>
      </div>
      <div className={css.container}>
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
        <button className={css.promotionBtn}>More</button>
      </div>
    </section>
  );
}

export default Promotion;
