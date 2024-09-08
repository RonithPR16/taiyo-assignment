import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";

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
  });

  if (isLoading || isError || !data) return <></>;

  console.log(Object.values(data?.cases).map((val) => val),'here');
  

  const casesData = {
    labels: Object.keys(data?.cases).map((key) => key).splice(0,50),
    datasets: [
      {
        label: "Dataset",
        data: Object.values(data?.cases).map((val) => val).splice(0,50),
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
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        overflowY: "auto",
        border: "1px solid black",
      }}
    >
      <Line data={casesData} options={options} width={chartWidth} height={750} />
    </div>
  );
};

export default ChartsAndMaps;