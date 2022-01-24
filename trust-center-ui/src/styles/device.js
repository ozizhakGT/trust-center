const size = {
    mobileS: '280px',
    mobileM: '520px',
    mobileL: '800px',
    tablet: '1250px',
    laptop: '1450px',
    desktop: '1600px'
}

const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`
};

export default device;