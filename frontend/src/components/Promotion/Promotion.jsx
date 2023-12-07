import css from "./Promotion.module.css";

function Promotion() {
  return (
    <div className={css.container}>
      <section className={css.circles}>
        {/* <svg className={css.circleItem}>
          <use href={`${icons}#circle_with_a_recess`}></use>
        </svg>
        <div className={css.circleItem}></div>
        <div className={css.circleItem}></div>
        <div className={css.circleItem}></div>
        <div className={css.circleItem}></div> */}
      </section>
      <section className={css.rectangles}>
        <div className={css.rectangleItem}></div>
        <div className={css.rectangleItem}></div>
        <div className={css.rectangleItem}></div>
        <div className={css.rectangleItem}></div>
        <div className={css.rectangleItem}></div>
        <div className={css.rectangleItem}></div>
      </section>
    </div>
  );
}

export default Promotion;
