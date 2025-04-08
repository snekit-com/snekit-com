// Tech Fluency Questionnaire
// This file implements a React-based questionnaire to assess an organisation's tech fluency

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TechFluencyQuestionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({});
  
  const questions = [
    {
      question: "How confident are your team members in discussing technical requirements with IT staff?",
      options: [
        { text: "Not at all confident", score: 0 },
        { text: "Slightly confident", score: 2 },
        { text: "Moderately confident", score: 4 },
        { text: "Very confident", score: 6 },
        { text: "Extremely confident", score: 7 }
      ]
    },
    {
      question: "How well does your team understand your organisation's technology ecosystem?",
      options: [
        { text: "No understanding", score: 0 },
        { text: "Basic understanding", score: 2 },
        { text: "Moderate understanding", score: 4 },
        { text: "Strong understanding", score: 6 },
        { text: "Comprehensive understanding", score: 7 }
      ]
    },
    {
      question: "How effectively does your team use your current collaboration tools?",
      options: [
        { text: "Not effectively", score: 0 },
        { text: "Somewhat effectively", score: 2 },
        { text: "Moderately effectively", score: 4 },
        { text: "Very effectively", score: 6 },
        { text: "Extremely effectively", score: 7 }
      ]
    },
    {
      question: "How frequently do non-technical staff members require help with basic tech tasks?",
      options: [
        { text: "Very frequently (daily)", score: 0 },
        { text: "Frequently (weekly)", score: 2 },
        { text: "Occasionally (monthly)", score: 4 },
        { text: "Rarely (quarterly)", score: 6 },
        { text: "Almost never", score: 7 }
      ]
    },
    {
      question: "How well does your team understand basic data concepts (e.g., data types, databases)?",
      options: [
        { text: "No understanding", score: 0 },
        { text: "Basic understanding", score: 2 },
        { text: "Moderate understanding", score: 4 },
        { text: "Strong understanding", score: 6 },
        { text: "Comprehensive understanding", score: 7 }
      ]
    },
    {
      question: "How aware is your team of cybersecurity best practices?",
      options: [
        { text: "Not at all aware", score: 0 },
        { text: "Slightly aware", score: 2 },
        { text: "Moderately aware", score: 4 },
        { text: "Very aware", score: 6 },
        { text: "Extremely aware", score: 7 }
      ]
    },
    {
      question: "How confident is your team in evaluating new tech tools for your organisation?",
      options: [
        { text: "Not at all confident", score: 0 },
        { text: "Slightly confident", score: 2 },
        { text: "Moderately confident", score: 4 },
        { text: "Very confident", score: 6 },
        { text: "Extremely confident", score: 7 }
      ]
    },
    {
      question: "How well does your team understand the implications of technology choices on your mission?",
      options: [
        { text: "No understanding", score: 0 },
        { text: "Basic understanding", score: 2 },
        { text: "Moderate understanding", score: 4 },
        { text: "Strong understanding", score: 6 },
        { text: "Comprehensive understanding", score: 7 }
      ]
    },
    {
      question: "How effective is communication between technical and non-technical team members?",
      options: [
        { text: "Not effective", score: 0 },
        { text: "Somewhat effective", score: 2 },
        { text: "Moderately effective", score: 4 },
        { text: "Very effective", score: 6 },
        { text: "Extremely effective", score: 7 }
      ]
    },
    {
      question: "How well can your team troubleshoot basic technical problems?",
      options: [
        { text: "Cannot troubleshoot at all", score: 0 },
        { text: "Can troubleshoot simple issues", score: 2 },
        { text: "Can troubleshoot common problems", score: 4 },
        { text: "Can troubleshoot most problems", score: 6 },
        { text: "Can troubleshoot complex problems", score: 7 }
      ]
    },
    {
      question: "How clear is your team on data privacy regulations affecting your organisation?",
      options: [
        { text: "Not at all clear", score: 0 },
        { text: "Slightly clear", score: 2 },
        { text: "Moderately clear", score: 4 },
        { text: "Very clear", score: 6 },
        { text: "Extremely clear", score: 7 }
      ]
    },
    {
      question: "How comfortable is your team in learning new technologies?",
      options: [
        { text: "Not at all comfortable", score: 0 },
        { text: "Slightly comfortable", score: 2 },
        { text: "Moderately comfortable", score: 4 },
        { text: "Very comfortable", score: 6 },
        { text: "Extremely comfortable", score: 7 }
      ]
    },
    {
      question: "How well can your non-technical staff articulate their technology needs?",
      options: [
        { text: "Cannot articulate at all", score: 0 },
        { text: "Can vaguely describe needs", score: 2 },
        { text: "Can moderately describe needs", score: 4 },
        { text: "Can clearly describe needs", score: 6 },
        { text: "Can precisely describe needs", score: 7 }
      ]
    },
    {
      question: "Does your organisation have a technology strategy aligned with your mission?",
      options: [
        { text: "No strategy exists", score: 0 },
        { text: "Basic strategy exists", score: 2 },
        { text: "Moderate strategy exists", score: 4 },
        { text: "Comprehensive strategy exists", score: 6 },
        { text: "Detailed strategy with regular updates", score: 7 }
      ]
    },
    {
      question: "How well does your team understand potential AI applications for your organisation?",
      options: [
        { text: "No understanding", score: 0 },
        { text: "Basic understanding", score: 2 },
        { text: "Moderate understanding", score: 4 },
        { text: "Strong understanding", score: 6 },
        { text: "Comprehensive understanding", score: 7 }
      ]
    }
  ];

  const handleAnswer = (optionIndex) => {
    const newAnswers = { ...answers };
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.keys(answers).forEach(questionIndex => {
      const question = questions[questionIndex];
      const selectedOption = question.options[answers[questionIndex]];
      totalScore += selectedOption.score;
    });
    
    // Calculate percentage (maximum score is 7 points per question)
    const maxScore = questions.length * 7;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    return percentage;
  };

  const getFeedback = (score) => {
    if (score < 30) {
      return {
        level: "Beginner",
        feedback: "Your organisation is at an early stage of tech fluency. There's significant room for improvement in helping your team understand and leverage technology effectively.",
      };
    } else if (score < 60) {
      return {
        level: "Developing",
        feedback: "Your organisation has basic tech fluency, but many team members would benefit from more structured learning opportunities to become more confident with technology.",
      };
    } else if (score < 80) {
      return {
        level: "Proficient",
        feedback: "Your organisation has good tech fluency overall, though there are still specific areas where targeted improvements would create significant benefits.",
      };
    } else {
      return {
        level: "Advanced",
        feedback: "Your organisation demonstrates strong tech fluency. Your team is comfortable with technology and effectively incorporates it into your work, though there may still be areas for optimization.",
      };
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowResults(false);
    setAnswers({});
  };

  if (showResults) {
    const score = calculateScore();
    const feedback = getFeedback(score);
    
    return (
      <div className="quiz-container">
        <h2 className="quiz-title">Your Tech Fluency Score: {score}%</h2>
        
        <div className="score-bar-container">
          <div className="score-bar">
            <div 
              className="score-indicator"
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>
        
        <div className="results-container">
          <h3 className="level-title">Level: {feedback.level}</h3>
          <p className="feedback-text">{feedback.feedback}</p>
          
          <div className="contact-prompt">
            <p className="prompt-heading">Want to improve your organisation's tech fluency?</p>
            <p className="prompt-text">Our team can help you develop a customized tech fluency program that addresses your specific needs and challenges.</p>
            <a href="mailto:admin@snek-it.com" className="contact-link">Contact us to get started</a>
          </div>
        </div>
        
        <button 
          onClick={restartQuiz}
          className="restart-button"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Tech Fluency Assessment</h2>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-indicator"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">Question {currentQuestion + 1} of {questions.length}</p>
      </div>
      
      <div className="question-container">
        <h3 className="question-text">{questions[currentQuestion].question}</h3>
        
        <div className="options-list">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="option-button"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechFluencyQuestionnaire;