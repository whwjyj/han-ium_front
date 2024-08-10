const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#ffffff',
    accent: '#A7CDC3', // 기본색깔: A7CDC3
    black:"#0C0E0E",
    grey: '#DBD5D5',
};

export const SIZES = {
    h1: 30,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,

    width,
    height,
};

export const FONTWEIGHT = {
    bold: 'bold',
    normal: 'normal',
    weight500: '500',
    weight700: '700',
};