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
    refetchOnWindowFocus:false
  });

  if (isLoading || isError || !data) return <></>;


  const casesData = {
    labels: Object.keys(data?.cases).map((key) => key).slice(0, 300),
    datasets: [
      {
        label: "Dataset",
        data: Object.values(data?.cases).map((val) => val).slice(0, 300),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: false, // Allows fixed sizing
    maintainAspectRatio: false, // Allows us to control height/width
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Optionally hide vertical grid lines
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
    <div className="w-full flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl">Covid cases graph chart</h1>
      <div
        className="m-auto mt-10 w-[100%] lg:w-[80%] h-[400px] overflow-y-hidden border border-black"
      >
        <Line data={casesData} options={options} width={chartWidth} height={400} />
      </div>
      <WorldMap/>
    </div>
  );
};

export default ChartsAndMaps;