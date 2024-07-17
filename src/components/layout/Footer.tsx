import React from 'react'

export const Footer: React.FC = () => {

  return (
    <footer className="mt-5 py-4 border-top border-secondary">
      <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-auto">
                <small className="text-secondary">© Copyright 2024, All Rights Reserved.</small>
            </div>
            <div className="col-lg-auto text-secondary">
                <a href="#" className="text-decoration-none link-secondary">Privacy Policy</a> |
                <a href="#" className="text-decoration-none link-secondary">Terms & Conditions</a>
            </div>
            <div className="col-auto d-flex gap-2 ms-lg-auto mt-3 mt-lg-0">
                <a href="https://twitter.com/yciyccom" target="_blank" className="btn btn-outline-secondary btn-sm rounded-circle" title="Twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="https://t.me/yciyccom" target="_blank" className="btn btn-outline-secondary btn-sm rounded-circle" title="Telegram"><i className="bi bi-send-fill"></i></a>
                <a href="https://tgg.docsend.com/view/ujjnsdx6pyx6ypsu" target="_blank" className="btn btn-outline-secondary btn-sm rounded-circle" title="Docs"><i className="bi bi-file-earmark-text-fill"></i></a>
            </div>
          </div>
      </div>
    </footer>
  )
}
