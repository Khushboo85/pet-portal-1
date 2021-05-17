
import { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";
// import toJson from "enzyme-to-json";

it("renders without crashing", () => {
    shallow(<App/>);
  });
  

