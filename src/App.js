import React, { useEffect } from "react";
import List from "./components/List/List";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import useSeries from "./hooks/useSeries";

function App() {
  const [data, isLoading, isError, fetchSeries] = useSeries();
  useEffect(() => {
    fetchSeries();
  }, []);
  return (
    <React.Fragment>
      {/* <Navigation /> */}
      <Container>
        <List {...{ data, isLoading, isError }} />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
