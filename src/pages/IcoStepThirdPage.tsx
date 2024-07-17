import React, { useEffect } from 'react'
import { useReactiveVar } from '@apollo/client'
import { lpVar } from '../graphql/variables/Shared'

export default function IcoStepThirdPage() {
  const lpSetting = useReactiveVar(lpVar);

  useEffect(() => {
    
  }, [])

  const setLpSetting = (e:any) => {
    if(e.target.name === 'wallet') {
      lpVar({...lpVar(), wallet: e.target.value})
    } else if(e.target.name === 'prevent_withdraw') {
      lpVar({...lpVar(), prevent_withdraw: e.target.checked})
    }
  }
  return (
    <>    
    <div className="container">
      <div className="row align-items-center justify-content-center mx-0 mb-4 mb-lg-5">
          <div className="col-lg-12 bg-navy rounded">
            <div className="row">
                <div className="col-6 py-3 ps-lg-4 stage-active">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                      <div className="col-lg-auto mb-1 mb-lg-0 ico"><img src="assets/images/stage-check-on.png" /></div>
                      <div className="col-lg-auto text-center text-lg-start txt">ICO Configuration</div>
                  </div>
                </div>
                <div className="col-6 py-3 ps-lg-4 stage">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                      <div className="col-lg-auto mb-1 mb-lg-0 ico"><img src="assets/images/stage-check-on.png" /></div>
                      <div className="col-lg-auto text-center text-lg-start txt">Preview & Link Generation</div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-3 pe-lg-5 mb-4 mb-lg-0">
            <div className="row">
                <div className="col-4 col-lg-12">
                  <div className="steps row align-items-center justify-content-end mb-lg-5">
                      <div className="col-lg-auto text-center text-lg-end order-last order-lg-first">
                        <h6 className="mb-0">Token Settings</h6>
                        <small className="fw-light text-secondary">Enter Token details</small>
                      </div>
                      <div className="col-lg-auto order-first order-lg-last">
                        <div className="step bg-success rounded-circle mx-auto mb-2 mb-lg-0">01</div>
                      </div>
                  </div>
                </div>
                <div className="col-4 col-lg-12">
                  <div className="steps row align-items-center justify-content-end mb-lg-5">
                      <div className="col-lg-auto text-center text-lg-end order-last order-lg-first">
                        <h6 className="mb-0">Basic Settings</h6>
                        <small className="fw-light text-secondary">Few Basic Settings</small>
                      </div>
                      <div className="col-lg-auto order-first order-lg-last">
                        <div className="step bg-success rounded-circle mx-auto mb-2 mb-lg-0">02</div>
                      </div>
                  </div>
                </div>
                <div className="col-4 col-lg-12">
                  <div className="steps row align-items-center justify-content-end mb-lg-5">
                      <div className="col-lg-auto text-center text-lg-end order-last order-lg-first">
                        <h6 className="mb-0">LP Settings</h6>
                        <small className="fw-light text-secondary">Enter LP Details</small>
                      </div>
                      <div className="col-lg-auto order-first order-lg-last">
                        <div className="step bg-primary rounded-circle mx-auto mb-2 mb-lg-0">03</div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row mb-4 mb-lg-5">
                <div className="col-lg-12">
                  <div className="border-bottom border-primary border-2 mb-3">
                      <p className="mb-1">LP Fees Wallet Address:</p>
                  </div>
                  <input className="form-control" type="text" placeholder="Enter Wallet Address" name="wallet" value={lpSetting.wallet} onChange={(e)=>setLpSetting(e)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                  <div className="border-bottom border-primary border-2 mb-3">
                      <p className="mb-1">LP Handling:</p>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input p-2 me-2" type="checkbox" name="prevent_withdraw" id="flexCheckChecked" onChange={(e)=>setLpSetting(e)} checked={lpSetting.prevent_withdraw}/>
                      <label className="form-check-label small text-secondary">
                      I Confirm LP remains within the ICO contract, Preventing Withdrawals.
                      </label>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div className="row align-items-center justify-content-between mt-5 pt-3 border-top border-secondary">
          <div className="col-auto">
            <a href="/#/second" className="btn btn-outline-primary px-4">Previous</a>
          </div>
          <div className="col-auto">
            <a href="/#/previewfirst" className="btn btn-primary px-4">Preview</a>
          </div>
      </div>
    </div>
    </>
  )
}
