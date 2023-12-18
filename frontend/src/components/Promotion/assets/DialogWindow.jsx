import css from "./DialogWindow.module.css";

function DialogWindow() {
  return (
    <div className={css.mainOverlay}>
      <div className={css.window}></div>
    </div>
  );
}

export default DialogWindow;
