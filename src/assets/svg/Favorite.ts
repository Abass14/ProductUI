import {colors} from '../colors';

export const Favorite = (
  color = colors.textDarkGrey,
  backgroundColor = 'transparent',
) => `
<svg width="24" height="24" viewBox="0 0 24 24" fill=${backgroundColor} xmlns="http://www.w3.org/2000/svg">
<path d="M20.9988 8.25C20.9988 5.765 18.8998 3.75 16.3108 3.75C14.3758 3.75 12.7138 4.876 11.9988 6.483C11.2838 4.876 9.62184 3.75 7.68584 3.75C5.09884 3.75 2.99884 5.765 2.99884 8.25C2.99884 15.47 11.9988 20.25 11.9988 20.25C11.9988 20.25 20.9988 15.47 20.9988 8.25Z" stroke=${color} stroke-width="1.21292" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
