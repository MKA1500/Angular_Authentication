import React, { useEffect } from 'react';
import './App.scss';
import MyCalendar from './components/MyCalendar';
import products from "./products.json";
import { Grid, GridColumn } from "@progress/kendo-react-grid";

function App() {
  // const handleClick = React.useCallback(() => {
  //   window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  // }, []);

  useEffect(() => {
    console.log('hello', products);
  }, []);

  return (
    <div className="App">
      <MyCalendar />
      <Grid data={products}>
        <GridColumn field="ProductName" />
        <GridColumn field="UnitPrice" />
        <GridColumn field="UnitsInStock" />
        <GridColumn field="Discontinued" />
      </Grid>
    </div>
  );
}

export default App;
