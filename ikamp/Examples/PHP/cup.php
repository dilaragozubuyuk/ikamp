<?php
class Cup
{
    private $amount;
    public function getCupAmount()
    {
        return $this->amount;
    }
    public function setCupAmount($amount)
    {
        $this->amount = $amount;
    }
}

class CoffeeMachine
{
    public function cookCoffee(Cup $cup)
    {
        $cup->setCupAmount(rand(0, 100));
        return $cup;
    }
}

class Barista
{
    public function makeMeCoffee(Cup $cup, CoffeeMachine $coffeeMachine)
    {
        return $coffeeMachine->cookCoffee($cup);
    }
}

Route::get('/', function () {
    $cup = new Cup();
    $coffee = new CoffeeMachine();
    $barista = new Barista();
    $filledCup = $barista->makemecoffee($cup, $coffee);
    print_r($filledCup);
});
