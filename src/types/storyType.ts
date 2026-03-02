export default interface StoryType {
  kicker: string;
  heading: string;
  text: string;
  imageSrc: string; // or the correct image type
  altText: string;
  reverse?: boolean; // Optional property
}