import { ComponentMeta, ComponentStory } from "@storybook/react";
import RichText from "./RichText";

export default { title: 'components/sections/richtext', component: RichText } as ComponentMeta<typeof RichText>

const textData: RichTextData = {
    __typename: "ComponentSectionsRichText",
    content: "Thailand is the country in Southeast Asia most visited by tourists, and for good reason. You can find almost anything here: thick jungle as green as can be, crystal blue waters that feel more like a warm bath than a swim in the ocean, and food that can curl your nose hairs while dancing across your taste buds. Exotic, yet safe; cheap, yet equipped with every modern amenity you need, there is something for every interest and every price bracket, from beach front backpacker bungalows to some of the best luxury hotels in the world. And despite the heavy flow of tourism, Thailand retains its quintessential Thai-ness, with a culture and history all its own and a carefree people famed for their smiles and their fun-seeking sanuk lifestyle. Many travellers come to Thailand and extend their stay well beyond their original plans and others never find a reason to leave. "
};

const Template: ComponentStory<typeof RichText> = (args) => <RichText {...args} />

export const Text = Template.bind({})
Text.args = { data: textData }

