import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MessageIcon from '@mui/icons-material/Message';
import PushPinIcon from '@mui/icons-material/PushPin';
import SubtitlesIcon from '@mui/icons-material/Subtitles';


const navbarList = [
    {
        icon: HomeIcon,
        desc: "Home",
        secondDesc: "",
        badge: 0,
        path: '/overview',

        iconClosed: KeyboardArrowUpIcon,

    },
    {
        icon: PushPinIcon,
        desc: "Pin",
        secondDesc: "",
        path: '/reports',

        badge: 0,
        iconClosed: KeyboardArrowUpIcon,

    },
    {
        icon: ArticleIcon,
        desc: "document",
        secondDesc: "",
        path: '/products',

        badge: 0,
        iconClosed: KeyboardArrowUpIcon,

    },

    {
        icon: MessageIcon,
        desc: "MessageIcon",
        secondDesc: "",
        badge: 0,
        path: '/products',

        subList: [],
        iconClosed: KeyboardArrowUpIcon,


    },
    {
        icon: ListAltIcon,
        desc: "ListAltIcon",
        badge: 0,
        path: '/products',

        iconClosed: KeyboardArrowUpIcon,
        iconOpened: KeyboardArrowDownIcon,
        subNav: [
            {
                title: 'Users',
                icon: SubtitlesIcon
            },
            {
                title: 'Revenue',
                icon: SubtitlesIcon
            }
        ]
    },

];

export default navbarList;
