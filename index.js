const isPhoneNumber = (number) => {
    const mobileNumberPattern = /^\d{10}$/;
    return mobileNumberPattern.test(number);
}

module.exports = isPhoneNumber;