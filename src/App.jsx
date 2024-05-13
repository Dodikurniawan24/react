import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function App() {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		navigate('/Home')
	}

	const [count, setCount] = useState(0)

	return (
		<>
			<div className='flex justify-center items-center h-screen bg-gray-100 border text-center'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='shadow-lg bg-white'>
						<div className='text-3xl font-semibold text-indigo-600 border-b-2 p-4'>
							Welcome back
						</div>
						<div className='p-4'>
							<input
								className='w-full  border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-2 py-3'
								placeholder='Email'
								type='email'
								{...register('email')}
							/>
						</div>
						<div className='p-4'>
							<input
								className='w-full  border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-2 py-3'
								placeholder='Password'
								type='password'
								{...register('password')}
							/>
						</div>
						<div className='p-4 border-b-2'>
							<button className='w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 '>
								LOGIN
							</button>
						</div>
						<div className='flex justify-between gap-5 p-4'>
							<div className=''>
								<a href='#' className='text-blue-600 hover:underline '>
									Don't have an account?
								</a>
							</div>
							<div className=''>
								<a href='#' className='text-blue-600 hover:underline'>
									Forget password?
								</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default App
