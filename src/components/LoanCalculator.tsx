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
    <div className="min-h-screen bg-transparent flex items-start sm:items-center justify-center px-2.5 pt-0 pb-0 sm:p-6 md:p-8">
      <div className="w-full max-w-xl">
        <div className="bg-card rounded-[1rem] sm:rounded-[1.75rem] shadow-lg sm:shadow-2xl p-4 sm:p-8 md:p-12 space-y-5 sm:space-y-10 border border-border/50">
          <div className="space-y-4 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0">
              <h2 className="text-base sm:text-2xl md:text-3xl font-medium text-foreground leading-tight">Выберите сумму</h2>
              <div className="text-left sm:text-right">
                <span className="text-xl sm:text-3xl md:text-4xl font-semibold text-primary">{formatAmount(loanAmount)} руб</span>
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3 touch-none">
              <div className="py-1.5">
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

          <div className="space-y-4 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-0">
              <h2 className="text-base sm:text-2xl md:text-3xl font-medium text-foreground leading-tight">Выберите срок</h2>
              <div className="text-left sm:text-right">
                <span className="text-xl sm:text-3xl md:text-4xl font-semibold text-primary">{loanTerm} {getMonthText(loanTerm)}</span>
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3 touch-none">
              <div className="py-1.5">
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
            className="w-full h-14 sm:h-16 text-base sm:text-xl rounded-full shadow-md hover:shadow-lg transition-all font-medium active:scale-[0.97] touch-manipulation bg-primary hover:bg-primary/90"
            onClick={() => window.open('https://tuchkafinance.ru/applicationform', '_blank')}
          >
            Получить деньги
          </Button>

          <div className="space-y-2 sm:space-y-3 pt-0.5 sm:pt-4 bg-secondary/30 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 pb-3 sm:pb-4 -mb-4 sm:-mb-8 md:-mb-12 rounded-b-[1rem] sm:rounded-b-[1.75rem]">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-xs sm:text-base">Оплатить до:</span>
              <span className="font-semibold text-foreground text-xs sm:text-base">{paymentDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-xs sm:text-base">Платеж раз в месяц:</span>
              <span className="font-bold text-primary text-sm sm:text-lg">{formatAmount(Math.round(monthlyPayment))} руб</span>
            </div>
            <a 
              href="#" 
              className="inline-block text-primary hover:underline text-xs sm:text-sm mt-1 touch-manipulation font-medium"
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