import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedbackBox}>
      <p>
        <b>Good: </b>
        {feedback.good}
      </p>
      <p>
        <b>Neutral: </b>
        {feedback.neutral}
      </p>
      <p>
        <b>Bad: </b>
        {feedback.bad}
      </p>
      <p>
        <b>Total: </b>
        {totalFeedback}
      </p>
      <p>
        <b>Positive: </b>
        {positiveFeedback}%
      </p>
    </div>
  );
};
export default Feedback;
