import portfolioData from "@/data/portfolio-data.json"

export type PortfolioData = typeof portfolioData

export const getPortfolioData = (): PortfolioData => {
  return portfolioData
}

export const getPersonalInfo = () => portfolioData.personal
export const getNavigation = () => portfolioData.navigation
export const getSocialLinks = () => portfolioData.socialLinks
export const getHomeData = () => portfolioData.home
export const getAboutData = () => portfolioData.about
export const getProjectsData = () => portfolioData.projects
export const getResumeData = () => portfolioData.resume
export const getContactData = () => portfolioData.contact
export const getFooterData = () => portfolioData.footer
