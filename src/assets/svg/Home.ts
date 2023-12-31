import {colors} from '../colors';

export const Home = (color = colors.textGrey) => `
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12.5L11.204 3.54499C11.4151 3.33426 11.7012 3.2159 11.9995 3.2159C12.2978 3.2159 12.5839 3.33426 12.795 3.54499L21.75 12.5M4.5 10.25V20.375C4.5 20.996 5.004 21.5 5.625 21.5H9.75V16.625C9.75 16.004 10.254 15.5 10.875 15.5H13.125C13.746 15.5 14.25 16.004 14.25 16.625V21.5H18.375C18.996 21.5 19.5 20.996 19.5 20.375V10.25M8.25 21.5H16.5" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
