
const functions = [
  {
    question: '\\sin(x)',
    correct: '\\cos(x)',
    options: ['\\cos(x)', '-\\sin(x)', '\\tan(x)', '\\sec(x)', '\\csc(x)']
  },
  {
    question: '\\cos(x)',
    correct: '-\\sin(x)',
    options: ['-\\sin(x)', '\\cos(x)', '\\tan(x)', '-\\sec(x)', '\\sin(x)']
  },
  {
    question: '\\tan(x)',
    correct: '\\sec^2(x)',
    options: ['\\sec^2(x)', '\\tan^2(x)', '-\\sec(x)', '\\cot(x)', '\\sin(x)']
  },
  {
    question: '\\csc(x)',
    correct: '-\\csc(x) \\cot(x)',
    options: ['-\\csc(x) \\cot(x)', '-\\sec(x) \\tan(x)', '\\sec(x)', '\\csc(x)', '\\cot(x)']
  },
  {
    question: '\\sec(x)',
    correct: '\\sec(x) \\tan(x)',
    options: ['\\sec(x) \\tan(x)', '\\sin(x) \\cos(x)', '\\csc(x)', '-\\sec(x)', '-\\tan(x)']
  },
  {
    question: '\\cot(x)',
    correct: '-\\csc^2(x)',
    options: ['-\\csc^2(x)', '\\sec^2(x)', '\\sin(x)', '\\tan(x)', '\\cot^2(x)']
  },
  {
    question: '\\arcsin(x)',
    correct: '\\dfrac{1}{\\sqrt{1 - x^2}}',
    options: ['\\dfrac{1}{\\sqrt{1 - x^2}}', '\\dfrac{1}{\\sqrt{1 + x^2}}', '\\dfrac{1}{1 - x}', '\\dfrac{x}{1 - x^2}', '\\dfrac{x}{\\sqrt{1 - x^2}}']
  },
  {
    question: '\\arccos(x)',
    correct: '-\\dfrac{1}{\\sqrt{1 - x^2}}',
    options: ['-\\dfrac{1}{\\sqrt{1 - x^2}}', '\\dfrac{1}{\\sqrt{1 - x^2}}', '-\\dfrac{1}{\\sqrt{1 + x^2}}', '\\dfrac{1}{\\sqrt{1 + x}}', '-\\dfrac{x}{\\sqrt{1 - x^2}}']
  },
  {
    question: '\\arctan(x)',
    correct: '\\dfrac{1}{1 + x^2}',
    options: ['\\dfrac{1}{1 + x^2}', '\\dfrac{1}{1 - x^2}', '\\dfrac{1}{\\sqrt{1 + x^2}}', '\\dfrac{x}{1 + x^2}', '\\dfrac{x^2}{1 + x^2}']
  },
  {
    question: '\\arccsc(x)',
    correct: '-\\dfrac{1}{|x| \\sqrt{x^2 - 1}}',
    options: ['-\\dfrac{1}{|x| \\sqrt{x^2 - 1}}', '\\dfrac{1}{|x| \\sqrt{x^2 - 1}}', '-\\dfrac{1}{\\sqrt{x^2 - 1}}', '\\dfrac{1}{x^2 - 1}', '\\dfrac{1}{\\sqrt{x^2 - 1}}']
  },
  {
    question: '\\arcsec(x)',
    correct: '\\dfrac{1}{|x| \\sqrt{x^2 - 1}}',
    options: ['\\dfrac{1}{|x| \\sqrt{x^2 - 1}}', '-\\dfrac{1}{|x| \\sqrt{x^2 - 1}}', '\\dfrac{1}{\\sqrt{x^2 + 1}}', '\\dfrac{1}{|x| \\sqrt{1 - x^2}}', '-\\dfrac{x}{\\sqrt{x^2 - 1}}']
  },
  {
    question: '\\arccot(x)',
    correct: '-\\dfrac{1}{1 + x^2}',
    options: ['-\\dfrac{1}{1 + x^2}', '\\dfrac{1}{1 + x^2}', '\\dfrac{1}{1 - x^2}', '-\\dfrac{x}{1 + x^2}', '\\dfrac{x}{1 + x^2}']
  },
  {
    question: 'e^x',
    correct: 'e^x',
    options: ['e^x', 'xe^x', 'x', '1', 'e']
  },
  {
    question: '2^x',
    correct: '2^x \\ln(2)',
    options: ['2^x \\ln(2)', 'x2^x', '2^x \\cdot 2', '\\ln(x)', 'x^2 \\cdot \\ln(2)']
  },
  {
    question: '3^x',
    correct: '3^x \\ln(3)',
    options: ['3^x \\ln(3)', '3x^2', '3^x \\cdot 3', '\\ln(3)', 'x^3 \\cdot \\ln(3)']
  },
  {
    question: '\\ln(x)',
    correct: '\\dfrac{1}{x}',
    options: ['\\dfrac{1}{x}', '\\dfrac{1}{\\ln(x)}', '\\ln(x)', '\\ln(x^2)', '\\dfrac{x}{x^2}']
  },
  {
    question: '\\ln(3x)',
    correct: '\\dfrac{1}{x}',
    options: ['\\dfrac{1}{x}', '\\dfrac{1}{3x}', '\\ln(x)', '\\dfrac{3}{x}', '3\\ln(x)']
  },
  {
    question: 'x^3 \\ln(x)',
    correct: '3x^2 \\ln(x) + x^2',
    options: ['3x^2 \\ln(x) + x^2', 'x^3 \\ln(x)', 'x^2 \\ln(x) + x^2', '3x^3 \\ln(x)', 'x \\ln(x) + x^2']
  },
  {
    question: '\\sin(5x)',
    correct: '5\\cos(5x)',
    options: ['5\\cos(5x)', '-5\\sin(5x)', '\\cos(5x)', '\\dfrac{1}{\\cos(5x)}', '5\\sin(5x)']
  },
  {
    question: '\\cos(2x)',
    correct: '-2\\sin(2x)',
    options: ['-2\\sin(2x)', '\\sin(2x)', '-\\sin(2x)', '2\\sin(2x)', '2\\cos(2x)']
  },
  {
    question: '\\ln(x^2 + 1)',
    correct: '\\dfrac{2x}{x^2 + 1}',
    options: ['\\dfrac{2x}{x^2 + 1}', '\\dfrac{1}{x^2 + 1}', '2\\ln(x)', '\\dfrac{1}{2x}', '\\ln(2x)']
  },
  {
    question: 'x^2 e^x',
    correct: '2x e^x + x^2 e^x',
    options: ['2x e^x + x^2 e^x', 'x e^x', 'x^2 e^x', '2e^x', 'x^3 e^x']
  },
  {
    question: '5^{x^2}',
    correct: '2x 5^{x^2} \\ln(5)',
    options: ['2x 5^{x^2} \\ln(5)', '5^{x^2}', '2x^2 \\ln(5)', '5^{x} \\ln(x)', 'x5^{x^2}']
  },
  {
    question: '\\ln(\\sqrt{x})',
    correct: '\\dfrac{1}{2x}',
    options: ['\\dfrac{1}{2x}', '\\dfrac{1}{\\sqrt{x}}', '\\dfrac{1}{x}', '\\dfrac{1}{x^2}', 'x \\ln(x)']
  },
  {
    question: '\\arctan(3x)',
    correct: '\\dfrac{3}{1 + 9x^2}',
    options: ['\\dfrac{3}{1 + 9x^2}', '\\dfrac{3}{1 + x^2}', '\\dfrac{1}{1 + 9x^2}', '\\dfrac{9}{1 + x^2}', '9\\dfrac{1}{x^2}']
  },
  {
    question: 'x^5 \\cdot e^x',
    correct: '5x^4 e^x + x^5 e^x',
    options: ['5x^4 e^x + x^5 e^x', 'x^5 e^x', '5x^5 e^x', '5x^4 e^x', 'x^4 e^x + x^5 e^x']
  },
  {
    question: '\\dfrac{e^x}{x}',
    correct: '\\dfrac{e^x(x - 1)}{x^2}',
    options: ['\\dfrac{e^x(x - 1)}{x^2}', '\\dfrac{e^x}{x^2}', '\\dfrac{e^x}{x}', '\\dfrac{x e^x}{x^2}', 'e^x(x - 2)']
  },
  {
    question: 'x^2 \\cdot \\ln(x)',
    correct: '2x \\cdot \\ln(x) + x',
    options: ['2x \\cdot \\ln(x) + x', '2x \\cdot \\ln(x)', 'x^2 \\cdot \\ln(x)', 'x^2 \\cdot \\ln(x) + 2x', '\\ln(x) + x^2']
  },
  {
    question: '3^x',
    correct: '3^x \\ln(3)',
    options: ['3^x \\ln(3)', '3^x', 'x^3 \\ln(3)', '3\\ln(x)', 'x^3']
  },
  {
    question: '\\sin^2(x)',
    correct: '2\\sin(x)\\cos(x)',
    options: ['2\\sin(x)\\cos(x)', '\\sin(x)\\cos(x)', '2\\cos(x)', '\\cos^2(x)', '\\sin(2x)']
  },
  {
    question: '\\cos^2(x)',
    correct: '-2\\sin(x)\\cos(x)',
    options: ['-2\\sin(x)\\cos(x)', '-\\sin(x)\\cos(x)', '2\\cos(x)', '\\cos^2(x)', '2\\sin(x)']
  },
  {
    question: 'x^3 + \\tan(x)',
    correct: '3x^2 + \\sec^2(x)',
    options: ['3x^2 + \\sec^2(x)', '3x^2 + \\tan(x)', 'x^3 + \\sec^2(x)', 'x^2 + \\tan(x)', '3x^2 + \\sec(x)']
  },
  {
    question: 'x \\cdot e^{2x}',
    correct: 'e^{2x}(1 + 2x)',
    options: ['e^{2x}(1 + 2x)', 'e^{2x}(x + 1)', '2e^{2x}(1 + x)', '2e^{2x}x', 'e^{2x}(1 - 2x)']
  },
  {
    question: '\\ln(x^3 + 2x)',
    correct: '\\dfrac{3x^2 + 2}{x^3 + 2x}',
    options: ['\\dfrac{3x^2 + 2}{x^3 + 2x}', '\\dfrac{1}{x^3 + 2x}', '\\dfrac{2x + 3x^2}{x^2}', '\\dfrac{3x}{x^3 + 2x}', '2\\ln(x)']
  },
  {
    question: '5^{x^3}',
    correct: '3x^2 \\cdot 5^{x^3} \\cdot \\ln(5)',
    options: ['3x^2 \\cdot 5^{x^3} \\cdot \\ln(5)', '3x^2 \\cdot 5^{x^2} \\cdot \\ln(5)', 'x^3 \\cdot \\ln(5)', '5^{x^3} \\cdot \\ln(5)', '3x^2 \\cdot 5^x \\cdot \\ln(5)']
  },
  {
    question: '\\tan(2x)',
    correct: '2\\sec^2(2x)',
    options: ['2\\sec^2(2x)', '2\\tan(x)\\sec(x)', '\\sec^2(2x)', '2\\sec(2x)', '2\\tan^2(x)']
  },
  {
    question: '7^x',
    correct: '7^x \\ln(7)',
    options: ['7^x \\ln(7)', 'x^7 \\ln(7)', '7^x', '7x', 'x^7']
  },
  {
    question: 'x \\cdot \\arctan(x)',
    correct: '\\arctan(x) + \\dfrac{x}{1 + x^2}',
    options: ['\\arctan(x) + \\dfrac{x}{1 + x^2}', '\\arctan(x) + x', 'x\\arctan(x)', 'x + \\dfrac{x}{1 + x^2}', 'x\\arctan(x) + \\dfrac{1}{x^2}']
  },
  {
    question: '\\sin^{-1}(x)',
    correct: '\\dfrac{1}{\\sqrt{1 - x^2}}',
    options: ['\\dfrac{1}{\\sqrt{1 - x^2}}', '\\dfrac{1}{1 - x^2}', '\\sin(x)', '\\arctan(x)', '\\dfrac{x}{1 - x^2}']
  },
  {
    question: 'x^2 \\cdot \\cos(x)',
    correct: '2x \\cdot \\cos(x) - x^2 \\cdot \\sin(x)',
    options: ['2x \\cdot \\cos(x) - x^2 \\cdot \\sin(x)', '2x \\cdot \\sin(x) + x^2 \\cdot \\cos(x)', '2x^2 \\cdot \\sin(x)', 'x^2 \\cdot \\cos(x)', '2x \\cdot \\cos(x) + x^2 \\cdot \\sin(x)']
  },
  {
    question: 'e^{x^2}',
    correct: '2xe^{x^2}',
    options: ['2xe^{x^2}', 'x^2e^x', 'e^{x^2}', '2x', 'e^x']
  },
  {
    question: '\\ln(2x^3)',
    correct: '\\dfrac{3}{x}',
    options: ['\\dfrac{3}{x}', '\\dfrac{1}{2x}', '3x', '\\dfrac{1}{x^2}', '2\\ln(x)']
  },
  {
    question: 'e^{3x^2}',
    correct: '6xe^{3x^2}',
    options: ['6xe^{3x^2}', '3x^2e^x', 'e^{3x^2}', '3xe^{3x^2}', 'x^2e^{3x^2}']
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
