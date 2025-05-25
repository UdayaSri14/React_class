import ButtonComponent from "./components/button/button.js";
import { Heading1, Heading2, Heading3 } from "./components/button/heading.js";
import { ListParentOrdered, ListParentUnordered} from "./components/button/list.js"
import { ImageComponent } from "./Images/Image.js";
const App = () => {
  return (
    <div>
      <ImageComponent/>
      <h1>Hello World</h1>
      <ButtonComponent/>
      <h1>Udaya</h1>
      <h2>UdayaSri</h2>
      <Heading1/>
      <Heading2/>
      <Heading3/>
      <ListParentOrdered/>
      <ListParentUnordered/>
    </div>
  );
};
export default App;
