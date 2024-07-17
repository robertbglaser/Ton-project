import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeProviderEnum, themeVar } from '../graphql/variables/Shared';
import {AppContext} from '../contexts'
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { UserData } from '../types/userType';
import { login } from '../services/UserService';

const IcoStepFirstPage = lazy(() => import('../pages/IcoStepFirstPage'));
const IcoStepSecondPage = lazy(() => import('../pages/IcoStepSecondPage'));
const IcoStepThirdPage = lazy(() => import('../pages/IcoStepThirdPage'));
const PreviewFirstPage = lazy(() => import('../pages/PreviewFirstPage'));
const PreviewSecondPage = lazy(() => import('../pages/PreviewSecondPage'));
const NotFoundPage = lazy(() => import('../pages/Page404'));

export default function Router() {
    const [theme, setTheme] = useState({theme: localStorage.getItem('theme') + ''});

    useEffect(()=> {
        if(theme.theme === 'dark') {
            themeVar(ThemeProviderEnum.dark);
        } else {
            themeVar(ThemeProviderEnum.light);
        }
    }, [theme])

    const [user, setUser] = useState<UserData>({
        _id: '',
        authenticated: false,
        account: "",
        role: false
    });

    useEffect(() => {
      const autoLogin = async (account: string) => {
        const userdata: UserData = await login(account);
        setUser({
            _id: userdata['_id'],
            authenticated: userdata['authenticated'],
            account: userdata['account'],
            role: userdata['role']
        })
      }
    }, [])

    return (
        <>
        <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <AppContext.Provider value={{user, setUser, theme, setTheme}}>
              <Routes>        
                <Route path='/' element={<IcoStepFirstPage />} />
                <Route path='/second' element={<IcoStepSecondPage />} />
                <Route path='/third' element={<IcoStepThirdPage />} />
                <Route path='/third' element={<IcoStepThirdPage />} />
                <Route path='/previewfirst' element={<PreviewFirstPage />} />
                <Route path='/previewsecond' element={<PreviewSecondPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </AppContext.Provider>
          </Suspense>
        <Footer />
        </>
    )
} 
