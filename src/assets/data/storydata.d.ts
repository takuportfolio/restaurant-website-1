import type StoryType from '../../types/storyType';

// Images
import AboutUsImage1 from '../../assets/images/aboutUs/image-1.png';
import AboutUsImage2 from '../../assets/images/aboutUs/image-2.png';
import AboutUsImage3 from '../../assets/images/aboutUs/image-3.png';

const storyData: StoryData = [
  {
    kicker: 'Our Roots',
    heading: 'Our Story',
    text: 'We blossomed from a simple desire: sharing the authentic tastes of our home. Founded in 2025 by our family, our love for fresh juicy meets guides everything. We strive to bring you a genuine taste of our roots.',
    imageSrc: AboutUsImage1,
    altText: 'Our Story',
    reverse: false // Or true, depending on your design, need to be sure css name here
  },
  {
    kicker: 'From Local Farms',
    heading: 'Fresh Meet',
    text: `We believe that exceptional dishes start with exceptional ingredients. We partner with trusted local farmers and suppliers right here to bring you the freshest, highest-quality meats. Our commitment to sourcing locally not only ensures superior flavor.`,
    imageSrc: AboutUsImage2,
    altText: 'Fresh Meet',
    reverse: true
  },
  {
    kicker: 'From Our Neighbors',
    heading: 'Local Nectar',
    text: `More than just ingredients, our vegetables represent a connection to our local neighbors. This "Local Nectar" is a testament to their hard work and the rich agricultural heritage of our region. Savor the authentic flavors of our community.`,
    imageSrc: AboutUsImage3,
    altText: 'Local Nectar',
    reverse: false
  },
  // ... more stories
];

export default storyData;