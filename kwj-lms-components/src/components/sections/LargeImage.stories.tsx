import { ComponentMeta, ComponentStory } from "@storybook/react";
import LargeImage from "./LargeImage";

export default { title: 'components/sections/largeimage', component: LargeImage } as ComponentMeta<typeof LargeImage>

const imageData: LargeImageData = {
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
};

const Template: ComponentStory<typeof LargeImage> = (args) => <LargeImage {...args} />

export const Image = Template.bind({})
Image.args = { data: imageData }
