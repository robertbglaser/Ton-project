import { DatePicker } from 'antd'
import dayjs from 'dayjs';
import React, { useEffect } from 'react'
import { useReactiveVar } from '@apollo/client'
import { presaleVar } from '../graphql/variables/Shared'

export default function IcoStepSecondPage() {
  const presaleSettings = useReactiveVar(presaleVar);
  useEffect(() => {
    
  }, [])

  const setPresaleState = ((e:any) => {
    if(e.target.name === 'start_date') {
      presaleVar({...presaleVar(), start: e.target.value})
    } else if(e.target.name === 'exchange_allocation') {
      presaleVar({...presaleVar(), exchangeAllocation: e.target.value})
    } else if(e.target.name === 'softcup') {
      presaleVar({...presaleVar(), softcup: e.target.value})
    } else if(e.target.name === 'hardcup') {
      presaleVar({...presaleVar(), hardcup: e.target.value})
    } else {
      const parts = e.target.name.split('_');
      if(parts[0] === 'tokenAmount') {
        presaleVar({
          ...presaleVar(),
          stages: presaleVar().stages.map((stage, index) => {
              if (index === parseInt(parts[1])) {
                  return { ...stage, tokenAmount: e.target.value };
              } else {
                  return stage;
              }
          })
        });
      } else if(parts[0] === 'duration') {
        presaleVar({
          ...presaleVar(),
          stages: presaleVar().stages.map((stage, index) => {
              if (index === parseInt(parts[1])) {
                  return { ...stage, duration: e.target.value };
              } else {
                  return stage;
              }
          })
        });
      } else if(parts[0] === 'discount') {
        presaleVar({
          ...presaleVar(),
          stages: presaleVar().stages.map((stage, index) => {
              if (index === parseInt(parts[1])) {
                  return { ...stage, discount: e.target.value };
              } else {
                  return stage;
              }
          })
        });
      }
    }
  });

  const addStage = () => {
    presaleVar({...presaleVar(), stages: [...presaleVar().stages, {tokenAmount: 0, duration: 1, discount: 0}]});
  }
  return (
    <>    
    <div className="container">
        <div className="row align-items-center justify-content-center mx-0 mb-4 mb-lg-5">
            <div className="col-lg-12 bg-navy rounded">
              <div className="row">
                  <div className="col-6 py-3 ps-lg-4 stage-active">
                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                        <div className="col-lg-auto mb-1 mb-lg-0 ico"><img src="assets/images/stage-check-on.png"/></div>
                        <div className="col-lg-auto text-center text-lg-start txt">ICO Configuration</div>
                    </div>
                  </div>
                  <div className="col-6 py-3 ps-lg-4 stage">
                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                        <div className="col-lg-auto mb-1 mb-lg-0 ico"><img src="assets/images/stage-check-on.png"/></div>
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
                          <div className="step bg-primary rounded-circle mx-auto mb-2 mb-lg-0">02</div>
                        </div>
                    </div>
                  </div>
                  <div className="col-4 col-lg-12">
                    <div className="steps row align-items-center justify-content-end mb-lg-5">
                        <div className="col-lg-auto text-center text-lg-end order-last order-lg-first">
                          <h6 className="mb-0 text-secondary">LP Settings</h6>
                          <small className="fw-light text-secondary">Enter LP Details</small>
                        </div>
                        <div className="col-lg-auto order-first order-lg-last">
                          <div className="step bg-secondary text-secondary rounded-circle mx-auto mb-2 mb-lg-0">03</div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row mb-4">
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className="border-bottom border-primary border-2 mb-3">
                        <p className="mb-1">Start Date & Time:</p>
                    </div>
                    <DatePicker
                      showTime
                      onChange={(dateString) => {
                        setPresaleState({target:{name:'start_date', value: dateString}})
                      }}
                      value={dayjs(presaleSettings.start)}
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="border-bottom border-primary border-2 mb-3">
                        <p className="mb-1">Exchange Allocation:</p>
                    </div>
                    <div className="range-slider">
                        <input className="range-slider__range" type="range" name="exchange_allocation" value={presaleSettings.exchangeAllocation} min="0" max="100" onChange = {(e:any)=>setPresaleState(e)} style={{width: "85%"}}/>
                        <span className="range-slider__value fs-4 ms-3 me-1">{presaleSettings.exchangeAllocation}</span><span>%</span>
                    </div>
                  </div>
              </div>
              <div className="row align-items-end mb-4">
                  <div className="col-lg-9">
                    {presaleSettings.stages.map((stage, index) => {
                      return <div className="row" key={index}>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                          <div className="border-bottom border-primary border-2 mb-3">
                              <p className="mb-1">TON Amount Per Stage:</p>
                          </div>
                          <input className="form-control" type="number" placeholder="Enter Amount" value={stage.tokenAmount} name={'tokenAmount_'+index} onChange={(e)=>setPresaleState(e)}/>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0">
                          <div className="border-bottom border-primary border-2 mb-3">
                              <p className="mb-1">TON Duration:</p>
                          </div>
                          <select className="form-select" value={stage.duration} name={'duration_'+index} onChange={(e)=>setPresaleState(e)}>
                              <option value={1}>1 days</option>
                              <option value={2}>2 days</option>
                              <option value={3}>3 days</option>
                              <option value={4}>4 days</option>
                              <option value={5}>5 days</option>
                              <option value={6}>6 days</option>
                              <option value={7}>7 days</option>
                              <option value={8}>8 days</option>
                              <option value={9}>9 days</option>
                              <option value={10}>10 days</option>
                              <option value={11}>11 days</option>
                              <option value={12}>12 days</option>
                              <option value={13}>13 days</option>
                              <option value={14}>14 days</option>
                          </select>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                          <div className="border-bottom border-primary border-2 mb-3">
                              <p className="mb-1">Price Discount:</p>
                          </div>
                          <input className="form-control" type="number" placeholder="Enter Amount" value={stage.discount} name={'discount_'+index} onChange={(e)=>setPresaleState(e)}/>
                        </div>
                      </div>
                    })}
                  </div>
                  <div className="col-lg-auto">
                    <a className="btn btn-outline-primary" onClick={addStage}><i className="bi bi-plus-circle"></i> Add More</a>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                          <div className="border-bottom border-primary border-2 mb-3">
                              <p className="mb-1">Soft Cap:</p>
                          </div>
                          <input className="form-control" type="number" placeholder="Enter Amount" name="softcup" value={presaleSettings.softcup} onChange={(e)=>setPresaleState(e)} />
                        </div>
                        <div className="col-lg-6">
                          <div className="border-bottom border-primary border-2 mb-3">
                              <p className="mb-1">Hard Cap:</p>
                          </div>
                          <input className="form-control" type="number" placeholder="Enter Amount" name="hardcup" value={presaleSettings.hardcup} onChange={(e)=>setPresaleState(e)} />
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div className="row align-items-center justify-content-between mt-5 pt-3 border-top border-secondary">
            <div className="col-auto">
              <a href="/#" className="btn btn-outline-primary px-4">Previous</a>
            </div>
            <div className="col-auto">
              <a href="/#/third" className="btn btn-primary px-4">Next</a>
            </div>
        </div>
      </div>
    </>
  )
}