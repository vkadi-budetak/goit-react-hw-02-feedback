import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button onClick={() => onLeaveFeedback('good')}>good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>bad</button>
    </div>
  );
}
