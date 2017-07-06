<?php


class Cup
{
    private $amount;
    public function getCup()
    {
        return $this->amount;
    }
    public function setCup($amount)
    {
        $this->amount = $amount;
    }
}

class CoffeeMachine
{
    public function cookCoffee(Cup $amount)
    {
        $amount->setCup(rand(0, 100));
        return $amount;
    }
}

class Barista{

    public function makemecoffee(Cup $cup, CoffeeMachine $coffee)
    {
        return $coffee->cookCoffee($cup);
    }
}

Route::get('/', function () {

  $cup = new Cup();
  $coffee = new CoffeeMachine();
  $deneme = new Barista();
  $filledcup = $deneme->makemecoffee($cup, $coffee);
  var_dump($filledcup);

});
