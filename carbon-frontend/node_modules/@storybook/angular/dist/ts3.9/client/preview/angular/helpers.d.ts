import { StoryFn } from '@storybook/addons';
import { StoryFnAngularReturnType } from '../types';
declare global {
    interface Window {
        NODE_ENV: 'string' | 'development' | undefined;
    }
}
export declare const renderNgApp: (storyFn: StoryFn<StoryFnAngularReturnType>, forced: boolean) => void;
