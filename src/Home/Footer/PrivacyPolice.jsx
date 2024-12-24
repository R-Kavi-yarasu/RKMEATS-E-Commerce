import React from 'react'
import Main from '../Main'
import Footer from './Footer'

export default function PrivacyPolice() {
  return (

    <div>
      <div className="navbar-pp">
        <Main />
      </div>

      <div className='pp container p-3 lh-lg'>
        <p>
          As part of the ordering process, you will give us certain information about you so that we can fulfil your order.
        </p>
        <p>
          This is our privacy policy, which tells you what personal data we collect, how we use it, how we protect is, whether it is disclosed and how you can access and rectify it.
        </p>

        <h5 className='fw-semibold'>1.WHAT PERSONAL DATA WE COLLECT?</h5>
        <h6>1.1 Information</h6>
        <div className="ps-4 ">
          <p>
            When you place an order, we collect and sometimes store basic information such as your name, email and delivery address(es), a contact telephone number and your user name and password.
          </p>
          <p>
            We may also receive and store certain information automatically from your computer, such as your IP address, browser type and other computer and connection information, the time that you logged on and off our website and what items you searched for or viewed.
          </p>
          <p>
            To enhance your app experience and ensure the stability of our services, we may collect location information and access the camera. When you download and use our platform on your device, we may receive information about your location. If you grant the platform permission to access your location through your mobile operating system, we may collect your location while the app is active in the background.
          </p>
        </div>
        <h6>1.2 Use of cookies</h6>
        <div className="ps-4">
          <p>
            As with many websites, we use cookies to enhance your shopping experience. We need to use certain cookies to identify you on our website and allow you to use the basket facility and to place orders.
          </p>
          <p>
            We also use a cookie to identify you the next time you visit, which assists us greatly in providing you with a superior service. If you would prefer, however, you can refuse to accept this type of cookie or delete them following your visit to our website. please see the 'help' section of your browser.
          </p>
        </div>
        <h5>2. HOW DO WE USE YOUR INFORMATION?</h5>
        <div className="ps-4">
          <p>
            We use the personal data you provide to process your order, including passing on your telephone number to the Delivery, and to contact you if there are any problems.
          </p>
          <p>
            You may also choose to receive certain emails, promotions or other information from us but can opt in or out of this at any time.
          </p>
          <p>
            We may use your information for market research or customer profiling and to display certain content on the website, such as your favourite items or new products that we think may be of interest to you.
          </p>
        </div>
        <h5>3. SECURITY OF YOUR INFORMATION</h5>
        <div className="ps-4">
          <p>
            We use secure server software to encrypt all of the data you send to us to minimise the risk that the information you send is intercepted before it reaches us and have strict security measures to protect the information that we store from any unauthorised access.
          </p>
          <p>
            All your payment card details are also encrypted using Secure Sockets Layer (SSL). We do not store your payment card details.
          </p>
        </div>
        <h5>4. TO WHOM DO WE DISCLOSE YOUR INFORMATION?</h5>
        <div className="ps-4">
          <p>
            Payment card details are sent straight to our banking partners and are not received by us.
          </p>
          <p>
            Your information may be shared with trusted third parties whom we believe may be of interest to you. You must advise us if you would prefer that your information is not used in this way by checking the relevant box during the order process.
          </p>
          <p>
            We may disclose your personal data when reasonably necessary in order to comply with any applicable laws, regulations or codes of conduct or when required to do so by any competent authority or to protect our rights of those of our customers.
          </p>
        </div>
        <h5>5. GENERAL</h5>
        <div className="ps-4">
          <p>
            Your use of our website signifies your consent to our collecting and handling of your personal data for the purposes set out in this statement.
          </p>
          <p>
            It is important that you protect your data and to minimise the risk of any unauthorised access to your account with us: please be sure to log off when you finish using a shared computer.
          </p>
          <p>
            You may contact us at any time if you are unsure about any of the information we have.
          </p>
        </div>
        <h5>6. HOW TO DELETE USER DATA?</h5>
        <div className="ps-4">
          <p>
            You may contact customer support through a designated email (rkmeats@kavigroup.in).
          </p>
          <p>
            User data that can be deleted are user numbers, addresses, and any other personally identifiable information (PII)
          </p>
        </div>
        <h5>CHANGES TO THIS PRIVATE POLICY</h5>
        <p className='ps-4'>
          Good To Go Foodworks Private Limited has the discretion to update this privacy policy at any time. When we do, revise the updated date at the bottom of this page, We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
        </p>
      </div>
      <div className="fotter-pp bg-dark">
        <Footer />
      </div>
    </div>
  )
}
