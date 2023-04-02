import Link from 'next/link'

import { Button } from '../button'

interface BuyMeACoffeeButtonProps {
  fullWidth?: boolean
}

export const BuyMeACoffeeButton: React.FC<BuyMeACoffeeButtonProps> = ({
  fullWidth = false,
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant="outlined"
      size="sm"
      component={Link}
      href="https://www.buymeacoffee.com/lucasrmp"
      target="_blank"
    >
      <span className="text-slate-50 text-xl">Buy me a Coffee</span>
    </Button>
  )
}
