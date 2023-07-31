/* eslint-disable */
export type Token = "colors.primary" | "colors.loContrast" | "colors.hiContrast" | "colors.gray.1" | "colors.gray.2" | "colors.gray.3" | "colors.gray.4" | "colors.gray.5" | "colors.gray.6" | "colors.gray.7" | "colors.gray.8" | "colors.gray.9" | "colors.gray.10" | "colors.gray.11" | "colors.gray.12" | "colors.gray.100" | "colors.gray.200" | "colors.gray.400" | "colors.gray.500" | "colors.gray.600" | "colors.gray.700" | "colors.gray.800" | "colors.gray.900" | "colors.error.background" | "colors.error.border" | "colors.error.color" | "colors.success.background" | "colors.success.border" | "colors.success.color" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.colorPalette.1" | "colors.colorPalette.2" | "colors.colorPalette.3" | "colors.colorPalette.4" | "colors.colorPalette.5" | "colors.colorPalette.6" | "colors.colorPalette.7" | "colors.colorPalette.8" | "colors.colorPalette.9" | "colors.colorPalette.10" | "colors.colorPalette.11" | "colors.colorPalette.12" | "colors.colorPalette.100" | "colors.colorPalette.200" | "colors.colorPalette.400" | "colors.colorPalette.500" | "colors.colorPalette.600" | "colors.colorPalette.700" | "colors.colorPalette.800" | "colors.colorPalette.900" | "colors.colorPalette.background" | "colors.colorPalette.border" | "colors.colorPalette.color"

export type ColorPalette = "gray" | "error" | "success"

export type ColorToken = "primary" | "loContrast" | "hiContrast" | "gray.1" | "gray.2" | "gray.3" | "gray.4" | "gray.5" | "gray.6" | "gray.7" | "gray.8" | "gray.9" | "gray.10" | "gray.11" | "gray.12" | "gray.100" | "gray.200" | "gray.400" | "gray.500" | "gray.600" | "gray.700" | "gray.800" | "gray.900" | "error.background" | "error.border" | "error.color" | "success.background" | "success.border" | "success.color" | "colorPalette.1" | "colorPalette.2" | "colorPalette.3" | "colorPalette.4" | "colorPalette.5" | "colorPalette.6" | "colorPalette.7" | "colorPalette.8" | "colorPalette.9" | "colorPalette.10" | "colorPalette.11" | "colorPalette.12" | "colorPalette.100" | "colorPalette.200" | "colorPalette.400" | "colorPalette.500" | "colorPalette.600" | "colorPalette.700" | "colorPalette.800" | "colorPalette.900" | "colorPalette.background" | "colorPalette.border" | "colorPalette.color"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type Tokens = {
		colors: ColorToken
		breakpoints: BreakpointToken
		sizes: SizeToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"