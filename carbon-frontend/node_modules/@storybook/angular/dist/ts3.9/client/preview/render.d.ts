import { StoryFn } from '@storybook/addons';
import { StoryFnAngularReturnType } from './types';
import { Parameters } from './types-6-0';
export default function render({ storyFn, showMain, forceRender, parameters, }: {
    storyFn: StoryFn<StoryFnAngularReturnType>;
    showMain: () => void;
    forceRender: boolean;
    parameters: Parameters;
}): void;
