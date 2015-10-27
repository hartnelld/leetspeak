describe('translate', function() {
  it("replaces every 'e' with '3'", function() {
    expect(translate("bee")).to.equal("b33");
  });
  it("replaces every 'I' with '1'", function() {
    expect(translate("I like Ike")).to.equal("1 lik3 1k3");
  });
  it("replaces every 'o' with '0'", function() {
    expect(translate("boo")).to.equal("b00");
  });
  it("replaces every 's' with 'z' unless first letter", function() {
    expect(translate("_suss")).to.equal("suzz");
  });
  it("replace complex input with correct translation", function() {
    expect(translate("Don't you love these BDD exercises? I do!")).to.equal("D0n't y0u l0v3 th3s3 BDD 3x3rcis3s? 1 d0!");
  });
});
