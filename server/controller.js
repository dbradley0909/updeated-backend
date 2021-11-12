



module.exports = {
  getCompliment:
    ("/api/compliment",
    (req, res) => {
      const compliments = [
        "Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
      ];

      // choose random compliment
      let randomIndex = Math.floor(Math.random() * compliments.length);
      let randomCompliment = compliments[randomIndex];

      res.status(200).send(randomCompliment);
    }),
    getFortune: ("/api/fortune", (req, res) => {
      const fortune = ["A beautiful, smart, and loving person will be coming into your life.",
               "A feather in the hand is better than a bird in the air.",
               "A friend asks only for your time not your money.",
               "A friend is a present you give yourself.",
               "Dedicate yourself with a calm mind to the task at hand.",
               "A short pencil is usually better than a long memory any day."
      ];
      
        // client choose random fortune
      let randomFortuneTwo = Math.floor(Math.random() * fortune.length);
      let randomfortune = fortune[randomFortuneTwo];
    
      res.status(200).send(randomfortune);
    }),
    
    postSubmit: ("/api/submit", (req, res) => {
   
      res.status(200).send(console.log('save info'));
      
    }),
    
    
    getSubmit2: ("/api/submit2", (req, res) => {
      const submitButton = ['yes', 'no','yes', 'no','yes', 'yes'];
      
      
      // client choose random fortune
      let randomsubmitButton = Math.floor(Math.random() * submitButton.length);
      let randomsubmit = submitButton[randomsubmitButton];
    
      res.status(200).send(randomsubmit);
      
    }),

    getSubmit3: ("/api/submit3", (req, res) => {
      const randomInspo = ['When you have a dream, you’ve got to grab it and never let go.', 
      '“There is nothing impossible to they who will try',
      'The bad news is time flies. The good news is you’re the pilot.'
    ];
      
      let randomInspoButton = Math.floor(Math.random() * randomInspo.length);
      let randomInspoB = randomInspo[randomInspoButton];
    
      res.status(200).send(randomInspoB);
      
    }),

  };