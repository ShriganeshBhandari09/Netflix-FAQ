var questionAnswerArrayOfObj = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

function loadQuestionAndAnswers() {
  for (let i = 0; i < questionAnswerArrayOfObj.length; i++) {
    // console.log(faqBody);
    var faqList = document.createElement("div");
    faqList.innerHTML = `
    <section class="faq">
      <div class="questions-box">
      <button onclick="visibleAnswer(${i})">
        <h2 id="question-${i + 1}">${questionAnswerArrayOfObj[i].question}</h2>
    <span
          id="mybutton-${i + 1}"
          class="material-symbols-outlined"
        >
          <i class="fa-solid fa-plus fa-lg"></i>
        </span>
        </button>
      </div>
      <div class="answer-box">
        <div class="faq-answer" id="answer-${i + 1}">
        <p>${questionAnswerArrayOfObj[i].answer}</p></div>
      </div>
    </section>`;
    //console.log(faqList)
    document.getElementById("faq-box").appendChild(faqList);
  }
}

function visibleAnswer(i) {
  // var displayAnswer = document.getElementById(`answer-${i + 1}`);
  // var mybutton = document.getElementById(`mybutton-${i + 1}`);
  if (document.getElementById(`answer-${i + 1}`).style.display === "inline") {
    document.getElementById(`answer-${i + 1}`).style.display = "none";
    document.getElementById(
      `mybutton-${i + 1}`
    ).innerHTML = `<i class="fa-solid fa-plus fa-lg"></i>`;
    console.log("radha");
  } else {
    document.getElementById(`answer-${i + 1}`).style.display = "inline";
    document.getElementById(
      `mybutton-${i + 1}`
    ).innerHTML = `<i class="fa-solid fa-xmark fa-lg"></i>`;
    console.log("keerthi");
  }
}
// var faqBox = document.createElement("div")
// faqBox.appendChild(faqBody)

// // document.body.appendChild(faqBody)

// // console.log(question);
// // console.log(answer);

// // console.log(faqBody)

// var displayAnswer = document.getElementById("answer");
// var mybutton = document.getElementById("mybutton");
