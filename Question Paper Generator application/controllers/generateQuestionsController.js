const sampleQuestions = require("./../SampleData.js");

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const generateQuestions = (req, res) => {
  const shuffledQuestions = shuffleArray(sampleQuestions); // shuffling questions each time so that we don't get same set of questions
  const totalMarks = parseInt(req.query.totalMarks);
  const difficultyDistribution = JSON.parse(req.query.difficultyDistribution);
  const easyQuestionsCount = Math.round(
    (difficultyDistribution.easy * totalMarks) / 100
  );
  const mediumQuestionsCount = Math.round(
    (difficultyDistribution.medium * totalMarks) / 100
  );
  const hardQuestionsCount =
    totalMarks - easyQuestionsCount - mediumQuestionsCount;
  const easyQuestions = sampleQuestions
    .filter((question) => question.difficulty === "Easy")
    .slice(0, easyQuestionsCount);
  const mediumQuestions = sampleQuestions
    .filter((question) => question.difficulty === "Medium")
    .slice(0, mediumQuestionsCount);
  const hardQuestions = sampleQuestions
    .filter((question) => question.difficulty === "Hard")
    .slice(0, hardQuestionsCount);
  const questionPaper = [
    ...easyQuestions,
    ...mediumQuestions,
    ...hardQuestions,
  ];
  res.json(questionPaper);
};

// Example usage assuming Express framework

module.exports = generateQuestions;
