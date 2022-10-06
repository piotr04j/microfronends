declare module 'marketing/MarketingIndex' {
    const mountMarketingApp:  (el: HTMLElement | null) => void
}

declare module 'auth/AuthIndex' {
    const mountAuthApp:  (el: HTMLElement | null) => void
}

declare module 'dashboard/DashboardIndex' {
    const mountDashboardApp:  (el: HTMLElement | null) => void
}

declare module '*.scss' {
    const content: Record<string, string>
    export default content
}
