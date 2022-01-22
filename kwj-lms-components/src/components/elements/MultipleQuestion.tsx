import { Box, Typography } from '@mui/material'
import Question from './Question';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


interface MultipleQuestionProps {
    question: MultiQuestionData;
    onChange?: (change: { value: any, isFilled: boolean }) => void;
    showAnswers?: boolean;
    userAnswer: string[];
}

function CheckboxLabels({ answers, userAnswer, showAnswers, onChange }:
    {
        answers: MultiQuestionData["answers"]
        userAnswer: MultipleQuestionProps["userAnswer"]
        onChange: MultipleQuestionProps["onChange"]
        showAnswers: boolean
    }
) {
    const handleChange = (ev: React.SyntheticEvent, checked: boolean) => {
        const target: any = ev.target;
        if (!onChange) { return }
        if (checked) {
            const newValue = !userAnswer ? [target.value] : [...userAnswer, target.value];
            onChange({
                value: newValue,
                isFilled: true
            })
        } else {
            const newValue = !userAnswer ? [] : userAnswer.filter((val) => val !== target.value);
            onChange({
                value: newValue,
                isFilled: newValue.length > 0
            })
        }
    }

    return (
        <FormGroup>
            {answers.map((answer) => {
                let color: "success" | "error" | undefined;
                if (showAnswers) {
                    color = answer.isCorrect ? "success" : "error";
                }

                const isUserSelected = userAnswer?.includes(answer.key);
                const textDecoration = showAnswers && !answer.isCorrect && isUserSelected ?
                    "line-through" :
                    undefined;

                let labelColor: "success" | "error" | undefined;
                if (showAnswers) {
                    if (answer.isCorrect) {
                        labelColor = "success"
                    } else if (isUserSelected) {
                        labelColor = "error"
                    }
                }

                return <FormControlLabel
                    onChange={handleChange}
                    checked={isUserSelected}
                    control={<Checkbox color={color} value={answer.key} />}
                    sx={{
                        '& .MuiFormControlLabel-label': (theme) => ({
                            color: labelColor && theme.palette[labelColor].main,
                            textDecoration,
                        })
                    }}
                    label={answer.text}
                />;
            })}
        </FormGroup>
    );
}


const MultipleQuestion = ({ question, userAnswer, showAnswers, onChange }: MultipleQuestionProps) => {
    return (
        <Box gap={0} display={"flex"} flexDirection={"column"}>
            <Question question={question.question} />
            <CheckboxLabels
                onChange={onChange}
                answers={question.answers}
                userAnswer={userAnswer}
                showAnswers={showAnswers || false}
            />
        </Box>
    );
};

export default MultipleQuestion;