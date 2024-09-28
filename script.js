const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});




const text = 'Hey !!, Are You Ready ?, I hope you will like it...';
let index = 0;
const speed = 150; // typing speed in milliseconds

window.onload = () => {
  document.getElementById('website-content').style.display = 'none'; // Hide website content initially
  typeWriter();
};

function typeWriter() {
  if (index < text.length) {
    document.getElementById('typewriter-text').innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      document.getElementById('typewriter-screen').style.display = 'none'; // Hide typewriter screen after typing
      document.getElementById('website-content').style.display = 'block'; // Show website content
    }, 1000);
  }
}

