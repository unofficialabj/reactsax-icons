# ReactSax Icons

ReactSax Icons is a simple and flexible icon library for React, allowing customization of icon size and color.

## Installation

Install the package using npm or yarn:

```bash
npm install reactsax-icons
#or
yarn add reactsax-icons
```

### Example usage

```jsx
import { HomeIcon } from "reactsax-icons";

function App() {
  return (
    <div>
      <h1>Welcome to ReactSax Icons!</h1>
      <p>Customize your icons with ease.</p>
      <HomeIcon size={32} color="green" />
    </div>
  );
}
```

### Theme Customization

```jsx
import { HomeIcon, ThemeProvider } from "reactsax-icons";

const App: React.FC = () => {
  const theme = {
    size: 32,
    color: "blue",
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <HomeIcon />
        <HomeIcon size={48} color="red" />
      </div>
    </ThemeProvider>
  );
};

export default App;
```
