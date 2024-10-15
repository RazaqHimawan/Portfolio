<script lang="ts">
import { Bar } from 'svelte-chartjs';

import {
  Chart,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

export let labels: string[] = [];
export let value: number[] = [];

const colorPalette = [
  'rgba(125, 179, 222, 1)', // Light blue
  'rgba(205, 148, 181, 1)', // Pink
  'rgba(255, 205, 77, 1)', // Yellow
  'rgba(122, 157, 76, 1)', // Green
  'rgba(184, 77, 62, 1)', // Red
  'rgba(188, 98, 174, 1)', // Purple
  'rgba(127, 127, 127, 1)', // Grey
  'rgba(77, 77, 77, 1)', // Dark grey
  'rgba(255, 127, 0, 1)', // Orange
  'rgba(51, 153, 255, 1)', // Sky blue
];

const getColors = (length: number) => {
  return Array.from({ length }, (_, index) => ({
    backgroundColor: colorPalette[index % colorPalette.length],
  }));
};

const datasetColors = getColors(value.length);

const data = {
  labels: labels,
  datasets: [
    {
      label: '% of Votes',
      data: value,
      backgroundColor: datasetColors.map((color) => color.backgroundColor),
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        color: '#333',
      },
    },
    y: {
      grid: {
        color: '#333',
      },
    },
  },
};

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
</script>

<Bar
  {data}
  {options}
/>
