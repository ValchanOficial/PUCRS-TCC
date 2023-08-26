import { BiLogoMastercard, BiLogoVisa } from 'react-icons/bi';
import { TiSocialFacebookCircular, TiSocialGithubCircular, TiSocialInstagramCircular, TiSocialLinkedinCircular } from "react-icons/ti";

export const getIcon = (icon: string = 'none') => ({
    'mastercard': BiLogoMastercard,
    'visa': BiLogoVisa,
    'instagram': TiSocialInstagramCircular,
    'facebook': TiSocialFacebookCircular,
    'linkedin': TiSocialLinkedinCircular,
    'github': TiSocialGithubCircular,
})[icon] || null;