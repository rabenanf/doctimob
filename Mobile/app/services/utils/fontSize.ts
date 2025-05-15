import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Dimensions de référence : iPhone 11 Pro (~375x812)
// Largeur de l"ecran 414 hauteur 896
// Largeur de l"ecran 360 hauteur 692

const baseWidth = 375;
const baseHeight = 812;

export const normalizeFont = (size: number) => {
    console.log('Largeur de l"ecran ' + SCREEN_WIDTH + ' hauteur ' + SCREEN_HEIGHT)
    var scale = 1;
    if (SCREEN_HEIGHT <  baseHeight)  
        scale = SCREEN_HEIGHT / baseHeight;

    const newSize = size * scale;

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
