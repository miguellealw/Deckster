import { useMediaQuery } from 'react-responsive'

// Desktop
export const DesktopUp = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 })
  return isDesktop ? children : null
}

export const BigDesktopUp = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1800 })
  return isDesktop ? children : null
}

// Tablet
export const TabletPortraitUp = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 600 })
  return isTablet ? children : null
}

export const TabletLandscapeUp = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 900 })
  return isTablet ? children : null
}

// Phone
export const PhoneOnly = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 599 })
  return isMobile ? children : null
}

export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
