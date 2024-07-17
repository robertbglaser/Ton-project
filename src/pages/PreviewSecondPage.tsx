import { Row, Col, Typography, Input, Button, Radio, Modal } from 'antd'
import type { RadioChangeEvent } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useReactiveVar } from '@apollo/client'
import { addOrder } from '../services/OrderService'
import { notifyError } from '../services/NotificationService';

const { Paragraph } = Typography

export default function IcoStepThirdPage() {

  useEffect(() => {
    
  }, [])

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
                <div className="col-6 py-3 ps-lg-4 stage-active">
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
                <div className="col-6 col-lg-12">
                  <div className="steps row align-items-center justify-content-end mb-lg-5">
                      <div className="col-lg-auto text-center text-lg-end order-last order-lg-first">
                        <h6 className="mb-0">Preview & Submit</h6>
                        <small className="fw-light text-secondary">Preview & Sign Transaction</small>
                      </div>
                      <div className="col-lg-auto order-first order-lg-last">
                        <div className="step bg-success rounded-circle mx-auto mb-2 mb-lg-0">01</div>
                      </div>
                  </div>
                </div>
                <div className="col-6 col-lg-12">
                  <div className="steps row align-items-center justify-content-end mb-lg-5">
                      <div className="col-lg-auto text-center text-lg-end order-last order-lg-first">
                        <h6 className="mb-0">Link Generation</h6>
                        <small className="fw-light text-secondary">Generate Link</small>
                      </div>
                      <div className="col-lg-auto order-first order-lg-last">
                        <div className="step bg-primary rounded-circle mx-auto mb-2 mb-lg-0">02</div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-9">
            <h4 className="mt-4 mt-lg-0">ICO Successfully Created <i className="bi bi-check-lg text-success"></i></h4>
            <div className="border-bottom border-primary border-2 mb-3 mt-5">
                <p className="mb-1">Your Unique Link:</p>
            </div>
            <div className="bg-black p-3 rounded mb-4 border border-primary">
                <div className="row align-items-center justify-content-between">
                  <div className="col mb-3 mb-lg-0">
                      0x7CdBfC86A0BFa20F133748B...
                  </div>
                  <div className="col-auto">
                      <a href="#" className="btn btn-sm btn-outline-secondary"><i className="bi bi-copy"></i> Copy</a>
                  </div>
                </div>
            </div>
            <p className="text-secondary small mb-0">Please share this unique link to with your community for participation.
                You can participate in the ICO and can see the stats about progress, pricing and details about the allocations.
            </p>
          </div>
      </div>
    </div>
    </>
  )
}

export const S = {
  Paragraph: styled(Paragraph)`
    margin-right: 30px;
    margin-bottom: 0px !important;
    font-size: 20px;
    color: #111827;
    font-family: 'Changa';
    display: inline;
  `,
  Row: styled(Row)`
    &.main {
      margin: 0px 100px;
      padding: 40px 30px;
      position: relative;
      z-index: 998;
      border-radius: 20px;
      top: -50px;
      @media (max-width: ${props => props.theme.viewport.desktopXl}) {
        margin: 0px 100px;
      }
      @media (max-width: ${props => props.theme.viewport.desktopl}) {
        margin: 0px 50px;
      }
      @media (max-width: ${props => props.theme.viewport.desktop}) {
        margin: 0px 30px;
      }
      @media (max-width: 767px) {
        margin: 0px 20px;
      }
      @media (max-width: ${props => props.theme.viewport.mobile}) {
        margin: 0px 10px;
      }
    }
    &.intro {
      padding: 120px 100px 30px;
      @media (max-width: ${props => props.theme.viewport.desktopXl}) {
        padding: 120px 100px 30px;
      }
      @media (max-width: ${props => props.theme.viewport.desktopl}) {
        padding: 120px 50px 30px;
      }
      @media (max-width: ${props => props.theme.viewport.desktop}) {
        padding: 120px 30px 30px;
      }
      @media (max-width: 767px) {
        padding: 120px 20px 30px;
      }
      @media (max-width: ${props => props.theme.viewport.mobile}) {
        padding: 120px 10px 30px;
      }
    }
    &.white {
      background-color: white;
    }
    &.black {
      background-color: #15171e;
    }
  `,
  Input: styled(Input)`
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.5;
    color: ${(props)=>props.theme.black.main};
    background: transparent;
    background-clip: padding-box;
    border: 1px solid ${(props)=>props.theme.blue.main};
    border-radius: 0.25rem;
    width: 100%;
    height: 50px;
    margin:20px 0px;
    display: inline-block;
    font-family: 'Changa';
    &::placeholder {
      color: ${(props)=>props.theme.black.light};
    }
  `,
  Button: styled(Button)`
    background: ${props=>props.theme.blue.main};
    color: ${props=>props.theme.white} !important;
    font-weight: 400;
    font-family: 'Changa';
    font-size: 18px; 
    border: 0px solid;
    cursor: pointer !important;
    width: 80px;
    height: 35px;
    line-height: 25px;
    text-align: center;
    &:hover,
    &:active {
      background-color: ${props=>props.theme.yellow.darker};
      color: ${props=>props.theme.white} !important;
    }
    &.blue {
      background: ${props=>props.theme.blue.main} !important;
    }
    &.gray {
      background: #666 !important;
    }
  `,
  Modal: styled(Modal)`
    .ant-modal-body {
      padding: 0;
    }
    .ant-modal-footer {
      display: flex;
      justify-content: center;
      span {
        color: white;
      }
      .ant-btn-default {
        background-color: ${props=>props.theme.yellow.darker}; 
        border: 0px solid; 
      }
    }
    .ant-modal-content {
      background: ${props => props.theme.light};
      border-radius: 16px;
      max-width: 300px;
      margin: auto;
      padding-top: 35px;
      .ant-modal-close {
        display: none;
      }
    }
    .ant-modal-header {
      background: ${props => props.theme.light};
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom: none;
    }
  `,
  Radio: styled(Radio)`
    color: black !important;
    font-family: 'Changa';
  `,
}
