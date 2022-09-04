import React from 'react'
import { Form, Wrapper } from './registration.styled'

function Registration() {
  return (
    <Wrapper>
      <Form>
        <div className='form-logo'>
          <img src="https://seeklogo.com/images/K/kawasaki-winter-test-logo-345DE97253-seeklogo.com.png" alt="" />
        </div>
        <h3 className="form-headline">რეგისტარცია</h3>
        <div className="form-fields">
          <div className="input-field">
            <div className="field-icon">
              <img src="http://cdn.onlinewebfonts.com/svg/img_262951.png" alt="" />
            </div>
            <input type="email" placeholder='ელ. ფოსტა' />
          </div>
          <div className="input-field">
          <div className="field-icon">
              <img src="http://cdn.onlinewebfonts.com/svg/img_262951.png" alt="" />
            </div>
            <input type="password" placeholder='პაროლი'  />
          </div>
          <div className="input-field">
          <div className="field-icon">
              <img src="http://cdn.onlinewebfonts.com/svg/img_262951.png" alt="" />
            </div>
            <input type="password" placeholder='გაიმეორეთ პაროლი'  />
          </div>
          <div className="input-field">
          <div className="field-icon">
              <img src="https://i.pinimg.com/originals/67/8a/4c/678a4cce4169dc26b2ed91fc0ad1f4b3.png" alt="" />
            </div>
            <input type="number" placeholder='მობილურის ნომერი'  />
          </div>
          <div className="input-field sms-getter">
          <div className="field-icon">
              <img src="http://cdn.onlinewebfonts.com/svg/img_262951.png" alt="" />
            </div>
            <input type="number" placeholder='სმს კოდი' />
            <button>კოდის გაგზავნა</button>
          </div>
          <input type="radio" />
          <input type="checkbox" />
        </div>
      </Form>
    </Wrapper>
  )
}

export default Registration
