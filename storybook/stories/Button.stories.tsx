// storybook/stories/Button.stories.js
import { storiesOf } from '@storybook/react-native';
import { MyButton } from './Button';

storiesOf('Button', module).add('default', () => (
  <MyButton text="Click me" onPress={() => alert('Pressed!')} />
));