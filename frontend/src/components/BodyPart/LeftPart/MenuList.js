import { AiOutlineBulb } from 'react-icons/ai';
import { BiBell, BiLabel, BiArchiveIn, BiTrash } from 'react-icons/bi';
import { HiOutlinePencil } from 'react-icons/hi';
export const menuList = [
    {
        key: 1,
        name: "Notes",
        icon: <AiOutlineBulb />,
        pathname:"/"
    },
    {
        key: 2,
        name: "Reminders",
        icon: <BiBell />,
        pathname:"/reminders"

    },
    {
        key: 3,
        name: "Job",
        icon: <BiLabel />,
        pathname:"/job"

    },
    {
        key: 4,
        name: "Edit labels",
        icon: <HiOutlinePencil />,
    },
    {
        key: 5,
        name: "Archive ",
        icon: <BiArchiveIn />,
        pathname:"/archive"

    },
    {
        key: 6,
        name: "Trash",
        icon: <BiTrash />,
        pathname:"/trash"

    },
];