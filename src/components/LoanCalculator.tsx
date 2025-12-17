import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(32000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate] = useState(1.0);
  
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [paymentDate, setPaymentDate] = useState('');

  useEffect(() => {
    const monthlyRate = interestRate / 100;
    const totalAmount = loanAmount * (1 + monthlyRate * loanTerm);
    const monthly = totalAmount / loanTerm;

    setMonthlyPayment(monthly);

    const date = new Date();
    date.setMonth(date.getMonth() + loanTerm);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    setPaymentDate(date.toLocaleDateString('ru-RU', options));
  }, [loanAmount, loanTerm, interestRate]);

  const formatAmount = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };

  const getMonthText = (num: number) => {
    if (num === 1) return 'месяц';
    if (num < 5) return 'месяца';
    return 'месяцев';
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center py-4 px-3 sm:p-6 md:p-8">
      <div className="w-full max-w-xl">
        <div className="bg-card rounded-[1.25rem] sm:rounded-[2rem] shadow-xl sm:shadow-2xl p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-10">
          <div className="space-y-5 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-normal text-foreground leading-tight">Выберите сумму</h2>
              <div className="text-left sm:text-right">
                <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground">{formatAmount(loanAmount)} руб</span>
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3 touch-none">
              <div className="py-2">
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={1000}
                  max={50000}
                  step={1000}
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
                <span>1 000 руб</span>
                <span>50 000 руб</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-normal text-foreground leading-tight">Выберите срок</h2>
              <div className="text-left sm:text-right">
                <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground">{loanTerm} {getMonthText(loanTerm)}</span>
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3 touch-none">
              <div className="py-2">
                <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  min={6}
                  max={12}
                  step={1}
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
                <span>6 месяцев</span>
                <span>12 месяцев</span>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="w-full h-16 sm:h-16 text-lg sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all font-normal active:scale-[0.98] touch-manipulation"
            onClick={() => window.open('https://tuchkafinance.ru/applicationform', '_blank')}
          >
            Получить деньги
          </Button>

          <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-0">
              <span className="text-muted-foreground text-sm sm:text-lg">Оплатить до:</span>
              <span className="font-semibold text-foreground text-sm sm:text-lg">{paymentDate}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-0">
              <span className="text-muted-foreground text-sm sm:text-lg">Платеж раз в месяц:</span>
              <span className="font-semibold text-foreground text-sm sm:text-lg">{formatAmount(Math.round(monthlyPayment))} руб</span>
            </div>
            <a 
              href="#" 
              className="inline-block text-primary hover:underline text-xs sm:text-base mt-1 sm:mt-2 touch-manipulation"
              onClick={(e) => e.preventDefault()}
            >
              Правила и тарифы
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}