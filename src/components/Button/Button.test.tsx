import React from "react";
// import { render } from "@testing-library/react";
import { render, screen } from '@testing-library/react';

import Button from "./Button";

// import { Button } from '../index';

describe('Button Component', () => {
  beforeEach(() => {
    render(<Button size="DEFAULT" variant="PURPLE_SECONDARY">Button</Button>);

  });

  it('should render the button', () => {
    screen.getByText('Button');
  });
});
