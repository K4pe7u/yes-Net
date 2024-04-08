import css from "./Promotion.module.css";
import { useEffect, useState, useRef } from "react";
import DialogWindow from "./assets/DialogWindow";

function Promotion() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const daysRef = useRef(null);
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);

  const startDate = new Date();
  const endDate = new Date(2024, 5, 31);

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

    if (daysRef.current)
      daysRef.current.textContent = addLeadingZero(value.days);
    if (hoursRef.current)
      hoursRef.current.textContent = addLeadingZero(value.hours);
    if (minutesRef.current)
      minutesRef.current.textContent = addLeadingZero(value.minutes);
    if (secondsRef.current)
      secondsRef.current.textContent = addLeadingZero(value.seconds);

    let counter = setInterval(() => {
      timeLeft = timeLeft - 1000;
      value = convertMs(timeLeft);

      if (timeLeft <= 0) {
        console.log("Potato");
        return clearInterval(counter);
      }

      if (daysRef.current)
        daysRef.current.textContent = addLeadingZero(value.days);
      if (hoursRef.current)
        hoursRef.current.textContent = addLeadingZero(value.hours);
      if (minutesRef.current)
        minutesRef.current.textContent = addLeadingZero(value.minutes);
      if (secondsRef.current)
        secondsRef.current.textContent = addLeadingZero(value.seconds);
    }, 1000);
  }

  function changeStateOfWindow() {
    setIsMoreOpen(!isMoreOpen);
  }

  function handleClose() {
    setIsMoreOpen(!isMoreOpen);
  }

  useEffect(() => {
    startCountDown();
  }, []);
  return (
    <>
      <section className={css.allIn}>
        <div className={css.container}>
          <h2 className={css.promotionTitle}>Ekspozycja Eventowa</h2>
          <div className={css.rectangleTimer}>
            <div className={css.field}>
              <span className={css.valueTime} ref={daysRef}>
                00
              </span>
              <span className={css.labelTime}>days</span>
            </div>
            <div className={css.field}>
              <span className={css.valueTime} ref={hoursRef}>
                00
              </span>
              <span className={css.labelTime}>hours</span>
            </div>
            <div className={css.field}>
              <span className={css.valueTime} ref={minutesRef}>
                00
              </span>
              <span className={css.labelTime}>mins</span>
            </div>
            <div className={css.field}>
              <span className={css.valueTime} ref={secondsRef}>
                00
              </span>
              <span className={css.labelTime}>secs</span>
            </div>
          </div>
          <div className={css.infoBtn}>
            <span className={css.descriptionBtn}>
              Niech kieruje Tobą ciekawość
            </span>

            <button className={css.promotionBtn} onClick={changeStateOfWindow}>
              Zajrzyj tutaj
            </button>
          </div>
        </div>
      </section>
      {/* <DialogWindow isOpen={isMoreOpen} closeFunc={handleClose}></DialogWindow> */}
    </>
  );
}

export default Promotion;
