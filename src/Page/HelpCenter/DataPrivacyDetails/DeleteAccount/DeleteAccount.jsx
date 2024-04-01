import React from 'react';

const DeleteAccount = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>To submit a request to permanently delete your Takealot account and personal information:

                </p>

                <ul className='list-inside list-decimal py-3'>
                    <li className='py-3'>
                        Go to Delete My Account.
                    </li>

                    <li className='py-3'>
                        Log into the account you want to close.
                    </li>

                    <li className='py-3'>
                        Carefully note the services which will no longer be available after your account has been deleted.
                    </li>

                    <li className='py-3'>
                        If you still wish to proceed, click the <b>Submit Deletion Request</b> button.
                    </li>

                    <li className='py-3'>
                        A confirmation link will be sent to you via email. Click the link to verify your request.
                    </li>

                    <li className='py-3'>
                        We will process your request and be in touch once your account has been deleted.
                    </li>
                </ul>

                <p className='py-3 font-bold'>Once your account has been deleted, it will no longer be accessible and cannot be restored.
                </p>

                <p className='py-3'>If you later decide that you want to start shopping with us again, you will need to register a new account.
                </p>
            </div>
        </section>
    );
};

export default DeleteAccount;