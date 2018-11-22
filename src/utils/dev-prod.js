export const isProd = process.env.NODE_ENV === 'production';
export const devAndProd = (dev, prod) => (isProd ? prod : dev);
export const isDev = !isProd;
