import '../index.css'
import { Link } from 'react-router-dom'

export default function Home() {
	const Array = ['Home', 'Produk', 'Kontak']
	const Array2 = [10, 11, 12, 13, 14]
	const Array3 = [
		{ name: 'budi', umur: 20, ttl: 'Bandung, 20 april 1991' },
		{ name: 'abidah', umur: 25, ttl: 'jakarta, 12 mei 1998' },
	]

	return (
		<div>
			<div className='flex gap-5 '>
				{Array2.map((e) => (
					<div>{e}</div>
				))}
			</div>
			<table className='border-cyan-400 '>
				<thead className='text-center'>
					<tr>
						<th className='py-2 border-slate-600'>Name</th>
						<th className='py-2 border-slate-600'>Umur</th>
						<th className='py-2 border-slate-600'>TTL</th>
					</tr>
				</thead>
				<tbody>
					{Array3.map(({ name, umur, ttl }) => (
						<tr>
							<td className='py-2 border border-slate-700'>{name}</td>
							<td className='py-2 border border-slate-700'>{umur}</td>
							<td className='py-2 border border-slate-700'>{ttl}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className='border'>Home</div>
			<Link className=' text-indigo-600' to={'/'}>
				back to login
			</Link>
		</div>
	)
}
