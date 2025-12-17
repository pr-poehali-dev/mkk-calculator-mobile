import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const Code = () => {
  const [copied, setCopied] = useState(false);

  const codeContent = `<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.loan-calculator-wrapper {
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #eff6ff 0%, #e0f2fe 50%, #ecfeff 100%);
  width: 100%;
  padding: 20px 0;
}

.calculator-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 10px;
}

.calculator-card {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  padding: 30px 20px;
  border: 1px solid rgba(147, 197, 253, 0.6);
}

.section {
  margin-bottom: 35px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 8px;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

.section-value {
  font-size: 24px;
  font-weight: 700;
  color: #52b4ff;
}

.slider-container {
  margin-bottom: 10px;
}

.slider {
  width: 100%;
  height: 8px;
  background: linear-gradient(to right, #52b4ff 0%, #52b4ff var(--value), #e2e8f0 var(--value), #e2e8f0 100%);
  border-radius: 10px;
  outline: none;
  -webkit-appearance: none;
  position: relative;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: #52b4ff;
  border: 4px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  background: #52b4ff;
  border: 4px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #718096;
  margin-top: 8px;
}

.button {
  width: 100%;
  background: #52b4ff;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 18px 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(82, 180, 255, 0.35);
  font-family: 'Montserrat', sans-serif;
}

.button:hover {
  background: #3da0ff;
  box-shadow: 0 6px 16px rgba(82, 180, 255, 0.45);
  transform: translateY(-2px);
}

.button:active {
  transform: scale(0.97);
}

.info-section {
  background: linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%);
  padding: 20px;
  border-radius: 0 0 20px 20px;
  margin: 25px -20px -30px -20px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
}

.info-label {
  color: #718096;
}

.info-value {
  font-weight: 700;
  color: #2c3e50;
}

.info-value.highlight {
  color: #52b4ff;
  font-size: 16px;
}

.info-link {
  color: #52b4ff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  margin-top: 8px;
  display: inline-block;
}

.info-link:hover {
  text-decoration: underline;
}

@media (min-width: 640px) {
  .calculator-card {
    padding: 40px 35px;
  }
  
  .section-title {
    font-size: 22px;
  }
  
  .section-value {
    font-size: 32px;
  }
  
  .button {
    padding: 20px 40px;
    font-size: 20px;
  }
  
  .info-row {
    font-size: 16px;
  }
  
  .info-value.highlight {
    font-size: 18px;
  }
}
</style>

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

<div class="loan-calculator-wrapper">
  <div class="calculator-container">
    <div class="calculator-card">
      <div class="section">
        <div class="section-header">
          <div class="section-title">Выберите сумму</div>
          <div class="section-value" id="amountValue">32 000 руб</div>
        </div>
        <div class="slider-container">
          <input type="range" min="1000" max="50000" step="1000" value="32000" class="slider" id="amountSlider" style="--value: 63%">
        </div>
        <div class="slider-labels">
          <span>1 000 руб</span>
          <span>50 000 руб</span>
        </div>
      </div>
      
      <div class="section">
        <div class="section-header">
          <div class="section-title">Выберите срок</div>
          <div class="section-value" id="termValue">12 месяцев</div>
        </div>
        <div class="slider-container">
          <input type="range" min="6" max="12" step="1" value="12" class="slider" id="termSlider" style="--value: 100%">
        </div>
        <div class="slider-labels">
          <span>6 месяцев</span>
          <span>12 месяцев</span>
        </div>
      </div>
      
      <button class="button" onclick="window.open('https://tuchkafinance.ru/applicationform', '_blank')">
        Получить деньги
      </button>
      
      <div class="info-section">
        <div class="info-row">
          <span class="info-label">Оплатить до:</span>
          <span class="info-value" id="paymentDate">17 декабря 2026 г.</span>
        </div>
        <div class="info-row">
          <span class="info-label">Платеж раз в месяц:</span>
          <span class="info-value highlight" id="monthlyPayment">2 987 руб</span>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const amountSlider = document.getElementById('amountSlider');
  const termSlider = document.getElementById('termSlider');
  const amountValue = document.getElementById('amountValue');
  const termValue = document.getElementById('termValue');
  const monthlyPayment = document.getElementById('monthlyPayment');
  const paymentDate = document.getElementById('paymentDate');
  
  const interestRate = 1.0;
  
  function formatNumber(num) {
    return num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');
  }
  
  function getMonthText(num) {
    if (num === 1) return 'месяц';
    if (num < 5) return 'месяца';
    return 'месяцев';
  }
  
  function calculatePayment() {
    const amount = parseInt(amountSlider.value);
    const term = parseInt(termSlider.value);
    
    const monthlyRate = interestRate / 100;
    const totalAmount = amount * (1 + monthlyRate * term);
    const monthly = totalAmount / term;
    
    amountValue.textContent = formatNumber(amount) + ' руб';
    termValue.textContent = term + ' ' + getMonthText(term);
    monthlyPayment.textContent = formatNumber(Math.round(monthly)) + ' руб';
    
    const date = new Date();
    date.setMonth(date.getMonth() + term);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    paymentDate.textContent = date.toLocaleDateString('ru-RU', options);
    
    const amountPercent = ((amount - 1000) / (50000 - 1000)) * 100;
    amountSlider.style.setProperty('--value', amountPercent + '%');
    
    const termPercent = ((term - 6) / (12 - 6)) * 100;
    termSlider.style.setProperty('--value', termPercent + '%');
  }
  
  amountSlider.addEventListener('input', calculatePayment);
  termSlider.addEventListener('input', calculatePayment);
  
  calculatePayment();
})();
</script>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Код калькулятора для Tilda
          </h1>
          <p className="text-gray-600 mb-6">
            Скопируйте код ниже и вставьте его в блок "HTML-код" (T123) на вашем сайте Tilda
          </p>
          
          <div className="flex gap-3 mb-4">
            <Button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Скопировано!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Скопировать код
                </>
              )}
            </Button>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs sm:text-sm text-gray-100 whitespace-pre-wrap break-words">
              <code>{codeContent}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Инструкция по установке
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Откройте редактор страницы в Tilda</li>
            <li>Добавьте блок "HTML-код" (T123)</li>
            <li>Нажмите кнопку "Скопировать код" выше</li>
            <li>Вставьте код в блок HTML</li>
            <li>Сохраните и опубликуйте страницу</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Code;