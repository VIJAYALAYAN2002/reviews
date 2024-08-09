const reviews = [
  {
    id: 1,
    name: 'Robert Downey Jr',
    job: 'Iron Man',
    img: 'person1.jpg',
    text: "This game is incredibly addictive and fun. I find myself playing for hours trying to improve my score."
  },
  {
    id: 2,
    name: 'Chris Evans',
    job: 'Captain',
    img: 'person2.jpg',
    text:"The gameplay is simple yet engaging. It's perfect for a quick break from my daily routine."
},
  {
    id: 3,
    name: 'Chris Hemsworth',
    job: 'Thor',
    img: 'person3.jpg',
    text: "It’s a great test of luck and skill. Easy to pick up, but challenging to master."
},
  {
    id: 4,
    name: 'Elizabeth Olsen',
    job: 'Wanda Maximoff',
    img: 'person4.jpg',
    text: "I enjoy the clean interface and the straightforward mechanics. It's a great way to pass the time." 
},
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});