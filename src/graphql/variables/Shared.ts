import { makeVar } from '@apollo/client';
import { Token } from '../../types/tokenType';
import { Presale, LPSetting } from '../../types/presaleType';

export enum ThemeProviderEnum {
    light = 'light',
    dark = 'dark'
}

export const themeVar = makeVar<ThemeProviderEnum>(ThemeProviderEnum.light);
export const tokenVar = makeVar<Token>({name: 'dsa', ticker: '', logo: '', description: '', decimal: 9, price: 0});
export const presaleVar = makeVar<Presale>({start: new Date().toString(), exchangeAllocation: 1, softcup: 0, hardcup: 0, stages: [{tokenAmount: 0, duration: 0, discount: 0}]});
export const lpVar = makeVar<LPSetting>({wallet: '', prevent_withdraw: true});