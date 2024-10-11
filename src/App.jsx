function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const theme = createTheme({
    palette: {
      mode: "light",
      typography: {
        fontFamily: 'cursive',
      primary: {
        main: "#07273d",
      },
      // primary: {
      //   main: "#fff",
      // },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <p>dsffjsgkjskfgkfdg</p>
    </ThemeProvider>
  );
}

export default App;