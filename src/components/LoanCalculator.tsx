import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate] = useState(1.0);
  
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [overpayment, setOverpayment] = useState(0);

  useEffect(() => {
    const monthlyRate = interestRate / 100;
    const totalAmount = loanAmount * (1 + monthlyRate * loanTerm);
    const monthly = totalAmount / loanTerm;
    const over = totalAmount - loanAmount;

    setMonthlyPayment(monthly);
    setTotalPayment(totalAmount);
    setOverpayment(over);
  }, [loanAmount, loanTerm, interestRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background p-4 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold text-foreground">Кредитный калькулятор</h1>
          <p className="text-muted-foreground">Рассчитайте параметры вашего займа онлайн</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Calculator" size={24} className="text-primary" />
              Параметры займа
            </CardTitle>
            <CardDescription>Настройте сумму и срок кредита</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Сумма займа</label>
                <span className="text-2xl font-bold text-primary">{formatCurrency(loanAmount)}</span>
              </div>
              <Slider
                value={[loanAmount]}
                onValueChange={(value) => setLoanAmount(value[0])}
                min={5000}
                max={100000}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5 000 ₽</span>
                <span>100 000 ₽</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Срок займа</label>
                <span className="text-2xl font-bold text-primary">{loanTerm} {loanTerm === 1 ? 'месяц' : loanTerm < 5 ? 'месяца' : 'месяцев'}</span>
              </div>
              <Slider
                value={[loanTerm]}
                onValueChange={(value) => setLoanTerm(value[0])}
                min={1}
                max={24}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 месяц</span>
                <span>24 месяца</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Percent" size={20} className="text-muted-foreground" />
                  <span className="text-sm font-medium">Процентная ставка</span>
                </div>
                <span className="text-lg font-semibold">{interestRate}% в месяц</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Wallet" size={24} className="text-primary" />
              Ежемесячный платеж
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">{formatCurrency(monthlyPayment)}</p>
              <p className="text-sm text-muted-foreground">Платеж каждый месяц</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileText" size={24} className="text-primary" />
              Детали займа
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon name="Banknote" size={20} className="text-primary" />
                </div>
                <span className="font-medium">Сумма займа</span>
              </div>
              <span className="text-xl font-bold">{formatCurrency(loanAmount)}</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                </div>
                <span className="font-medium">Переплата</span>
              </div>
              <span className="text-xl font-bold text-destructive">{formatCurrency(overpayment)}</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon name="DollarSign" size={20} className="text-primary" />
                </div>
                <span className="font-medium">Итого к возврату</span>
              </div>
              <span className="text-xl font-bold">{formatCurrency(totalPayment)}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Shield" size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Надежная финансовая компания</h3>
                  <p className="text-sm opacity-90">Мы предоставляем прозрачные условия кредитования с фиксированной ставкой</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Icon name="Clock" size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Быстрое одобрение</h3>
                  <p className="text-sm opacity-90">Решение по заявке в течение 15 минут, деньги на карту за 10 минут</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Без скрытых комиссий</h3>
                  <p className="text-sm opacity-90">Все условия прозрачны, никаких дополнительных платежей</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button 
          size="lg" 
          className="w-full text-lg h-14 shadow-lg hover:shadow-xl transition-all"
          onClick={() => window.open('https://tuchkafinance.ru/applicationform', '_blank')}
        >
          <Icon name="FileCheck" size={24} className="mr-2" />
          Оформить займ онлайн
        </Button>

        <p className="text-xs text-center text-muted-foreground px-4">
          Нажимая кнопку, вы соглашаетесь с условиями предоставления услуг и обработкой персональных данных
        </p>
      </div>
    </div>
  );
}
