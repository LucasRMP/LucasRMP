import { DisplayProps } from './constants'

export const Show: React.FC<DisplayProps> = ({ children, when }) => {
  return when ? <>{children}</> : null
}
