import { useMediaQuery } from 'react-responsive'
import theme from '../theme'

// Desktop
export const DesktopUp = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: theme.breakpoints.desktopUp })
  return isDesktop ? children : null
}

export const BigDesktopUp = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: theme.breakpoints.bigDesktopUp })
  return isDesktop ? children : null
}

// Tablet
export const TabletPortraitUp = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: theme.breakpoints.tabletPortraitUp,
  })
  return isTablet ? children : null
}

export const TabletLandscapeUp = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: theme.breakpoints.tabletLandscapeUp,
  })
  return isTablet ? children : null
}

// Phone
export const PhoneOnly = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.phoneOnly })
  return isMobile ? children : null
}

export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
