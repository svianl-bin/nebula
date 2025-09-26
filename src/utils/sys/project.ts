export const getBrandName = (uppercase?: boolean): string => {
    return uppercase ? import.meta.env.VITE_APP_BRAND.toUpperCase() : import.meta.env.VITE_APP_BRAND
}
