import { Box } from '@mui/material'
import Question from './Question';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface SingleQuestionProps {
    question: SingleQuestionData;
    userAnswer: string;
    onChange?: (change: { value: any, isFilled: boolean }) => void;
    showAnswers?: boolean;
    index: number
}

function UseRadioGroup({ answers, userAnswer, showAnswers, onChange }:
    {
        answers: SingleQuestionData["answers"]
        userAnswer: SingleQuestionProps["userAnswer"]
        onChange: SingleQuestionProps["onChange"]
        showAnswers: boolean
    }) {

    const handleChange = (ev: React.SyntheticEvent) => {
        const target: any = ev.target;
        if (onChange) {
            onChange({
                value: target.value,
                isFilled: true
            })
        }
    }
    return (
        <RadioGroup name="use-radio-group"  >
            {answers.map((answer) => {
                let color: "success" | "error" | undefined;
                if (showAnswers) {
                    color = answer.isCorrect ? "success" : "error";
                }

                const isUserSelected = userAnswer === answer.key;
                const textDecoration = showAnswers && !answer.isCorrect && isUserSelected ?
                    "line-through" : undefined;

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
                    label={answer.text}
                    sx={{
                        '& .MuiFormControlLabel-label': (theme) => ({
                            color: labelColor && theme.palette[labelColor].main,
                            textDecoration,
                        })
                    }}
                    control={<Radio color={color} value={answer.key} />}
                />
            })}
        </RadioGroup>
    );
}


const SingleQuestion = ({ question, userAnswer, showAnswers, index, onChange }: SingleQuestionProps) => {
    return (
        <Box gap={0} display={"flex"} flexDirection={"column"}>
            <Question index={index} question={question.question} />
            <UseRadioGroup
                answers={question.answers}
                onChange={onChange}
                userAnswer={userAnswer}
                showAnswers={showAnswers || false} />
        </Box>
    );
};

export default SingleQuestion;