import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

var misoptions = {
	responsive: true,
	animation: true,
	plugins: {
		title: {
			display: true,
			text: 'Products per Category',
			font: {
				size: 20,
			},
		},
		legend: {
			display: true,
		},
	},
};

var defaultData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
        {
            label: 'Products per Category',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(0, 220, 195, 0.5)'
        }
    ]
};


export function Chart({ data }) {
	return (
		<>
			<div className='flex flex-col justify-center items-center w-full lg:h-[calc(100vh-172px)]' >
				{
					data 
						? <Bar className='flex justify-center items-center w-full m-4 max-w-3xl' data={data} options={misoptions} />
						: <Bar className='flex justify-center items-center w-full m-4 max-w-3xl' data={defaultData} options={misoptions} />
				}
			</div>
		</>
	)
}
