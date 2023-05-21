import { Section } from "./SectionEl/Section ";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { StatisticElement} from "./Statistics/Statistics";
import {  useState  } from "react";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good * 100) / countTotalFeedback())
      : 0;
  };

  const onLeaveFeedback = el => {
    switch (el) {
      case 'good':
        return setGood((prevGood) => prevGood + 1);
      case 'neutral':
        return setNeutral((prevNeutral) => prevNeutral + 1);
      case 'bad':
        return setBad((prevBad) => prevBad + 1);
        
      default:
        break;
    }
  }

  return (
    <>
       <Section title="Please leave feadback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <StatisticElement
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
       
    </>
  );
};



