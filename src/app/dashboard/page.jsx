'use client';

import { useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { endpoints } from '@/services/api/index';
import { Chart } from '@/components/Chart';
import Pagination from '@/components/Pagination';

export default function Dashboard() {
	const [offsetProducts, setOffsetProducts] = useState(0);
	const PRODUCT_LIMIT = 20;

	// Get and display products
	const { data: products } = useFetch(endpoints.products.getProducts(PRODUCT_LIMIT, offsetProducts));
	const { data: allProducts } = useFetch(endpoints.products.getProducts(0, 0));
	const totalProducts = allProducts?.length;

	// Display chart
	const categoryNames = allProducts?.map((product) => product.category);
	const categoryCount = categoryNames?.map((category) => category.name);
	const countOcurrences = (arr) => arr?.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

	let data = null;
	{
		categoryCount
			? (data = {
					labels: Object.keys(countOcurrences(categoryCount)),
					datasets: [
						{
							label: 'Categories',
							data: Object.values(countOcurrences(categoryCount)),
							borderWidth: 2,
							backgroundColor: ['#EC7063 ', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
						},
					],
			  })
			: null;
	}

	return (
		<>
			<Chart data={data} />
			<div className='flex flex-col'>
				{products ? <Pagination totalItems={totalProducts} itemsPerPage={PRODUCT_LIMIT} setOffset={setOffsetProducts} neighbours={2} /> : null}
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
							<table className='min-w-full divide-y divide-gray-200'>
								<thead className='bg-gray-50'>
									<tr>
										<th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Name
										</th>
										<th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Category
										</th>
										<th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Price
										</th>
										<th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Id
										</th>
										<th scope='col' className='relative px-6 py-3'>
											<span className='sr-only'>Edit</span>
										</th>
										<th scope='col' className='relative px-6 py-3'>
											<span className='sr-only'>Delete</span>
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									{products?.map((product) => (
										<tr key={`Product-Item-${product.id}`}>
											<td className='px-6 py-4 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='flex-shrink-0 h-10 w-10'>
														<img className='h-10 w-10 rounded-full' src={product.images[0]} alt='Product Image' />
													</div>
													<div className='ml-4'>
														<div className='text-sm font-medium text-gray-900'>{product.title}</div>
													</div>
												</div>
											</td>
											<td className='px-6 py-4 whitespace-nowrap'>
												<div className='text-sm text-gray-900'>{product.category.name}</div>
											</td>
											<td className='px-6 py-4 whitespace-nowrap'>
												<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>${product.price}</span>
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{product.id}</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
												<a href='/' className='text-indigo-600 hover:text-indigo-900'>
													Edit
												</a>
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
												<a href='/' className='text-indigo-600 hover:text-indigo-900'>
													Delete
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
