---
layout: base.njk
title: Tech Fluency | snek-it
---

## Tech Fluency in Your organisation

Building tech fluency within your organisation empowers your team to make informed decisions, collaborate effectively, and drive innovation. Our approach helps non-technical staff become comfortable with technology concepts and tools.

### Assessment Questionnaire

Take our interactive assessment to evaluate your organisation's current tech fluency level. Answer 15 questions to receive a personalized score and recommendations.

<style>
/* Questionnaire styles */
.questionnaire-container {
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: white;
}

/* Quiz container */
.quiz-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

/* Progress bar */
.progress-container, .score-bar-container {
  margin-bottom: 1.5rem;
}

.progress-bar, .score-bar {
  width: 100%;
  height: 6px;
  background-color: #F0F0F0;
  border-radius: 0;
  overflow: hidden;
}

.progress-indicator, .score-indicator {
  height: 100%;
  background-color: #333333;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.875rem;
  color: #666666;
  margin-top: 0.5rem;
}

/* Question styles */
.question-container {
  margin-bottom: 2rem;
}

.question-text {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Modernized option buttons */
.option-button {
  width: 100%;
  text-align: left;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  font-size: 1rem;
  position: relative;
  line-height: 1.4;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.option-button:hover {
  background-color: #F5F5F5;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
}

.option-button:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  background-color: #EFEFEF;
}

.option-button:focus {
  outline: none;
  border-color: #333333;
}

.option-button::before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.option-button:hover::before {
  border-color: rgba(0, 0, 0, 0.4);
}

/* Results styles */
.results-container {
  margin-bottom: 2rem;
}

.level-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feedback-text {
  color: #666666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.contact-prompt {
  padding: 1.5rem;
  background-color: #F5F5F5;
  border-left: 3px solid #333333;
  margin-bottom: 1.5rem;
}

.prompt-heading {
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.prompt-text {
  margin-bottom: 1rem;
}

.contact-link {
  display: inline-block;
  color: #333333;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid #666666;
  transition: border-color 0.2s;
}

.contact-link:hover {
  border-color: #333333;
}

/* Modernized restart button */
.restart-button {
  padding: 0.9rem 1.75rem;
  background-color: #333333;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.25s ease;
  font-family: inherit;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
}

.restart-button:hover {
  background-color: #444444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.restart-button:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .questionnaire-container {
    padding: 1rem;
  }
  
  .quiz-title {
    font-size: 1.25rem;
  }
  
  .question-text {
    font-size: 1.125rem;
  }
  
  .option-button {
    padding: 1rem 1.25rem;
  }
}
</style>

<div class="questionnaire-container">
  <div id="questionnaire">
    <h2 class="quiz-title">Tech Fluency Assessment</h2>
    
    <div class="progress-container">
      <div class="progress-bar">
        <div id="progress-indicator" class="progress-indicator" style="width: 6.67%"></div>
      </div>
      <p class="progress-text">Question <span id="current-question">1</span> of <span id="total-questions">15</span></p>
    </div>
    
    <div id="question-container" class="question-container">
      <!-- Question content will be inserted here by JavaScript -->
    </div>
    
    <div id="results-container" class="results-container" style="display: none;">
      <h3>Your Tech Fluency Score: <span id="score-value">0</span>%</h3>
      
      <div class="score-bar-container">
        <div class="score-bar">
          <div id="score-indicator" class="score-indicator" style="width: 0%"></div>
        </div>
      </div>
      
      <h3 class="level-title">Level: <span id="level-text">Beginner</span></h3>
      <p id="feedback-text" class="feedback-text"></p>
      
      <div class="contact-prompt">
        <p class="prompt-heading">Want to improve your organisation's tech fluency?</p>
        <p class="prompt-text">Our team can help you develop a customized tech fluency program that addresses your specific needs and challenges.</p>
        <a href="mailto:admin@snek-it.com" class="contact-link">Contact us to get started</a>
      </div>
      
      <button id="restart-button" class="restart-button">Retake Assessment</button>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
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
  
  let currentQuestion = 0;
  let answers = {};
  
  // DOM elements
  const questionContainer = document.getElementById('question-container');
  const progressIndicator = document.getElementById('progress-indicator');
  const currentQuestionEl = document.getElementById('current-question');
  const totalQuestionsEl = document.getElementById('total-questions');
  const resultsContainer = document.getElementById('results-container');
  const scoreValue = document.getElementById('score-value');
  const scoreIndicator = document.getElementById('score-indicator');
  const levelText = document.getElementById('level-text');
  const feedbackText = document.getElementById('feedback-text');
  const restartButton = document.getElementById('restart-button');
  
  // Set total questions
  totalQuestionsEl.textContent = questions.length;
  
  // Initialize the questionnaire
  function initQuiz() {
    currentQuestion = 0;
    answers = {};
    showQuestion(currentQuestion);
    resultsContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    updateProgress();
  }
  
  // Show a specific question
  function showQuestion(index) {
    const question = questions[index];
    
    let optionsHTML = '';
    question.options.forEach((option, i) => {
      optionsHTML += `
        <button class="option-button" data-index="${i}">
          ${option.text}
        </button>
      `;
    });
    
    questionContainer.innerHTML = `
      <h3 class="question-text">${question.question}</h3>
      <div class="options-list">
        ${optionsHTML}
      </div>
    `;
    
    // Add event listeners to option buttons
    document.querySelectorAll('.option-button').forEach(button => {
      button.addEventListener('click', function() {
        const optionIndex = parseInt(this.getAttribute('data-index'));
        handleAnswer(optionIndex);
      });
    });
    
    updateProgress();
  }
  
  // Handle user's answer
  function handleAnswer(optionIndex) {
    answers[currentQuestion] = optionIndex;
    
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion(currentQuestion);
    } else {
      showResults();
    }
  }
  
  // Update progress bar
  function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressIndicator.style.width = `${progress}%`;
    currentQuestionEl.textContent = currentQuestion + 1;
  }
  
  // Calculate and show results
  function showResults() {
    const score = calculateScore();
    const feedback = getFeedback(score);
    
    scoreValue.textContent = score;
    scoreIndicator.style.width = `${score}%`;
    levelText.textContent = feedback.level;
    feedbackText.textContent = feedback.feedback;
    
    questionContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
  }
  
  // Calculate score
  function calculateScore() {
    let totalScore = 0;
    
    Object.keys(answers).forEach(questionIndex => {
      const index = parseInt(questionIndex);
      const question = questions[index];
      const selectedOption = question.options[answers[index]];
      totalScore += selectedOption.score;
    });
    
    // Calculate percentage (maximum score is 7 points per question)
    const maxScore = questions.length * 7;
    return Math.round((totalScore / maxScore) * 100);
  }
  
  // Get feedback based on score
  function getFeedback(score) {
    if (score < 30) {
      return {
        level: "Beginner",
        feedback: "Your organisation is at an early stage of tech fluency. There's significant room for improvement in helping your team understand and leverage technology effectively."
      };
    } else if (score < 60) {
      return {
        level: "Developing",
        feedback: "Your organisation has basic tech fluency, but many team members would benefit from more structured learning opportunities to become more confident with technology."
      };
    } else if (score < 80) {
      return {
        level: "Proficient",
        feedback: "Your organisation has good tech fluency overall, though there are still specific areas where targeted improvements would create significant benefits."
      };
    } else {
      return {
        level: "Advanced",
        feedback: "Your organisation demonstrates strong tech fluency. Your team is comfortable with technology and effectively incorporates it into your work, though there may still be areas for optimization."
      };
    }
  }
  
  // Restart quiz
  restartButton.addEventListener('click', initQuiz);
  
  // Initialize
  initQuiz();
});
</script>

### What is Tech Fluency?

Tech fluency goes beyond basic digital literacy. It's about understanding:

- Core technology concepts and their business applications
- How technology solutions fit together in your ecosystem
- Data principles and their impact on decision-making
- Security awareness and best practices
- When and how to leverage emerging technologies

### Our Tech Fluency Program

<div class="services">
  <div class="service-card">
    <h3>Assessment</h3>
    <p>We evaluate your team's current tech fluency levels and identify key areas for development that align with your organisational goals.</p>
  </div>
  
  <div class="service-card">
    <h3>Customized Training</h3>
    <p>We design learning experiences that address your specific needs, using your actual tools and real-world scenarios.</p>
  </div>
  
  <div class="service-card">
    <h3>Hands-on Workshops</h3>
    <p>Interactive sessions that build confidence through practice in a supportive environment.</p>
  </div>
  
  <div class="service-card">
    <h3>Tech Mentoring</h3>
    <p>Ongoing support to help team members apply new skills and knowledge in their day-to-day work.</p>
  </div>
</div>

### Benefits of Tech Fluency

- Better communication between technical and non-technical team members
- More informed technology decision-making across the organisation
- Reduced dependency on technical staff for routine tasks
- Greater adoption of tools that increase productivity
- Stronger security culture and practices

<div class="contact-section">
Ready to build tech fluency in your organisation? Get in touch at <a href="mailto:admin@snek-it.com">admin@snek-it.com</a>
</div>