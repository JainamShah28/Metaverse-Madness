import Planet01 from '../assets/planet-01.png';
import Planet02 from '../assets/planet-02.png';
import Planet03 from '../assets/planet-03.png';
import Planet04 from '../assets/planet-04.png';
import Planet05 from '../assets/planet-05.png';

import Vrpano from '../assets/vrpano.svg';
import Headset from '../assets/headset.svg';

import Planet06 from '../assets/planet-06.png';
import Planet07 from '../assets/planet-07.png';
import Planet08 from '../assets/planet-08.png';

import Twitter from '../assets/twitter.svg';
import LinkedIn from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';

interface ExploreWorlds {
    id: string,
    imgUrl: string,
    title: string
};

interface NewFeatures {
    imgUrl: string,
    title: string,
    subtitle: string
};

interface Social {
    name: string,
    url: string
};

const exploreWorlds: ExploreWorlds[] = [
    {
        id: 'world-1',
        imgUrl: Planet01,
        title: 'The Hogwarts',
    },
    {
        id: 'world-2',
        imgUrl: Planet02,
        title: 'The Upside Down',
    },
    {
        id: 'world-3',
        imgUrl: Planet03,
        title: 'Kadirojo Permai',
    },
    {
        id: 'world-4',
        imgUrl: Planet04,
        title: 'Paradise Island',
    },
    {
        id: 'world-5',
        imgUrl: Planet05,
        title: 'Hawkins Labs',
    },
];

const startingFeatures: string[] = [
    'Find a world that suits you and you want to enter',
    'Enter the world by reading basmalah to be safe',
    'No need to beat around the bush, just stay on the gas and have fun',
];

const newFeatures: NewFeatures[] = [
    {
        imgUrl: Vrpano,
        title: 'A new world',
        subtitle:
            'we have the latest update with new world for you to try never mind',
    },
    {
        imgUrl: Headset,
        title: 'More realistic',
        subtitle:
            'In the latest update, your eyes are narrow, making the world more realistic than ever',
    },
];

const insights: NewFeatures[] = [
    {
        imgUrl: Planet06,
        title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
        subtitle:
            'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
    },
    {
        imgUrl: Planet07,
        title: '7 tips to easily master the madness of the Metaverse',
        subtitle:
            'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
    },
    {
        imgUrl: Planet08,
        title: 'With one platform you can explore the whole world virtually',
        subtitle:
            'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
    },
];

const socials: Social[] = [
    {
        name: 'twitter',
        url: Twitter,
    },
    {
        name: 'linkedin',
        url: LinkedIn,
    },
    {
        name: 'instagram',
        url: Instagram,
    },
    {
        name: 'facebook',
        url: Facebook,
    },
];

export { exploreWorlds, startingFeatures, newFeatures, insights, socials };