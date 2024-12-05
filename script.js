// https://script.google.com/macros/s/AKfycbzFieRoKeMQyMiw9xFkoIEKmmq4ErAchGNgzDTt2FOwagkj1iUSbZDu85JqFLD3jLXp/exec


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzFieRoKeMQyMiw9xFkoIEKmmq4ErAchGNgzDTt2FOwagkj1iUSbZDu85JqFLD3jLXp/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thank you for subscribing  I got your info!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


