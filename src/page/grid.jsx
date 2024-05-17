export default function Grid() {
	const Array = [
		{
			image: 'https://via.placeholder.com/300x200',
			title: 'Lorem ipsum dolor sit amet.',
			deskripsi:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur exercitationem distinctio reiciendis sit velit!',
		},
		{
			image: 'https://via.placeholder.com/300x200',
			title: 'Lorem ipsum dolor sit amet.',
			deskripsi:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur exercitationem distinctio reiciendis sit velit!',
		},
		{
			image: 'https://via.placeholder.com/300x200',
			title: 'Lorem ipsum dolor sit amet.',
			deskripsi:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur exercitationem distinctio reiciendis sit velit!',
		},
		{
			image: 'https://via.placeholder.com/300x200',
			title: 'Lorem ipsum dolor sit amet.',
			deskripsi:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur exercitationem distinctio reiciendis sit velit!',
		},
	]
	return (
		<>
			<div className='bg-grey-400 p-8'>
				<div className=''>
					<div className='flex gap-4 m-3'>
						{Array.map(({ image, title, deskripsi }) => (
							<div className='bg-indigo-600 text-white p-4 block rounded-lg'>
								<img src={image} alt='Gambar 1' className='mb-4' />
								<h2 className='font-bold text-xl mb-3'>{title}</h2>
								<p>{deskripsi}</p>
								<button className='text-left text-indigo-600 mt-3'>
									readme
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
