// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { shallow, mount } from "enzyme";
// import Account from "./Account";
import App from "./App";
// import toJson from "enzyme-to-json";

it("renders without crashing", () => {
    shallow(<App />);
  });
  

