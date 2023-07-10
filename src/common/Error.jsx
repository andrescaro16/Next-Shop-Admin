

const Error = ({ error }) => {

    const invalidCredentialsView = () => {
        return (
            <div className='flex items-center justify-center w-full py-2 px-4 bg-red-200 border border-red-300 rounded-md'>
                <p className='text-red-800 text-sm'>
                    <span className='font-medium'>Login Failed:</span>
                    <span>Invalid email or password</span>
                </p>
            </div>
        );
    };

    const gettingProfileView = () => {
        return (
            <div className='flex items-center justify-center w-full py-2 px-4 bg-red-200 border border-red-300 rounded-md'>
                <p className='text-red-800 text-sm'>
                    <span className='font-medium'>Getting profile data failed</span>
                </p>
            </div>
        );
    };

    const renderView = () => {
        return(error === "invalid-credentials" ? invalidCredentialsView()
			 : error === "getting-profile" ? gettingProfileView() : null);
    }

    return (
        <>
            {renderView()}
        </>
    )
}

export default Error;