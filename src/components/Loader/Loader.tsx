import { primaryColor } from '@colors'
import { IconLoader } from '@components/Icons'

export const Loader = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
    >
      <IconLoader width="40px" height="40px" fill={primaryColor} />
    </div>
  )
}
