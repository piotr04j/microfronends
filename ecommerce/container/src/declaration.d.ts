declare module 'marketing/MarketingApp' {
    const mountMarketingApp:  (el: HTMLElement | null) => void
}

declare module 'auth/AuthApp' {
    const mountAuthApp:  (el: HTMLElement | null) => void
}

declare module 'dashboard/DashboardApp' {
    const mountDashboardApp:  (el: HTMLElement | null) => void
}

declare module '*.scss' {
    const content: Record<string, string>
    export default content
}
