import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={css.optionsButtonsBox}>
      <button
        className={css.optionsButton}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionsButton}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionsButton}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.optionsButton}
          type="button"
          onClick={() => updateFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
