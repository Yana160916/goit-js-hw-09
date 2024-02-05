document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  if (feedbackForm) { 
    feedbackForm.addEventListener('input', (event) => {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        const emailValue = feedbackForm.elements.email.value.trim();
        const messageValue = feedbackForm.elements.message.value.trim();

        const feedbackState = {
          email: emailValue,
          message: messageValue,
        };

          

        if (emailValue !== '' && messageValue !== '') {
          localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
        }
      }
    });

    const savedState = localStorage.getItem('feedback-form-state');

    if (savedState) {
      const parsedState = JSON.parse(savedState);

      feedbackForm.elements.email.value = parsedState.email || '';
      feedbackForm.elements.message.value = parsedState.message || '';
    }

    feedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailValue = feedbackForm.elements.email.value.trim();
const messageValue = feedbackForm.elements.message.value.trim();

      localStorage.removeItem('feedback-form-state');
      feedbackForm.reset();

      console.log({
        email: feedbackForm.elements.email.value,
        message: feedbackForm.elements.message.value,
      });
    });
  } 
});