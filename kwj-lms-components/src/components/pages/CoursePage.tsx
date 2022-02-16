import { Box } from '@mui/material'
import LargeVideo from '../sections/LargeVideo';
import LargeImage from '../sections/LargeImage';
import RichText from '../sections/RichText';

type CoursePageData = Pick<CourseData,
    "title" | "description" | "courseSections">

interface CourseProps {
    course: CoursePageData
}

const CoursePage = ({ course }: CourseProps) => {

    return (
        <Box gap={0} display={"flex"} flexDirection={"column"}>
            {course.courseSections.map((section, i) => getComponent(section, i))}
        </Box>
    );
};

export default CoursePage;

function getComponent(data: CourseComponentData, i: number) {
    switch (data.__typename) {
        case "ComponentSectionsLargeVideo":
            return <LargeVideo data={data} key={i} />
        case "ComponentSectionsLargeImage":
            return <LargeImage data={data} key={i} />
        case "ComponentSectionsRichText":
            return <RichText data={data} key={i} />
        default:
            return null
    }
} 