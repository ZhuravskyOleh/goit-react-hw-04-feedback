import { Section } from "./SectionEl/Section ";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { StatisticElement} from "./Statistics/Statistics";
import React, { Component } from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


   countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  onLeaveFeedback = el => this.setState(prevState => ({
    ...prevState,
    [el]: prevState[el] + 1,
  }));



  render() {
    return (
      <>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <StatisticElement
              {...this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
       
      </>
    )
  };
};


