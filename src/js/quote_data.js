const data = [
    {
        "author": "Alice Walker",
        "quote": "The most common way people give up their power is by thinking they don't have any.",
        "category": "Motivational"
    },
    {
        "author": "Walt Disney",
        "quote": "The way to get started is to quite talking and begin doing.",
        "category": "Motivational"
    },
    {
        "author": "Mark Zuckerberug",
        "quote": "The question I ask myself almost every day is, 'Am I doing the most important thing I could be doing?'",
        "category": "Motivational"
    },
    {
        "author": "Amelia Earhart",
        "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "category": "Motivational"
    },
    {
        "author": "Lao Tzu",
        "quote": "When I let go of what I am, I become what I might be.",
        "category": "Motivational"
    },
    {
        "author": "Travis Kalanick",
        "quote": "Fear is the disease. Hustle is the antidote",
        "category": "Motivational"
    },
    {
        "author": "Florence Nightingale",
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "category": "Motivational"
    },
    {
        "author": "Paul Graham",
        "quote": "It's hard to do a really good job on anything you don't think about in the shower.",
        "category": "Motivational"
    },
    {
        "author": "Biz Stone",
        "quote": "Timing, perseverance, and 10 years of trying will eventually make you look like an overnight success.",
        "category": "Motivational"
    },
    {
        "author": "Stephen Covey",
        "quote": "I am not a product of my circumstances. I am a product of my decisions.",
        "category": "Motivational"
    },
    {
        "author": "Abraham Lincoln",
        "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
        "category": "Life"
    },
    {
        "author": "Grandma Moses",
        "quote": "Life is what we make it, always has been, always will be.",
        "category": "Life"
    },
    {
        "author": "Charles Dickens",
        "quote": "Life is made of ever so many partings welded together.",
        "category": "Life"
    },
    {
        "author": "Charles R. Swindoll",
        "quote": "Life is 10% what happens to us and 90% how we reat to it.",
        "category": "Life"
    },
    {
        "author": "John Lennon",
        "quote": "Life is what happens when you're busy making other plans.",
        "category": "Life"
    },
    {
        "author": "Muhammad Ali",
        "quote": "Don't count the days, make the days count.",
        "category": "Life"
    },
    {
        "author": "Steve Jobs",
        "quote": "Your time is limited, don't waste it living someone else's life.",
        "category": "Life"
    },
    {
        "author": "Ralph Waldo Emerson",
        "quote": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        "category": "Life"
    },
    {
        "author": "Elbert Hubbard",
        "quote": "When life gives you lemons, make lemonade.",
        "category": "Life"
    },
    {
        "author": "John Wooden",
        "quote": "Do not let making a living prevent you from making a life.",
        "category": "Life"
    },
    {
        "author": "Isaac Asimov",
        "quote": "The saddest aspect of life right now is that science fiction gathers knowledge faster than society gathers wisdom.",
        "category": "Sci Fi"
    },
    {
        "author": "Philip K. Dick",
        "quote": "Reality is that which, when you stop believing in it, doesn't go away.",
        "category": "Sci Fi"
    },
    {
        "author": "Arthur C. Clarke",
        "quote": "Any sufficiently advanced technology is indistinguishable from magic.",
        "category": "Sci Fi"
    },
    {
        "author": "Ursula K. Le Guin",
        "quote": "Science fiction is not predictive; it is descriptive.",
        "category": "Sci Fi"
    },
    {
        "author": "Ray Bradbury",
        "quote": "I don’t try to describe the future. I try to prevent it.",
        "category": "Sci Fi"
    },
    {
        "author": "H.G. Wells",
        "quote": "The past is but the beginning of a beginning, and all that is and has been is but the twilight of the dawn.",
        "category": "Sci Fi"
    },
    {
        "author": "Frank Herbert",
        "quote": "The mystery of life isn't a problem to solve, but a reality to experience.",
        "category": "Sci Fi"
    },
    {
        "author": "William Gibson",
        "quote": "The future is already here—it's just not very evenly distributed.",
        "category": "Sci Fi"
    },
    {
        "author": "Octavia E. Butler",
        "quote": "In order to rise from its own ashes, a phoenix first must burn.",
        "category": "Sci Fi"
    },
    {
        "author": "Neil Gaiman",
        "quote": "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        "category": "Sci Fi"
    },
    {
        "author": "Socrates",
        "quote": "The only true wisdom is in knowing you know nothing.",
        "category": "Philosophy"
    },
    {
        "author": "Aristotle",
        "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
        "category": "Philosophy"
    },
    {
        "author": "Immanuel Kant",
        "quote": "Act only according to that maxim whereby you can at the same time will that it should become a universal law.",
        "category": "Philosophy"
    },
    {
        "author": "Friedrich Nietzsche",
        "quote": "He who has a why to live can bear almost any how.",
        "category": "Philosophy"
    },
    {
        "author": "Jean-Jacques Rousseau",
        "quote": "Man is born free, and everywhere he is in chains.",
        "category": "Philosophy"
    },
    {
        "author": "John Locke",
        "quote": "The end of law is not to abolish or restrain, but to preserve and enlarge freedom.",
        "category": "Philosophy"
    },
    {
        "author": "Plato",
        "quote": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        "category": "Philosophy"
    },
    {
        "author": "Albert Camus",
        "quote": "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.",
        "category": "Philosophy"
    },
    {
        "author": "Søren Kierkegaard",
        "quote": "Life can only be understood backwards; but it must be lived forwards.",
        "category": "Philosophy"
    },
    {
        "author": "Epictetus",
        "quote": "We cannot choose our external circumstances, but we can always choose how we respond to them.",
        "category": "Philosophy"
    },
    {
        "author": "Mark Twain",
        "quote": "The human race has one really effective weapon, and that is laughter.",
        "category": "Funny"
    },
    {
        "author": "Oscar Wilde",
        "quote": "Life is too important to be taken seriously.",
        "category": "Funny"
    },
    {
        "author": "Groucho Marx",
        "quote": "I refuse to join any club that would have me as a member.",
        "category": "Funny"
    },
    {
        "author": "George Carlin",
        "quote": "Think off-center.",
        "category": "Funny"
    },
    {
        "author": "Terry Pratchett",
        "quote": "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
        "category": "Funny"
    },
    {
        "author": "Robin Williams",
        "quote": "Why do they call it rush hour when nothing moves?",
        "category": "Funny"
    },
    {
        "author": "Mae West",
        "quote": "You only live once, but if you do it right, once is enough.",
        "category": "Funny"
    },
    {
        "author": "Will Rogers",
        "quote": "Everything is funny, as long as it’s happening to somebody else.",
        "category": "Funny"
    },
    {
        "author": "Dave Barry",
        "quote": "A sense of humor is a measurement of the extent to which we realize that we are trapped in a world almost totally devoid of reason. Laughter is how we express the anxiety we feel at this knowledge.",
        "category": "Funny"
    },
    {
        "author": "W. C. Fields",
        "quote": "I am free of all prejudice. I hate everyone equally.",
        "category": "Funny"
    },
    {
        "author": "Albert Einstein",
        "quote": "The more I learn, the more I realize how much I don't know.",
        "category": "Knowledge"
    },
    {
        "author": "Socrates",
        "quote": "True knowledge exists in knowing that you know nothing.",
        "category": "Knowledge"
    },
    {
        "author": "Isaac Newton",
        "quote": "If I have seen further, it is by standing on the shoulders of giants.",
        "category": "Knowledge"
    },
    {
        "author": "Confucius",
        "quote": "Real knowledge is to know the extent of one’s ignorance.",
        "category": "Knowledge"
    },
    {
        "author": "Carl Sagan",
        "quote": "Somewhere, something incredible is waiting to be known.",
        "category": "Knowledge"
    },
    {
        "author": "Malcolm X",
        "quote": "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
        "category": "Knowledge"
    },
    {
        "author": "Plato",
        "quote": "Knowledge which is acquired under compulsion obtains no hold on the mind.",
        "category": "Knowledge"
    },
    {
        "author": "Francis Bacon",
        "quote": "Knowledge is power.",
        "category": "Knowledge"
    },
    {
        "author": "Bertrand Russell",
        "quote": "The fundamental cause of the trouble is that in the modern world, the stupid are cocksure while the intelligent are full of doubt.",
        "category": "Knowledge"
    },
    {
        "author": "Neil deGrasse Tyson",
        "quote": "The good thing about science is that it's true whether or not you believe in it.",
        "category": "Knowledge"
    },
    {
        "author": "Clark Gable",
        "quote": "Frankly, my dear, I don't give a damn.",
        "category": "Movie"
    },
    {
        "author": "Marlon Brando",
        "quote": "I'm gonna make him an offer he can't refuse.",
        "category": "Movie"
    },
    {
        "author": "Marilyn Monroe",
        "quote": "Imperfection is beauty, madness is genius, and it's better to be absolutely ridiculous than absolutely boring.",
        "category": "Movie"
    },
    {
        "author": "Tom Hanks",
        "quote": "Life is like a box of chocolates; you never know what you're gonna get.",
        "category": "Movie"
    },
    {
        "author": "Arnold Schwarzenegger",
        "quote": "I'll be back.",
        "category": "Movie"
    },
    {
        "author": "Judy Garland",
        "quote": "There's no place like home.",
        "category": "Movie"
    },
    {
        "author": "Jack Nicholson",
        "quote": "Here's Johnny!",
        "category": "Movie"
    },
    {
        "author": "Leonardo DiCaprio",
        "quote": "I'm the king of the world!",
        "category": "Movie"
    },
    {
        "author": "Audrey Hepburn",
        "quote": "The most important thing is to enjoy your life, to be happy—it's all that matters.",
        "category": "Movie"
    },
    {
        "author": "Clint Eastwood",
        "quote": "Go ahead, make my day.",
        "category": "Movie"
    }
];