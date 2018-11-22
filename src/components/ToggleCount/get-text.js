const { REACT_APP_DISCOUNT_1, REACT_APP_DISCOUNT_2, REACT_APP_DISCOUNT_3 } = process.env;

export default (count, initialLimit) => {
  let text = '';

  if (initialLimit) {
    text = `It's fun right?`;
  }
  if (count > 10) {
    text = `EASY, YOU'LL BREAK IT!`;
  }
  if (count > 20) {
    text = `Or you will break a record...`;
  }
  if (count > 30) {
    text = `Not sure if that record would matter tho.`;
  }
  if (count > 40) {
    text = `Maybe it's gonna get you something.`;
  }
  if (count > 50) {
    text = `Omg what if it gives you a discount?!`;
  }
  if (count > 60) {
    text = `LOL would someone give a discount for toggling a switch?`;
  }
  if (count === 69) {
    text = 'Niiiiiiiice.';
  }
  if (count > 70) {
    text = `Nah, a discount doesn't make sense ... right?`;
  }
  if (count > 80) {
    text = `But damn if you're not persistent...`;
  }
  if (count > 90) {
    text = `Ok, you're getting close now...`;
  }
  if (count >= 100) {
    text = `Use the "${REACT_APP_DISCOUNT_1}" code for a 10% discount! 😁️`;
  }
  if (count > 150) {
    text = `DAMN IT! The discount wasn't enough?!`;
  }
  if (count > 200) {
    text = `Trust me, there are no more discounts...`;
  }
  if (count > 250) {
    text = `I told you to trust me. Am I a joke to you?`;
  }
  if (count >= 300) {
    text = `*sigh* fine. You deserved it. Use "${REACT_APP_DISCOUNT_2}" for 15% off.`;
  }
  if (count >= 350) {
    text = `But that's it, we're done here. Don't even bother`;
  }
  if (count > 400) {
    text = `You're gonna do this forever right? I'm fine with that.`;
  }
  if (count > 450) {
    text = `I AM TRYING TO SLEEP HERE!`;
  }
  if (count >= 500) {
    text = `You. Are. Bananas. Here's the final discount code. Enjoy 20% off with "${REACT_APP_DISCOUNT_3}"`;
  }

  return text;
};
