import attachment from './attachment.svg'
import command from './command.svg'
import crosshairsGps from './crosshairs-gps.svg'
import image from './image.svg'
import infinity from './infinity.svg'
import window from './window.svg'

// Wrap the icons as Vue components
export const AttachmentIcon = wrapIcon(attachment, 'IconAttachment')
export const CommandIcon = wrapIcon(command, 'IconCommand')
export const CrosshairsGpsIcon = wrapIcon(crosshairsGps, 'IconCrosshairsGps')
export const ImageIcon = wrapIcon(image, 'IconImage')
export const InfinityIcon = wrapIcon(infinity, 'IconInfinity')
export const WindowIcon = wrapIcon(window, 'IconWindow')

function wrapIcon(svg: string, name: string) {
  return () => h(name, [h('svg', { innerHTML: svg })])
}
