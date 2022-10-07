import { FC } from "react";
import { Box } from '@mui/material';

interface Props {
    title?: string,
    children: JSX.Element,
}

const Layout: FC<Props> = ({children}) => {
    return (
        <>

            <Box>
                { children }
            </Box>
        </>
    )
};


export default Layout