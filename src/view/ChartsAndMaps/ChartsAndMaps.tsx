import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import WorldMap from "./components/WorldMap";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartsAndMaps = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["cases"],
    queryFn: async () => {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
      );
      return await response.json();
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading || isError || !data)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p>Loading..</p>
      </div>
    );

  const casesData = {
    //adding .slice(0,300) because we are getting 1200 items from the api which is taking time to load in the graph causing the screen to be stuck, hence slicing it
    // this can be solved if there is pagination feature enabled in the backend where we can query data lazyly and display it to the users without any issues.
    labels: Object.keys(data?.cases)
      .map((key) => key)
      .slice(0, 300),
    datasets: [
      {
        label: "Dataset",
        data: Object.values(data?.cases)
          .map((val) => val)
          .slice(0, 300),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500,
        },
      },
    },
  };
  const chartWidth = casesData.labels.length * 25;
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 p-4">
      <h1 className="text-2xl">Covid cases graph chart</h1>
      <div className="m-auto h-[400px] w-[100%] overflow-y-hidden border border-black lg:w-[80%]">
        <Line
          data={casesData}
          options={options}
          width={chartWidth}
          height={400}
        />
      </div>
      <h1 className="text-2xl">World cases</h1>
      <WorldMap />
      <div />
    </div>
  );
};

export default ChartsAndMaps;
