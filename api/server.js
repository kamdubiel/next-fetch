var express = require("express");
var app = express();

const JSON = {
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
};

app.get("/url", (req, res, next) => {
  res.json(JSON);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
