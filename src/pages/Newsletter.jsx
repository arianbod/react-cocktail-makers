import React from 'react';

const Newsletter = () => {
	return (
		<form className='form'>
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
					type='text'
					defaultValue='John'
					className='form-input'
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
					type='text'
					defaultValue='smith'
					className='form-input'
					name='lastName'
					id='lastName'
				/>
			</div>
			<div className='form-row'>
				<label
					htmlFor='Email'
					className='form-label'>
					Email
				</label>
				<input
					type='text'
					defaultValue='John@test.com'
					className='form-input'
					name='Email'
					id='Email'
				/>
			</div>
			<button
				className='btn btn-block'
				type='submit'
				style={{ marginTop: '0.5rem' }}>
				submit
			</button>
		</form>
	);
};

export default Newsletter;
