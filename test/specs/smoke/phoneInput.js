const phoneInputSel = require('../../../data/selectors.json').phoneInput;
const phoneInputExp = require('../../../data/expected.json').phoneInput;
const phoneInputInput = require('../../../data/input.json').phoneInput;

describe('Phone Input', function () {
  before(() => {
    browser.url('https://catamphetamine.gitlab.io/react-phone-number-input/');
  });

  it(`should verify that without country select output value = "${phoneInputExp.withoutCountrySelect}"`, function () {
    const inputField = $(phoneInputSel.withoutCountrySelect);
    inputField.setValue(phoneInputInput.phoneIf);
    expect(inputField.getValue()).eq(phoneInputExp.withoutCountrySelect);
  });

  it(`should verify that national format output value = "${phoneInputExp.nationalFormat}"`, function () {
    const inputField = $$(phoneInputSel.nationalFormat)[0];
    inputField.setValue(phoneInputInput.phoneIf);
    expect(inputField.getValue()).eq(phoneInputExp.nationalFormat);
  });

  it(`should verify that international output value = "${phoneInputExp.international}"`, function () {
    const inputField = $$(phoneInputSel.international)[0];
    inputField.setValue(phoneInputInput.phoneIf);
    expect(inputField.getValue()).eq(phoneInputExp.international);
  });

  it(`should verify that with country calling code output value = "${phoneInputExp.withCountryCallingCode}"`, function () {
    const inputField = $(phoneInputSel.withCountryCallingCode);
    inputField.setValue(phoneInputInput.phoneIf);
    expect(inputField.getValue()).eq(phoneInputExp.withCountryCallingCode);
  });

  it(`should verify that with default caontry US output value = "${phoneInputExp.defaultCountryUS}"`, function () {
    const inputField = $(phoneInputSel.defaultCountryUS);
    inputField.setValue(phoneInputInput.phoneIf);
    expect(inputField.getValue()).eq(phoneInputExp.defaultCountryUS);
  });

  it(`should verify that with No Country output value = "${phoneInputExp.noCountry}"`, function () {
    const inputField = $(phoneInputSel.noCountry);
    inputField.setValue(phoneInputInput.phoneIf);
    expect(inputField.getValue()).eq(phoneInputExp.noCountry);
  });

  it(`should verify that user is bale to select ${phoneInputInput.selectedCountry}`, function () {
    const selectCountryDropdown = $(phoneInputSel.addingCountrySelect);
    selectCountryDropdown.selectByVisibleText(phoneInputInput.selectedCountry);
    const selectedCountry = $(phoneInputSel.selectedCountry);
    expect(selectedCountry.isDisplayed()).to.be.true;
  });
});
