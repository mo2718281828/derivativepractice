
const functions = [
  {
    question: 'x^7',
    correct: '7x^6',
    options: ['7x^6', 'x^6', '6x^7', '7x^7']
  },
  {
    question: '\\frac{1}{x^3}',
    correct: '-\\dfrac{3}{x^4}',
    options: ['-\\dfrac{3}{x^4}', '\\dfrac{3}{x^2}', '\\dfrac{1}{x^3}', '-\\dfrac{1}{x^3}']
  },
  {
    question: '5e^x',
    correct: '5e^x',
    options: ['5e^x', 'e^x', '5xe^x', '5']
  },
  {
    question: '\\sin(x)',
    correct: '\\cos(x)',
    options: ['\\cos(x)', '-\\sin(x)', '\\sin(x)', '\\tan(x)']
  },
  {
    question: '\\cos(x)',
    correct: '-\\sin(x)',
    options: ['-\\sin(x)', '\\cos(x)', '\\sin(x)', '-\\cos(x)']
  },
  {
    question: 'x^2 + 3x',
    correct: '2x + 3',
    options: ['2x + 3', 'x + 3', '2x + x', 'x^2 + 3']
  },
  {
    question: 'x^3 \\cdot \\ln(x)',
    correct: '3x^2 \\cdot \\ln(x) + x^3 \\cdot \\frac{1}{x}',
    options: ['3x^2 \\cdot \\ln(x) + x^3 \\cdot \\frac{1}{x}', '3x \\cdot \\ln(x) + x^3', '\\ln(x) + x^3', '3x^2 \\cdot \\ln(x)']
  },
  {
    question: 'e^{3x}',
    correct: '3e^{3x}',
    options: ['3e^{3x}', 'e^{3x}', '3e^{x}', '3x e^{3x}']
  },
  {
    question: '\\ln(2x)',
    correct: '\\dfrac{1}{x}',
    options: ['\\dfrac{1}{x}', '\\dfrac{1}{2x}', '2\\dfrac{1}{x}', '\\dfrac{2}{x}']
  },
  {
    question: '\\sqrt{x}',
    correct: '\\dfrac{1}{2\\sqrt{x}}',
    options: ['\\dfrac{1}{2\\sqrt{x}}', '\\dfrac{1}{\\sqrt{x}}', '\\dfrac{2}{\\sqrt{x}}', '2\\sqrt{x}']
  },
  {
    question: '\\dfrac{1}{\\sin(x)}',
    correct: '-\\dfrac{\\cos(x)}{\\sin^2(x)}',
    options: ['-\\dfrac{\\cos(x)}{\\sin^2(x)}', '\\dfrac{\\cos(x)}{\\sin(x)}', '-\\dfrac{\\sin(x)}{\\cos(x)}', '\\dfrac{1}{\\cos(x)}']
  },
  {
    question: '\\arctan(x)',
    correct: '\\dfrac{1}{1 + x^2}',
    options: ['\\dfrac{1}{1 + x^2}', '1 + \\arctan(x)', '\\dfrac{1}{x^2}', '\\dfrac{x}{1 + x^2}']
  },
  {
    question: '\\arccos(x)',
    correct: '-\\dfrac{1}{\\sqrt{1 - x^2}}',
    options: ['-\\dfrac{1}{\\sqrt{1 - x^2}}', '\\dfrac{1}{\\sqrt{1 - x^2}}', '-\\dfrac{1}{\\sqrt{1 + x^2}}', '1 + \\arccos(x)']
  },
  {
    question: 'x^3 \\cdot e^x',
    correct: '3x^2 e^x + x^3 e^x',
    options: ['3x^2 e^x + x^3 e^x', 'x^3 e^x', 'x^2 e^x + x^3', '3x e^x + x^2 e^x']
  },
  {
    question: '\\dfrac{1}{x^2}',
    correct: '-\\dfrac{2}{x^3}',
    options: ['-\\dfrac{2}{x^3}', '\\dfrac{2}{x^2}', '-\\dfrac{1}{x^3}', '-\\dfrac{1}{x^2}']
  },
  {
    question: '\\ln(x^2)',
    correct: '\\dfrac{2}{x}',
    options: ['\\dfrac{2}{x}', '2\\ln(x)', '\\dfrac{1}{x^2}', 'x\\ln(x)']
  },
  {
    question: 'x \\cdot \\sin(x)',
    correct: '\\sin(x) + x \\cdot \\cos(x)',
    options: ['\\sin(x) + x \\cdot \\cos(x)', '\\cos(x)', 'x\\cos(x) + x\\sin(x)', '\\cos(x) + x\\sin(x)']
  },
  {
    question: '\\dfrac{e^x}{x}',
    correct: '\\dfrac{e^x(x - 1)}{x^2}',
    options: ['\\dfrac{e^x(x - 1)}{x^2}', '\\dfrac{e^x}{x}', '\\dfrac{e^x}{x^2}', '\\dfrac{1}{x}']
  },
  {
    question: '\\sin(2x)',
    correct: '2\\cos(2x)',
    options: ['2\\cos(2x)', '\\cos(2x)', '2\\sin(2x)', '\\dfrac{1}{\\cos(2x)}']
  },
  {
    question: '\\cos(5x)',
    correct: '-5\\sin(5x)',
    options: ['-5\\sin(5x)', '-\\sin(5x)', '5\\sin(5x)', '-\\cos(5x)']
  },
  {
    question: '\\sqrt{1 - x^2}',
    correct: '-\\dfrac{x}{\\sqrt{1 - x^2}}',
    options: ['-\\dfrac{x}{\\sqrt{1 - x^2}}', '\\dfrac{1}{\\sqrt{1 - x^2}}', '\\dfrac{x}{\\sqrt{1 - x^2}}', '-\\dfrac{1}{\\sqrt{1 + x^2}}']
  },
  {
    question: '\\arcsin(2x)',
    correct: '\\dfrac{2}{\\sqrt{1 - 4x^2}}',
    options: ['\\dfrac{2}{\\sqrt{1 - 4x^2}}', '\\dfrac{1}{\\sqrt{1 - 4x^2}}', '\\dfrac{2}{\\sqrt{1 - x^2}}', '\\dfrac{4}{\\sqrt{1 - 4x^2}}']
  }
];



let score = 0;
let previousFunction = null;

function setupQuestion() {
  let currentFunction;
  do {
    currentFunction = functions[Math.floor(Math.random() * functions.length)];
  } while (currentFunction === previousFunction);

  previousFunction = currentFunction;

  document.getElementById('function').innerHTML = `\\(f(x)= ${currentFunction.question} \\)`;  // Use LaTeX format
  MathJax.typesetPromise();  // Trigger MathJax rendering

  generateOptions(currentFunction.correct, currentFunction.options);
}

function generateOptions(correctAnswer, allOptions) {
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);  // Shuffle options

  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.innerHTML = `\\(${option}\\)`;  // Use LaTeX syntax for buttons
    button.onclick = () => checkAnswer(option, correctAnswer);
    optionsContainer.appendChild(button);
  });

  // Ensure MathJax processes LaTeX after content is added
  MathJax.typesetPromise().then(() => {
    console.log('MathJax re-typeset completed for options');
  }).catch((err) => console.log('MathJax typeset failed:', err));
}

function checkAnswer(selectedOption, correctAnswer) {
  const scoreSheet = document.querySelector('#scoreSheet tbody');
  const row = document.createElement('tr');
  const answerCell = document.createElement('td');
  const changeCell = document.createElement('td');
  const scoreCell = document.createElement('td');

  answerCell.innerHTML = `\\(${correctAnswer}\\)`;  // Use LaTeX format
  MathJax.typesetPromise();  // Trigger MathJax rendering

  if (selectedOption === correctAnswer) {
    score += 20;
    changeCell.textContent = '+20';
    changeCell.className = 'green';
  } else {
    score = Math.max(0, score - 5);
    changeCell.textContent = '-5';
    changeCell.className = 'red';
  }

  scoreCell.textContent = score;
  scoreCell.className = 'score';
  scoreCell.style.textAlign = "center";

  row.appendChild(answerCell);
  row.appendChild(changeCell);
  row.appendChild(scoreCell);
  scoreSheet.appendChild(row);

  if (scoreSheet.rows.length > 6) {
    scoreSheet.deleteRow(0);  // Keep the header, delete the top data row
  }

  setTimeout(setupQuestion, 2000);
}

window.onload = function() {
  setupQuestion(); // Ensure the game starts after everything is loaded
}
