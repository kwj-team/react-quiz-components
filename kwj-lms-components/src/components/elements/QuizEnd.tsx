import { Box, Button, Typography, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from 'react'

interface QuizEndProps {
  onRepeatQuiz: () => void;
  onFinish: () => void;

  quizEndingText?: string;
  finalButton?: {
    //   url: string;
    label: string;
  };
  // isRepeatable?: boolean;
  remainingAttempts: number;
}

export const QuizEnd = ({
  quizEndingText,
  // isRepeatable = false,
  onRepeatQuiz,
  onFinish,
  finalButton,
  remainingAttempts,
}: QuizEndProps) => {
  const { t } = useTranslation();

  return (
    <Box
      gap={2}
      display={"flex"}
      flexDirection={"column"}
      textAlign={"center"}
      marginBottom={5}
      marginTop={3}
    >
      <Typography variant="h5" component="div">
        {quizEndingText || t("quiz.quizEnd.invisibleResult")}
      </Typography>
      <Box gap={1} marginTop={3} display="flex" justifyContent="flex-end">
        {remainingAttempts > 0 ? (
          <Button variant="contained" size="large" onClick={onRepeatQuiz}>
            {t("quiz.button.label.repeat")}
          </Button>
        ) : (
          <DisabledButton />
        )}
        <Button variant="contained" size="large" onClick={onFinish}>
          {(finalButton && finalButton.label) || t("quiz.button.label.final")}
        </Button>
      </Box>
    </Box>
  );
};

const DisabledButton = () => {
  const { t } = useTranslation();
  return (
    <Tooltip title="The number of allowed attempts has been exhausted">
      <span>
        <Button variant="contained" disabled size="large">
          {t("quiz.button.label.repeat")}
        </Button>
      </span>
    </Tooltip>
  );
};
