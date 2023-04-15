function sendMail(contactForm) {
  emailjs.send("service_24vhpd6", "rosie", {
    "project_request": contactForm.projectsummary.value,
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value
  })
    .then(
      function sendEmailResponse(response) {
        console.log('SUCCESS!', response);
      },
      function sendEmailError(error) {
        console.log('FAILED', error);
      }
    )
  return false
}
