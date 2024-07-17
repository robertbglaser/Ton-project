import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

export const Header = React.memo(() => {
    return (
        <header className="py-2 py-lg-3 mb-4">
            <div className="container">
               <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                     <a href="#"><img src="logo/logo.svg" className="logo" /></a>
                     <span className="txt-presale text-white newtype ps-2">Launchpad</span>
                  </div>
                  <div className="col-auto">
                     <TonConnectButton />
                  </div>
               </div>
            </div>
        </header>
    )
})