import { Box, Typography } from "@mui/material";
import Question from "./Question";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React from 'react'

interface SingleChoiceQuestionProps {
  question: SingleChoiceQuestionData;
  userAnswer?: string[];
  onChange?: (change: { value: any; isFilled: boolean }) => void;
  showAnswers?: boolean;
  index: number;
  userPoints?: number;
}

function UseRadioGroup({
  answers,
  userAnswer = [],
  showAnswers,
  onChange,
}: {
  answers: SingleChoiceQuestionData["answers"];
  userAnswer: SingleChoiceQuestionProps["userAnswer"];
  onChange: SingleChoiceQuestionProps["onChange"];
  showAnswers: boolean;
}) {
  const handleChange = (ev: React.SyntheticEvent) => {
    const target: any = ev.target;
    if (onChange) {
      onChange({
        value: [target.value],
        isFilled: true,
      });
    }
  };
  return (
    <RadioGroup name="use-radio-group">
      {answers.map((answer) => {
        let color: "success" | "error" | undefined;
        if (showAnswers) {
          color = answer.isCorrect ? "success" : "error";
        }

        const isUserSelected = userAnswer.includes(answer.key);
        const textDecoration =
          showAnswers && !answer.isCorrect && isUserSelected
            ? "line-through"
            : undefined;

        let labelColor: "success" | "error" | undefined;
        if (showAnswers) {
          if (answer.isCorrect) {
            labelColor = "success";
          } else if (isUserSelected) {
            labelColor = "error";
          }
        }

        return (
          <FormControlLabel
            onChange={handleChange}
            checked={isUserSelected}
            label={answer.text}
            sx={{
              "& .MuiFormControlLabel-label": (theme) => ({
                color: labelColor && theme.palette[labelColor].main,
                textDecoration,
              }),
            }}
            control={<Radio color={color} value={answer.key} />}
          />
        );
      })}
    </RadioGroup>
  );
}

const SingleChoiceQuestion = ({
  question,
  userAnswer,
  showAnswers,
  index,
  onChange,
  userPoints,
}: SingleChoiceQuestionProps) => {
  return (
    <Box gap={0} display={"flex"} flexDirection={"column"}>
      <Question
        index={index}
        question={question.question}
        userPoints={userPoints}
      />
      <UseRadioGroup
        answers={question.answers}
        onChange={onChange}
        userAnswer={userAnswer}
        showAnswers={showAnswers || false}
      />
    </Box>
  );
};

export default SingleChoiceQuestion;
