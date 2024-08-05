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
        timer: '#a7f19b',
    }
}
  
const TextColors = {
    light: Colors.neutrals.white,
    dark: Colors.neutrals.black,
}
  
const NumericSizes = {
    xsmall: 0.25,
    small: 0.5,
    medium: 1,
    icon: 1.5,
    tableItem: 26,
}

const Sizes = {
    xsmall: `${NumericSizes.xsmall}rem`,
    small: `${NumericSizes.small}rem`,
    medium: `${NumericSizes.medium}rem`,
    icon: `${NumericSizes.icon}rem`,
    tableItem: `${NumericSizes.tableItem}rem`,
}

const NumericFontSizes = {
    medium: 1,
    large: 1.2,
}

const FontSizes = {
    medium: `${NumericFontSizes.medium}rem`,
    large: `${NumericFontSizes.large}rem`,
}

const NumericLineHeights = {
    medium: NumericFontSizes.medium * 1.1,
    large: NumericFontSizes.large * 1.1,
}

const LineHeights = {
    medium: `${NumericLineHeights.medium}rem`,
    large: `${NumericLineHeights.large}rem`,
}

const NumericPadding = {
    xsmall: NumericSizes.xsmall,
    small: NumericSizes.small,
    medium: NumericSizes.medium,
}
  
const Padding = {
    xsmall: `${NumericPadding.xsmall}rem`,
    small: `${NumericPadding.small}rem`,
    medium: `${NumericPadding.medium}rem`,
}

const NumericRounding = {
    xsmall: NumericSizes.xsmall,
}

const Rounding = {
    xsmall: `${NumericRounding.xsmall}rem`,
}
  
export const Variables = {
    breakpoints: Breakpoints,
    colors: Colors,
    textColors: TextColors,
    numericSizes: NumericSizes,
    sizes: Sizes,
    numericFontSizes: NumericFontSizes,
    fontSizes: FontSizes,
    numericLineHeights: NumericLineHeights,
    lineHeights: LineHeights,
    numericPadding: NumericPadding,
    padding: Padding,
    numericRounding: NumericRounding,
    rounding: Rounding,
}