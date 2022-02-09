import { ComponentMeta, ComponentStory } from "@storybook/react";
import LargeVideo from "./LargeVideo";

export default { title: 'components/sections/largevideo', component: LargeVideo } as ComponentMeta<typeof LargeVideo>

const videoData: LargeVideoData = {
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
};

const Template: ComponentStory<typeof LargeVideo> = (args) => <LargeVideo {...args} />

export const Video = Template.bind({})
Video.args = { data: videoData }

export const Video2 = Template.bind({})
Video2.args = {
    data: {
        ...videoData, poster: {
            id: "2",
            attributes: {
                mime: "image/jpeg",
                url: "https://image.freepik.com/darmowe-zdjecie/piekne-ujecie-lasu-z-wysokimi-zielonymi-drzewami_181624-20615.jpg"
            }
        }
    }
}