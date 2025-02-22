// Needs this
import React from 'react';
import type { Preview } from '@storybook/react';

import { Global } from '@emotion/react';

import { GlobalStyle } from '../src/shared/global';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Global styles={GlobalStyle} />
        <Story />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
