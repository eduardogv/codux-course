import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1087,
        windowHeight: 640,
    },
});
