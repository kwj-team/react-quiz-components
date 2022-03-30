import { Box, Typography } from '@mui/material'
import Question from './Question';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


interface MultiChoiceQuestionProps {
    question: MultiChoiceQuestionData;
    onChange?: (change: { value: any, isFilled: boolean }) => void;
    showAnswers?: boolean;
    userAnswer: string[];
    index: number
}

function CheckboxLabels({ answers, userAnswer, showAnswers, onChange }:
    {
        answers: MultiChoiceQuestionData["answers"]
        userAnswer: MultiChoiceQuestionProps["userAnswer"]
        onChange: MultiChoiceQuestionProps["onChange"]
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
        <FormGroup >
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



const MultiChoiceQuestion = ({ question, userAnswer, showAnswers, index, onChange }: MultiChoiceQuestionProps) => {
    return (
        <Box gap={0} display={"flex"} flexDirection={"column"}>
            <Question index={index} question={question.question} />
            <CheckboxLabels
                onChange={onChange}
                answers={question.answers}
                userAnswer={userAnswer}
                showAnswers={showAnswers || false}
            />
        </Box>
    );
};

export default MultiChoiceQuestion;