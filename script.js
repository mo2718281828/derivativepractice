const functions = [
    {
    question: '\\sin(3x^2)',
    correct: '6x \\cdot \\cos(3x^2)',
    options: ['6x \\cdot \\cos(3x^2)', '3\\sin(3x)', '6x \\cdot \\sin(3x^2)', '3x^2 \\cdot \\cos(3x^2)', '6x \\cdot \\sin(3x)']
  },
  {
    question: 'e^{x^3}',
    correct: '3x^2 e^{x^3}',
    options: ['3x^2 e^{x^3}', 'e^{x^2}', 'x^3 e^x', '3xe^{x^3}', 'e^{x^3}']
  },
  {
    question: '\\ln(5x^2 + 3)',
    correct: '\\dfrac{10x}{5x^2 + 3}',
    options: ['\\dfrac{10x}{5x^2 + 3}', '\\dfrac{5}{5x^2 + 3}', '10x', '\\dfrac{1}{5x^2 + 3}', '\\dfrac{10x}{x^2}']
  },
  {
    question: 'e^{2x^3 + 1}',
    correct: '6x^2 e^{2x^3 + 1}',
    options: ['6x^2 e^{2x^3 + 1}', 'e^{2x^3 + 1}', '2x^3 e^x', '2xe^{2x^3 + 1}', '6x e^{2x^3}']
  },
  {
    question: '\\cos(4x^2)',
    correct: '-8x \\sin(4x^2)',
    options: ['-8x \\sin(4x^2)', '8x \\cos(4x^2)', '4x \\sin(4x^2)', '-4x^2 \\cos(x)', '-4\\sin(4x^2)']
  },
  {
    question: '\\tan(3x^2 + 1)',
    correct: '6x \\sec^2(3x^2 + 1)',
    options: ['6x \\sec^2(3x^2 + 1)', '\\sec^2(3x^2 + 1)', '3\\sec^2(x)', '2x \\sec^2(3x^2 + 1)', '6x \\tan(3x^2 + 1)']
  },
  {
    question: '\\sqrt{x^2 + 4}',
    correct: '\\dfrac{x}{\\sqrt{x^2 + 4}}',
    options: ['\\dfrac{x}{\\sqrt{x^2 + 4}}', '\\dfrac{2x}{\\sqrt{x^2 + 4}}', '\\dfrac{1}{\\sqrt{x^2 + 4}}', '\\dfrac{2}{\\sqrt{x^2 + 4}}', '2\\sqrt{x^2 + 4}']
  },
  {
    question: '\\sin^2(2x)',
    correct: '4\\sin(2x) \\cdot \\cos(2x)',
    options: ['4\\sin(2x) \\cdot \\cos(2x)', '2\\sin(2x) \\cdot \\cos(x)', '2\\sin(2x)', '\\sin^2(x) \\cdot \\cos(2x)', '4\\cos^2(2x)']
  },
  {
    question: 'e^{\\sin(x)}',
    correct: 'e^{\\sin(x)} \\cdot \\cos(x)',
    options: ['e^{\\sin(x)} \\cdot \\cos(x)', '\\sin(x) \\cdot e^x', 'e^{x} \\cdot \\cos(x)', 'e^{\\cos(x)} \\cdot \\sin(x)', 'e^{x}']
  },
  {
    question: '\\ln(x^4 + 1)',
    correct: '\\dfrac{4x^3}{x^4 + 1}',
    options: ['\\dfrac{4x^3}{x^4 + 1}', '\\dfrac{1}{x^4 + 1}', '\\dfrac{4}{x^4 + 1}', '4x^3 \\cdot \\ln(x)', '\\dfrac{4x^2}{x^4 + 1}']
  },
  {
    question: 'e^{5x^2 + x}',
    correct: 'e^{5x^2 + x} \\cdot (10x + 1)',
    options: ['e^{5x^2 + x} \\cdot (10x + 1)', 'e^{5x^2 + x}', '5e^x', '5xe^{5x^2 + x}', 'e^{x^2 + x} \\cdot (10x + 1)']
  },
  {
    question: '\\sec(2x^3)',
    correct: '6x^2 \\sec(2x^3) \\cdot \\tan(2x^3)',
    options: ['6x^2 \\sec(2x^3) \\cdot \\tan(2x^3)', '6x \\sec(2x^3)', '2x^3 \\sec(2x)', '\\tan(2x^3)', '6\\sec(x^3)']
  },
  {
    question: '\\arcsin(4x)',
    correct: '\\dfrac{4}{\\sqrt{1 - 16x^2}}',
    options: ['\\dfrac{4}{\\sqrt{1 - 16x^2}}', '\\dfrac{1}{\\sqrt{1 - 16x^2}}', '\\dfrac{4x}{\\sqrt{1 - 4x^2}}', '\\dfrac{4}{1 - 4x^2}', '\\dfrac{16x}{\\sqrt{1 - 4x^2}}']
  },
  {
    question: '\\arctan(3x^2)',
    correct: '\\dfrac{6x}{1 + 9x^4}',
    options: ['\\dfrac{6x}{1 + 9x^4}', '\\dfrac{6x}{1 + x^4}', '\\dfrac{6x}{1 + 9x^2}', '\\dfrac{3x}{1 + 9x^2}', '\\dfrac{6x}{1 + x^2}']
  },
  {
    question: '\\cos(\\sqrt{x})',
    correct: '-\\dfrac{\\sin(\\sqrt{x})}{2\\sqrt{x}}',
    options: ['-\\dfrac{\\sin(\\sqrt{x})}{2\\sqrt{x}}', '-\\dfrac{\\sin(\\sqrt{x})}{\\sqrt{x}}', '\\dfrac{\\cos(\\sqrt{x})}{2\\sqrt{x}}', '-\\dfrac{\\cos(\\sqrt{x})}{2\\sqrt{x}}', '\\dfrac{\\cos(\\sqrt{x})}{x}']
  },
  {
    question: '\\cos(5x^3)',
    correct: '-15x^2 \\cdot \\sin(5x^3)',
    options: ['-15x^2 \\cdot \\sin(5x^3)', '15x^2 \\cdot \\cos(5x^3)', '-5x^2 \\cdot \\sin(5x^3)', '5x \\cdot \\cos(5x^3)', '-x^2 \\cdot \\sin(5x^3)']
  },
  {
    question: 'e^{x^4}',
    correct: '4x^3 \\cdot e^{x^4}',
    options: ['4x^3 \\cdot e^{x^4}', 'x^4 \\cdot e^x', 'e^{x^4}', '4xe^{x^4}', 'x^3 \\cdot e^{4x^3}']
  },
  {
    question: '\\ln(4x^2 + 1)',
    correct: '\\dfrac{8x}{4x^2 + 1}',
    options: ['\\dfrac{8x}{4x^2 + 1}', '\\dfrac{4}{4x^2 + 1}', '\\dfrac{2x}{4x^2 + 1}', '\\dfrac{8}{x^2 + 1}', 'x^2 \\ln(4x^2 + 1)']
  },
  {
    question: '\\sqrt{2x^3 + 5}',
    correct: '\\dfrac{3x^2}{\\sqrt{2x^3 + 5}}',
    options: ['\\dfrac{3x^2}{\\sqrt{2x^3 + 5}}', '\\dfrac{6x}{\\sqrt{2x^3 + 5}}', '3x \\sqrt{2x^3 + 5}', '\\dfrac{x^2}{\\sqrt{2x^3 + 5}}', '3x^2 \\sqrt{2x^3 + 5}']
  },
  {
    question: '\\ln(2x^2 + 3)',
    correct: '\\dfrac{4x}{2x^2 + 3}',
    options: ['\\dfrac{4x}{2x^2 + 3}', '\\dfrac{4}{x^2 + 3}', '\\dfrac{2x}{2x^2 + 3}', '4 \\ln(2x^2 + 3)', '\\dfrac{x}{2x^2 + 3}']
  },
  {
    question: 'x^2 \\cdot \\arcsin(x)',
    correct: '2x \\arcsin(x) + \\dfrac{x^2}{\\sqrt{1 - x^2}}',
    options: ['2x \\arcsin(x) + \\dfrac{x^2}{\\sqrt{1 - x^2}}', '2x \\arcsin(x) + \\dfrac{1}{\\sqrt{1 - x^2}}', 'x^2 \\arcsin(x)', '2x \\arcsin(x)', 'x \\arcsin(x) + \\dfrac{1}{\\sqrt{1 - x}}']
  },
  {
    question: '\\cos(4x^2 + x)',
    correct: '-(8x + 1) \\cdot \\sin(4x^2 + x)',
    options: ['-(8x + 1) \\cdot \\sin(4x^2 + x)', '(4x^2 + 1) \\cdot \\sin(4x^2 + x)', '-4x \\cdot \\cos(4x^2 + x)', '8x \\cdot \\sin(4x^2 + x)', '8x \\cos(4x^2 + x)']
  },
  {
    question: '5^{x^3 + 2x}',
    correct: '(3x^2 + 2) \\cdot 5^{x^3 + 2x} \\ln(5)',
    options: ['(3x^2 + 2) \\cdot 5^{x^3 + 2x} \\ln(5)', '5^{x^2 + x}', '3x^2 \\cdot 5^{x^2 + x} \\ln(5)', 'x \\cdot 5^{x^3 + 2x}', 'x^3 \\cdot 5^{x^2} \\ln(5)']
  },
  {
    question: '\\arctan(7x^2)',
    correct: '\\dfrac{14x}{1 + 49x^4}',
    options: ['\\dfrac{14x}{1 + 49x^4}', '\\dfrac{7x}{1 + 49x^4}', '\\dfrac{14x}{1 + x^2}', '\\dfrac{1}{1 + 49x^4}', '\\dfrac{14x}{\\sqrt{1 + 49x^4}}']
  },
  {
    question: '\\arcsin(4x)',
    correct: '\\dfrac{4}{\\sqrt{1 - 16x^2}}',
    options: ['\\dfrac{4}{\\sqrt{1 - 16x^2}}', '\\dfrac{1}{\\sqrt{1 - 4x^2}}', '\\dfrac{4}{\\sqrt{1 - 4x^2}}', '\\dfrac{4}{\\sqrt{1 + 16x^2}}', '\\dfrac{16}{\\sqrt{1 - 16x^2}}']
  },
  {
    question: '\\cos(6x^2 + 2x)',
    correct: '-(12x + 2) \\cdot \\sin(6x^2 + 2x)',
    options: ['-(12x + 2) \\cdot \\sin(6x^2 + 2x)', '12x \\cdot \\sin(6x^2 + 2x)', '-6x^2 \\cdot \\cos(6x^2 + 2x)', '(12x + 2) \\cdot \\cos(6x^2 + 2x)', '-x^2 \\cdot \\sin(6x^2 + 2x)']
  },
  {
    question: 'e^{5x^2 - 4x}',
    correct: '(10x - 4) \\cdot e^{5x^2 - 4x}',
    options: ['(10x - 4) \\cdot e^{5x^2 - 4x}', '5x \\cdot e^{5x^2 - 4x}', '2x \\cdot e^{5x^2 - 4x}', 'x^2 \\cdot e^{5x^2 - 4x}', '4 \\cdot e^{5x^2 - 4x}']
  },
  {
    question: '\\ln(x^5 + 3x)',
    correct: '\\dfrac{5x^4 + 3}{x^5 + 3x}',
    options: ['\\dfrac{5x^4 + 3}{x^5 + 3x}', '\\dfrac{5x^4 + 3}{x^4 + 3}', '\\dfrac{5x^3 + 1}{x^5 + 3x}', '\\dfrac{4x + 3}{x^5 + x}', '5x^4 \\ln(x^5 + 3x)']
  },
  {
    question: '\\ln(\\sin(x))',
    correct: '\\dfrac{\\cos(x)}{\\sin(x)}',
    options: ['\\dfrac{\\cos(x)}{\\sin(x)}', '-\\ln(\\sin(x))', '\\cos(x)', '\\dfrac{1}{\\sin(x)}', '-\\cos(x)']
  },
  {
    question: 'e^{\\tan(x)}',
    correct: 'e^{\\tan(x)} \\cdot \\sec^2(x)',
    options: ['e^{\\tan(x)} \\cdot \\sec^2(x)', 'e^{x} \\cdot \\sec^2(x)', '\\tan(x) \\cdot e^x', 'e^{x} \\cdot \\sin(x)', 'e^{\\sin(x)} \\cdot \\tan(x)']
  },
  {
    question: 'x^3 \\cdot e^{2x^2}',
    correct: '3x^2 e^{2x^2} + 4x^4 e^{2x^2}',
    options: ['3x^2 e^{2x^2} + 4x^4 e^{2x^2}', '6x^2 e^{2x^2} + 4x^4 e^{2x^2}', '6x^2 e^{2x^2} + 4x^3 e^{2x^2}', '4x^4 e^{2x^2}', '3x^2 e^{2x^2} + 4x^3 e^{2x^2}']
  },
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
    question: '\\csc^{-1}(x)',
    correct: '-\\dfrac{1}{|x| \\sqrt{x^2 - 1}}',
    options: ['-\\dfrac{1}{|x| \\sqrt{x^2 - 1}}', '\\dfrac{1}{|x| \\sqrt{x^2 - 1}}', '-\\dfrac{1}{\\sqrt{x^2 - 1}}', '\\dfrac{1}{x^2 - 1}', '\\dfrac{1}{\\sqrt{x^2 - 1}}']
  },
  {
    question: '\\sec^{-1}(x)',
    correct: '\\dfrac{1}{|x| \\sqrt{x^2 - 1}}',
    options: ['\\dfrac{1}{|x| \\sqrt{x^2 - 1}}', '-\\dfrac{1}{|x| \\sqrt{x^2 - 1}}', '\\dfrac{1}{\\sqrt{x^2 + 1}}', '\\dfrac{1}{|x| \\sqrt{1 - x^2}}', '-\\dfrac{x}{\\sqrt{x^2 - 1}}']
  },
  {
    question: '\\cot^{-1}(x)',
    correct: '-\\dfrac{1}{1 + x^2}',
    options: ['-\\dfrac{1}{1 + x^2}', '\\dfrac{1}{1 + x^2}', '\\dfrac{1}{1 - x^2}', '-\\dfrac{x}{1 + x^2}', '\\dfrac{x}{1 + x^2}']
  },
  {
    question: 'e^x',
    correct: 'e^x',
    options: ['e^x', 'xe^x', 'x', 'xe^{x-1}', 'e']
  },
  {
    question: '2^x',
    correct: '2^x \\ln(2)',
    options: ['2^x \\ln(2)', 'x\\cdot 2^x', '2^x \\cdot 2', '\\ln(x)', 'x^2 \\cdot \\ln(2)']
  },
  {
    question: '3^x',
    correct: '3^x \\ln(3)',
    options: ['3^x \\ln(3)', '3x^2', '3^x \\cdot 3', '\\ln(3)', 'x^3 \\cdot \\ln(3)']
  },
  {
    question: '\\ln(x)',
    correct: '\\dfrac{1}{x}',
    options: ['\\dfrac{1}{x}', '\\dfrac{1}{\\ln(x)}', '\\ln(x)', '\\ln(x^2)', '\\dfrac{1}{x \\ln(x)}']
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
    correct: '2x \\cdot 5^{x^2} \\ln(5)',
    options: ['2x \\cdot 5^{x^2} \\ln(5)', '5^{x^2}', '2x^2 \\ln(5)', '5^{x} \\ln(x)', 'x\\cdot 5^{x^2}']
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
let answered = false;

function setupQuestion() {
  let currentFunction;
  do {
    currentFunction = functions[Math.floor(Math.random() * functions.length)];
  } while (currentFunction === previousFunction);

  previousFunction = currentFunction;
  answered = false;
  document.getElementById('function').innerHTML = `\\( ${currentFunction.question} \\)`;
  document.getElementById('nextQuestionBtn').style.display = 'none'; // Hide Next Question button
  MathJax.typesetPromise();  // Trigger MathJax rendering

  generateOptions(currentFunction.correct, currentFunction.options);
}

function generateOptions(correctAnswer, allOptions) {
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);

  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.innerHTML = `\\(${option}\\)`;
    button.onclick = () => checkAnswer(option, correctAnswer, button);
    optionsContainer.appendChild(button);
  });

  MathJax.typesetPromise();
}

function checkAnswer(selectedOption, correctAnswer, button) {
  if (answered) return; // Prevent selecting multiple answers
  answered = true;

  const scoreSheet = document.querySelector('#scoreSheet tbody');
  const row = document.createElement('tr');
  const answerCell = document.createElement('td');
  const changeCell = document.createElement('td');
  const scoreCell = document.createElement('td');

  answerCell.innerHTML = `\\(${correctAnswer}\\)`;

  if (selectedOption === correctAnswer) {
    score += 20;
    changeCell.textContent = '+20';
    changeCell.className = 'green';
    button.style.backgroundColor = '#4CAF50';  // Correct answer highlight
  } else {
    score = Math.max(0, score - 5);
    changeCell.textContent = '-5';
    changeCell.className = 'red';
    button.style.backgroundColor = 'red';  // Incorrect answer highlight
  }

  scoreCell.textContent = score;
  scoreCell.className = 'score';
  scoreCell.style.textAlign = "center";

  row.appendChild(answerCell);
  row.appendChild(changeCell);
  row.appendChild(scoreCell);
  scoreSheet.appendChild(row);

  // Immediately render LaTeX in the "Correct Answer" column
  MathJax.typesetPromise([answerCell]).then(() => {
    console.log('MathJax typeset for the correct answer.');
  }).catch(err => console.log('MathJax typesetting error:', err));

  if (scoreSheet.rows.length > 10) {
    scoreSheet.deleteRow(1);  // Keep the header, delete the top data row
  }

  document.getElementById('nextQuestionBtn').style.display = 'inline';  // Show Next Question button
}

document.getElementById('nextQuestionBtn').addEventListener('click', setupQuestion);

setupQuestion();
