export interface Stage {
    tokenAmount: number
    duration: number
    discount: number
}
export interface Presale {
    start: string
    exchangeAllocation: number
    softcup: number
    hardcup: number
    stages: Stage[]
}

export interface LPSetting {
    wallet: string
    prevent_withdraw: boolean
}