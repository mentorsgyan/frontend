import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const PolicyPage = () => {
    return (
        <div>
            <Navbar sticky={false} />
            <h1 className='text-3xl text-center font-bold tracking-tight shadow-2xl rounded-3xl container mt-5 p-2'>
                Please read the below information carefully before making any transaction at 
                <div className='flex justify-center'>
                    <p className='text-secondary'>Mentors</p><p>Gyan</p>
                </div>
            </h1>
            <div className="container my-10">
                <h2 className='text-2xl font-bold tracking-tight'>Privacy Policy</h2>
                <section className='text-justify mx-4'>
                    <p>
                        We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you use our services.
                    </p>
                    <p>
                        <strong>Information Collection:</strong> We collect personal information such as your name, email address, and payment details when you make a purchase.
                    </p>
                    <p>
                        <strong>Information Usage:</strong> Your information is used to process transactions, manage your account, and improve our services. We do not share your personal information with third parties except as necessary to process your payment through Razorpay.
                    </p>
                    <p>
                        <strong>Security:</strong> We implement a variety of security measures to maintain the safety of your personal information. Your data is stored securely and payment transactions are encrypted.
                    </p>
                </section>

                <h2 className='text-2xl font-bold tracking-tight'>Payment Policy</h2>
                <section className='mx-4'>
                    <p>
                        We use Razorpay as our payment gateway to ensure a secure and seamless payment experience. By making a payment through our website, you agree to Razorpay's terms and conditions.
                    </p>
                    <p>
                        <strong>Payment Methods:</strong> We accept various payment methods through Razorpay, including credit/debit cards, UPI, and net banking.
                    </p>
                    <p>
                        <strong>Payment Confirmation:</strong> After completing a transaction, you will receive a confirmation email with the details of your purchase. Please retain this email for your records.
                    </p>
                </section>

                <h2 className='tracking-tight text-2xl font-bold'>Refund Policy</h2>
                <section className='mx-4'>
                    <p>
                        We strive to provide the best service possible. However, if you are not satisfied with your purchase, please review our refund policy below.
                    </p>
                    <p>
                        <strong>Eligibility:</strong> Refund requests must be made within 7 days of the purchase date. To be eligible for a refund, the service/product must be unused and in the same condition as when you received it.
                    </p>
                    <p>
                        <strong>Process:</strong> To initiate a refund, please contact our team with your order details at <strong>mentosgyan@gmail.com </strong>. Once your request is reviewed, we will notify you of the approval or rejection of your refund.
                    </p>
                    <p>
                        <strong>Refund Method:</strong> Approved refunds will be processed through the original method of payment within 10 business days.
                    </p>
                </section>
                <h2 className='text-2xl tracking-tight font-bold'>Terms of Service</h2>
                <section className='mx-4'>
                    <p>
                        By using our website and services, you agree to the following terms and conditions.
                    </p>
                    <p>
                        <strong>Service Use:</strong> You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account and password.
                    </p>
                    <p>
                        <strong>Intellectual Property:</strong> All content on our website, including text, graphics, logos, and images, is the property of our company.
                    </p>
                    <p>
                        <strong>Limitation of Liability:</strong> Our company will not be liable for any damages arising from the use of our services. This includes direct, indirect, incidental, or consequential damages.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PolicyPage;
