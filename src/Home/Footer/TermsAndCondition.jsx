import React from 'react'
import Footer from './Footer'
import Main from '../Main'

export default function TermsAndCondition() {
  return (
    <div>
      <div className="tc-hs">
        <Main />
      </div>
      <div className="tc container p-3 mt-5 lh-lg">
        <div>
          <h3>Terms And Conditions</h3>
          <p className='p-2'>
            Good To Go Foodworks PVT. LTD is the licensed owner of the brand Tendercuts.in. Use of the Website
            is offered to you conditioned on acceptance of all the terms, conditions and notices contained in
            these Terms, along with any amendments made Good To Go Foodworks PVT. LTD. at its sole discretion
            and posted on the Website, including by way of imposing an additional charge for access to or use
            of a Service.
          </p>
        </div>
        <div>
          <h4>Terms Of Use</h4>
          <p>
            Your use of the Website and services and tools are governed by the following terms and conditions
            ("Terms of Use") as applicable to the Website www.Rkmeats.in including the applicable policies
            which are incorporated herein by way of reference. If you transact on the Website, You shall be
            subject to the policies that are applicable to the Website for such transaction. By mere use of the
            Website, You shall be contracting with Good To Go Foodworks PVT. LTD and these terms and conditions
            including the policies constitute your binding obligations,with Good To Go Foodworks PVT. LTD
          </p>
          <p>
            For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any
            natural or legal person who has agreed to become a buyer on the Website by providing Registration Data
            while registering on the Website as Registered User using the computer systems. Good To Go Foodworks PVT.
            LTD allows the User to surf the Website or making purchases without registering on the Website.
            The term "We", "Us", "Our" shall mean Good To Go Foodworks PVT. LTD. When You use any of the services
            provided by Us through the Website, including but not limited to, (e.g. Product Reviews, Seller Reviews),
            You will be subject to the rules, guidelines, policies, terms,and conditions applicable to such service,
            and they shall be deemed to be incorporated into this Terms of Use and shall be considered as part and
            parcel of this Terms of Use.
          </p>
          <div className="ps-3">
            <p>- We reserve the right, at our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time without any prior written notice to you.</p>
            <p>- It is your responsibility to review these Terms of Use periodically for updates / changes.</p>
            <p>- Your continued use of the Website following the posting of changes will mean that you accept and agree to the revisions.</p>
            <p>- As long as you comply with these Terms of Use, We grant you a personal, non-exclusive, non-transferable, limited privilege to enter and use the Website.</p>
          </div>
        </div>
        <div className='my-5 '>
          <h4 className='my-5'>Cancellation and Return Policy</h4>
          <h6 > How can I cancel my order?</h6>
          <p>
          You can cancel the order by calling our customer support +91-9876543219  or ping us on chat. 
         <br /> We will not be able to cancel the order once it is out for delivery.
          </p>
          <h6 className='mt-5'> Can I edit my order?</h6>
          <p>
          Yes you can edit the order by calling our customer support for Chennai +91-9543754375   or ping us on chatwithin 15 mins of placing the order.
          <br />The customer support agent  can help you to add/remove individual items within the order.
          </p>
        </div>
      </div>
      <div className="footer-tc bg-dark">
        <Footer />
      </div>
    </div>
  )
}
