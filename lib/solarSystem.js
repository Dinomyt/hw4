export function getPlanets() {
    return ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
}

export function getMercury() {
    return {
        image: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg',
        distanceFromSun: '39.704 million miles',
        yearLength: '88 Earth Days',
        description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon.',
        radius: 1516,
        websiteLink: 'https://solarsystem.nasa.gov/planets/mercury/overview/',
        oneEarthDay: '176 Earth Days',
        moons: 0
    };
}

export function getVenus() {
    return {
        image: 'https://solarsystem.nasa.gov/system/downloadable_items/1082_PIA00271_detail.jpg',
        distanceFromSun: '67.337 million miles',
        yearLength: '225 Earth Days',
        description: 'Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth.',
        radius: 3760,
        websiteLink: 'https://solarsystem.nasa.gov/planets/venus/overview/',
        oneEarthDay: '243 Earth Days',
        moons: 0
    };
}

export function getEarth() {
    return {
        image: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/4_earth.jpg',
        distanceFromSun: '91.433 million miles',
        yearLength: '365 Earth Days',
        description: 'Our home planet is the third planet from the Sun and the only place we know of so far that’s inhabited by living things.',
        radius: 3959,
        websiteLink: 'https://solarsystem.nasa.gov/planets/earth/overview/',
        oneEarthDay: '24 hours',
        moons: 1
    };
}

export function getMars() {
    return {
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
        distanceFromSun: '145.925 million miles',
        yearLength: '687 Earth Days',
        description: 'The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.',
        radius: 2106,
        websiteLink: 'https://solarsystem.nasa.gov/planets/mars/overview/',
        oneEarthDay: '24.6 hours',
        moons: 2
    };
}

export function getJupiter() {
    return {
        image: 'https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png',
        distanceFromSun: '485.316 million miles',
        yearLength: '4333 Earth Days',
        description: 'Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system.',
        radius: 88846,
        websiteLink: 'https://solarsystem.nasa.gov/planets/jupiter/overview/',
        oneEarthDay: '9.93 hours',
        moons: 79
    };
}

export function getSaturn() {
    return {
        image: 'https://solarsystem.nasa.gov/system/resources/detail_files/14379_IMG003379.jpg',
        distanceFromSun: '932.576 million miles',
        yearLength: '10759 Earth Days',
        description: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system.',
        radius: 36183.7,
        websiteLink: 'https://solarsystem.nasa.gov/planets/saturn/overview/',
        oneEarthDay: '10.7 hours',
        moons: 53
    };
}

export function getUranus() {
    return {
        image: 'https://images.ctfassets.net/cnu0m8re1exe/7hQBr1Got3iOOxCn4yJqSy/8ac59ceb4d08d0474a2688ac976b1693/neptune1-1024x727.jpg?w=650&h=433&fit=fill',
        distanceFromSun: '1.833 billion miles',
        yearLength: '30687 Earth Days',
        description: 'The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy.',
        radius: 15759.2,
        websiteLink: 'https://solarsystem.nasa.gov/planets/uranus/overview/',
        oneEarthDay: '17 hours 14 minutes',
        moons: 27
    };
}

export function getNeptune() {
    return {
        image: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/90_feature_1600x900_4.jpg',
        distanceFromSun: '2.782 billion miles',
        yearLength: '60190 Earth Days',
        description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.',
        radius: 15299.4,
        websiteLink: 'https://solarsystem.nasa.gov/planets/neptune/overview/',
        oneEarthDay: '16 hours',
        moons: 14
    };
}

export function getPluto() {
    return {
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg',
        distanceFromSun: '3.157 billion miles',
        yearLength: '90530 Earth Days',
        description: 'Dwarf planet. Pluto is a complex and mysterious world with mountains, valleys, plains, craters, and maybe glaciers.',
        radius: 715,
        websiteLink: 'https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/',
        oneEarthDay: '153 Earth Days',
        moons: 5
    };
}
