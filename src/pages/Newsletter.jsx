import axios from 'axios';
import React from 'react';
import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
const newsletterUrl = 'https://course-api.com/cocktails-newsletter';
export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		const response = await axios.post(newsletterUrl, data);
		toast.success(response.data.msg);
		return redirect('/');
	} catch (error) {
		console.error(error);
		toast.error(error?.response?.data?.msg);
		return error;
	}
};
const Newsletter = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';
	return (
		<Form
			className='form'
			method='post'>
			<h4 style={{ marginBottom: '2rem', textAlign: 'center' }}>
				our newsletter
			</h4>
			{/* name */}
			<div className='form-row'>
				<label
					htmlFor='name'
					className='form-label'>
					name
				</label>
				<input
					required
					type='text'
					className='form-input required'
					name='name'
					id='name'
				/>
			</div>
			<div className='form-row'>
				<label
					htmlFor='lastName'
					className='form-label'>
					last Name
				</label>
				<input
					required
					type='text'
					className='form-input required'
					name='lastName'
					id='lastName'
				/>
			</div>
			<div className='form-row'>
				<label
					htmlFor='email'
					className='form-label'>
					email
				</label>
				<input
					required
					type='text'
					defaultValue='test@test.com'
					className='form-input required'
					name='email'
					id='email'
				/>
			</div>
			<button
				className='btn btn-block'
				type='submit'
				style={{ marginTop: '0.5rem' }}
				disabled={isSubmitting}>
				{isSubmitting ? 'submitting' : 'submit'}
			</button>
		</Form>
	);
};

export default Newsletter;
