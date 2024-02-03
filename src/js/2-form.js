const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', (event) => {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
   
    const emailValue = feedbackForm.elements.email.value;
    const messageValue = feedbackForm.elements.message.value;

    const feedbackState = {
      email: emailValue,
      message: messageValue,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const savedState = localStorage.getItem('feedback-form-state');

  if (savedState) {
    const parsedState = JSON.parse(savedState);

    feedbackForm.elements.email.value = parsedState.email || '';
    feedbackForm.elements.message.value = parsedState.message || '';
  }
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();

  console.log({
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  });
});