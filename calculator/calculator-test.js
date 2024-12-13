
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100,
    years: 5,
    rate: 2
  };
  expect(calculateMonthlyPayment(values)).toEqual("1.75");
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 114,
    years: 5,
    rate: 2
  };
  expect(calculateMonthlyPayment(values)).toEqual("2.00");
});

/// etc
