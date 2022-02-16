import { ComponentMeta, ComponentStory } from "@storybook/react";
import CoursePage from "./CoursePage";

export default { title: 'components/sections/coursepage', component: CoursePage } as ComponentMeta<typeof CoursePage>

const coursePageData = {
    courseSections:
        [
            {
                __typename: "ComponentSectionsLargeImage",
                title: "Flowers",
                description: "From the dazzling bluebells that cover ancient woodland in the spring to the bright meadows bursting with buttercups in the summer, wild flowers are what make our woods so beautiful, while providing precious nectar for invertebrates. ",
                width: "1000px",
                height: "100%",
                media: {
                    id: "1",
                    attributes: {
                        alternativeText: "pink flowers",
                        mime: "picture/jpeg",
                        url: "https://images.pexels.com/photos/2534523/pexels-photo-2534523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                },
            },
            {
                __typename: "ComponentSectionsLargeVideo",
                title: "Flowers",
                description: "From the dazzling bluebells that cover ancient woodland in the spring to the bright meadows bursting with buttercups in the summer, wild flowers are what make our woods so beautiful, while providing precious nectar for invertebrates. ",
                media: {
                    id: "1",
                    attributes: {
                        mime: "video/mp4",
                        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    }
                },
            },
            {
                __typename: "ComponentSectionsRichText",
                content: "Thailand is the country in Southeast Asia most visited by tourists, and for good reason. You can find almost anything here: thick jungle as green as can be, crystal blue waters that feel more like a warm bath than a swim in the ocean, and food that can curl your nose hairs while dancing across your taste buds. Exotic, yet safe; cheap, yet equipped with every modern amenity you need, there is something for every interest and every price bracket, from beach front backpacker bungalows to some of the best luxury hotels in the world. And despite the heavy flow of tourism, Thailand retains its quintessential Thai-ness, with a culture and history all its own and a carefree people famed for their smiles and their fun-seeking sanuk lifestyle. Many travellers come to Thailand and extend their stay well beyond their original plans and others never find a reason to leave. "
            }
        ]
};

const Template: ComponentStory<typeof CoursePage> = (args) => <CoursePage {...args} />

export const Course = Template.bind({})
Course.args = { course: coursePageData }