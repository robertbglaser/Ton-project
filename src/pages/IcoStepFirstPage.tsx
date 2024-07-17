import React, { useEffect, useState } from 'react'
import { tokenVar } from '../graphql/variables/Shared'
import { notifyError } from '../services/NotificationService';
import * as FaIcons from 'react-icons/fa';
import { imageUpload } from '../services/AdminService';
import { useReactiveVar } from '@apollo/client'

export default function IcoStepFirstPage() {
  const [isLoading, setIsLoading] = useState(false);
  const tokenSetting = useReactiveVar(tokenVar);
  useEffect(() => {
    
  }, [])

  const setTokenInfo = (e:any) => {
    if(e.target.name == 'token_name') {
      tokenVar({...tokenVar(), name: e.target.value})
    } else if(e.target.name == 'token_ticker') {
      tokenVar({...tokenVar(), ticker: e.target.value})
    } else if(e.target.name == 'token_description') {
      tokenVar({...tokenVar(), description: e.target.value})
    } else if(e.target.name == 'token_price') {
      tokenVar({...tokenVar(), price: e.target.value})
    }
  }

  const onFileChange = async (e:any) => {
   let isImage = true;
   const timestamp = Date.now();
   let image = e.target.files;
   let formData = new FormData();
   let filename = Math.random().toString() + timestamp + '.jpg';
   for (const key of Object.keys(image)) {
     if ( /\.(jpe?g|png|gif|bmp)$/i.test(image[key].name) === false ) { isImage = false; break; }
     formData.append('file', image[key], filename)
   }
   if(!isImage){
     notifyError('Not image format')
     return;
   }
   setIsLoading(true);
   const image_url = await imageUpload(formData);
   tokenVar({...tokenVar(), logo: 'https://ipfs.io/ipfs/'+image_url})
   setIsLoading(false);
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
                        <div className="step bg-primary rounded-circle mx-auto mb-2 mb-lg-0">01</div>
                     </div>
                  </div>
               </div>
               <div className="col-4 col-lg-12">
                  <div className="steps row align-items-center justify-content-end mb-lg-5">
                     <div className="col-lg-auto text-center text-lg-end order-last order-lg-first">
                        <h6 className="mb-0 text-secondary">Basic Settings</h6>
                        <small className="fw-light text-secondary">Few Basic Settings</small>
                     </div>
                     <div className="col-lg-auto order-first order-lg-last">
                        <div className="step bg-secondary text-secondary rounded-circle mx-auto mb-2 mb-lg-0">02</div>
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
            <div className="row">
               <div className="col-lg-8">
                  <div className="row mb-4">
                     <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="border-bottom border-primary border-2 mb-3">
                           <p className="mb-1">Token Name:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="Token Name" name="token_name" value={tokenSetting.name} onChange={(e) => setTokenInfo(e)}/>
                     </div>
                     <div className="col-lg-6">
                        <div className="border-bottom border-primary border-2 mb-3">
                           <p className="mb-1">Token Ticker:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="Token Ticker" name="token_ticker" value={tokenSetting.ticker} onChange={(e) => setTokenInfo(e)}/>
                     </div>
                  </div>
                  <div className="border-bottom border-primary border-2 mb-3">
                     <p className="mb-1">Token Description:</p>
                  </div>
                  <div className="row mb-4">
                     <div className="col-lg-12">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={2} name="token_description" value={tokenSetting.description} onChange={(e) => setTokenInfo(e)}></textarea>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="border-bottom border-primary border-2 mb-3">
                           <p className="mb-1">Token Decimals:</p>
                        </div>
                        <input className="form-control" type="text" placeholder="9" disabled />
                     </div>
                     <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="border-bottom border-primary border-2 mb-3">
                           <p className="mb-1">Token Pricing:</p>
                        </div>
                        <input className="form-control" type="number" placeholder="Conversion Rate" name="token_price" value={tokenSetting.price} onChange={(e) => setTokenInfo(e)}/>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="border-bottom border-primary border-2 mb-3">
                     <p className="mb-1">Token Logo:</p>
                  </div>
                  <div className="p-4 border border-primary-subtle rounded text-center">
                     <p className="mb-0"><i className="bi bi-upload fs-2 text-primary"></i></p>
                     <p className="mb-1">Upload Logo Image</p>
                     {isLoading && <FaIcons.FaSpinner className="spinner-icon" style={{ animation: "spin 2s linear infinite" }} />}
                     <p className="small text-secondary">(PNG or JPG with max size 5MB)</p>
                     <input className="form-control form-control-sm" type="file" id="formFile" onChange={(e:any) => onFileChange(e)}/>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="row align-items-center justify-content-end mt-5 pt-3 border-top border-secondary">
         <div className="col-auto">
            <a href="/#/second" className="btn btn-primary px-4">Next</a>
         </div>
      </div>
   </div>
   </>
  )
}