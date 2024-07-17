import React, { useEffect } from 'react'
import { useReactiveVar } from '@apollo/client'
import { notifyError } from '../services/NotificationService';
import { tokenVar, presaleVar, lpVar } from '../graphql/variables/Shared';
import { useTonConnect } from '../hooks/useTonConnect';
import { useLaunchContract } from '../hooks/useLaunchContract';

export default function IcoStepThirdPage() {
  const tokenSetting = useReactiveVar(tokenVar);
  const presaleSettings = useReactiveVar(presaleVar);
  const lpSetting = useReactiveVar(lpVar);
  const { connected } = useTonConnect();
  const { address, createToken } = useLaunchContract();
  useEffect(() => {
    console.log(address);
  }, [address])

  const launch = () => {
    createToken();
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
                <div className="col-6 py-3 ps-lg-4 stage-active">
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
                <div className="col-6 col-lg-12">
                  <div className="steps row align-items-center justify-content-end mb-lg-5">
                      <div className="col-lg-auto text-center text-lg-end order-last order-lg-first">
                        <h6 className="mb-0">Preview & Submit</h6>
                        <small className="fw-light text-secondary">Preview & Sign Transaction</small>
                      </div>
                      <div className="col-lg-auto order-first order-lg-last">
                        <div className="step bg-primary rounded-circle mx-auto mb-2 mb-lg-0">01</div>
                      </div>
                  </div>
                </div>
                <div className="col-6 col-lg-12">
                  <div className="steps row align-items-center justify-content-end mb-lg-5">
                      <div className="col-lg-auto text-center text-lg-end order-last order-lg-first">
                        <h6 className="mb-0 text-secondary">Link Generation</h6>
                        <small className="fw-light text-secondary">Generate Link</small>
                      </div>
                      <div className="col-lg-auto order-first order-lg-last">
                        <div className="step bg-secondary text-secondary rounded-circle mx-auto mb-2 mb-lg-0">02</div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
                <div className="col-lg-8">
                  <div className="row mb-4">
                      <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="border-bottom border-primary border-2 mb-3">
                            <p className="mb-1">Token Name:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="Token Name" value={tokenSetting.name} disabled />
                      </div>
                      <div className="col-lg-6">
                        <div className="border-bottom border-primary border-2 mb-3">
                            <p className="mb-1">Token Ticker:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="Token Ticker" value={tokenSetting.ticker} disabled />
                      </div>
                  </div>
                  <div className="border-bottom border-primary border-2 mb-3">
                      <p className="mb-1">Token Description:</p>
                  </div>
                  <div className="row mb-4">
                      <div className="col-lg-12">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={2} placeholder="Dummy Text for description" value={tokenSetting.description} disabled></textarea>
                      </div>
                  </div>
                  <div className="row mb-4">
                      <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="border-bottom border-primary border-2 mb-3">
                            <p className="mb-1">Token Decimals:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="9" value={tokenSetting.decimal} disabled />
                      </div>
                      <div className="col-lg-6">
                        <div className="border-bottom border-primary border-2 mb-3">
                            <p className="mb-1">Token Pricing:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="" value={tokenSetting.price} disabled />
                      </div>
                  </div>
                </div>
                <div className="col-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="border-bottom border-primary border-2 mb-3">
                      <p className="mb-1">Token Logo:</p>
                  </div>
                  <div className="p-4 border border-primary-subtle rounded text-center">
                      <img src={tokenSetting.logo} className="img-fluid rounded" />
                  </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="border-bottom border-primary border-2 mb-3">
                      <p className="mb-1">Start Date & Time:</p>
                  </div>
                  <input className="form-control" type="text" placeholder="24-04-2024 18:48" value={presaleSettings.start} disabled />
                </div>
                <div className="col-lg-4">
                  <div className="border-bottom border-primary border-2 mb-3">
                      <p className="mb-1">Exchange Allocation:</p>
                  </div>
                  <input className="form-control" type="text" placeholder="50%" value={presaleSettings.exchangeAllocation + '%'} disabled />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-8">
                  {presaleSettings.stages.map((stage ,index) => {
                    return <div className="row" key={index}>
                      <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="border-bottom border-primary border-2 mb-3">
                            <p className="mb-1">TON Amount:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="1234" value={stage.tokenAmount} disabled />
                      </div>
                      <div className="col-lg-4">
                        <div className="border-bottom border-primary border-2 mb-3">
                            <p className="mb-1">TON Duration:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="14 Days" value={stage.duration + ' Days'} disabled />
                      </div>
                      <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="border-bottom border-primary border-2 mb-3">
                            <p className="mb-1">Discount:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="1234" value={stage.discount} disabled />
                      </div>
                    </div>
                  })}
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-8">
                  <div className="row">
                      <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="border-bottom border-primary border-2 mb-3">
                            <p className="mb-1">Soft Cap:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="12345" value={presaleSettings.softcup} disabled />
                      </div>
                      <div className="col-lg-6">
                        <div className="border-bottom border-primary border-2 mb-3">
                            <p className="mb-1">Hard Cap:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="12345" value={presaleSettings.hardcup} disabled />
                      </div>
                  </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-8">
                  <div className="border-bottom border-primary border-2 mb-3">
                      <p className="mb-1">LP Fees Wallet Address:</p>
                  </div>
                  <input className="form-control" type="text" placeholder="asdg6546hhdkkka884669...xyz" value={lpSetting.wallet} disabled />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                  <div className="border-bottom border-primary border-2 mb-3">
                      <p className="mb-1">LP Handling:</p>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input p-2 me-lg-2" type="checkbox" value="" id="flexCheckChecked" checked={lpSetting.prevent_withdraw} disabled />
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
            <a href="/" className="btn btn-outline-primary px-4">Cancel</a>
          </div>
          <div className="col-auto">
            <a onClick={launch} className="btn btn-primary px-4">Submit</a>
          </div>
      </div>
    </div>
    </>
  )
}
