import Cars, { Car } from "../src/components/Cars"; //Cars is default export, Car is named export
import LightBulb from "../src/components/LightBulb";

const carsData = [
  {
    name: "Lamborghini",
  },
  {
    name: "Hyundai",
  },
  {
    name: "Ferrari",
  },
  {
    name: "Tucson",
  },
];
const App = () => {
  return (
    <div>
      {carsData.map((car, index) => {
        return <Cars name={car.name} key={index} />;
      })}
      {/* <LightBulb /> */}
    </div>
  );
};

export default App;
