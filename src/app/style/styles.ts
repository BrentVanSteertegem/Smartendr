const Breakpoints = {
    tablet: '46rem',
    desktop: '80rem',
}
  
const Colors = {
    neutrals: {
        white: '#fff',
        black: '#000',
    },
    tableItem: {
        background: '#fefefe',
        name: '#dfe0e7',
        timer: '#a7f19b'
    }
}
  
const TextColors = {
    light: Colors.neutrals.white,
    dark: Colors.neutrals.black
}
  
const Sizes = {
    small: '0.25rem',
    medium: '1rem',
    tableItem: '26rem',
}

const FontSizes = {
    medium: '1rem',
    large: '1.2rem',
}
  
const Padding = {
    small: Sizes.small,
    medium: Sizes.medium
}
  
export const Variables = {
    breakpoints: Breakpoints,
    colors: Colors,
    textColors: TextColors,
    sizes: Sizes,
    fontSizes: FontSizes,
    padding: Padding
}