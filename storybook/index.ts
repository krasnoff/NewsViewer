import { getStorybookUI, configure } from '@storybook/react-native';

// Automatically import all stories
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
